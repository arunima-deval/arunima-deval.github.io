// Fetches daily closes for every ticker in app/pitches/page.tsx into data/prices.json,
// plus the 13-week T-bill yield (^IRX, in percent) used as the Sharpe risk-free rate.
// Runs in CI before each build; a ticker that fails to fetch keeps its previous data.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const PAGE = "app/pitches/page.tsx";
const OUT = "data/prices.json";

const tickers = [...new Set([...readFileSync(PAGE, "utf8").matchAll(/ticker:\s*"([A-Z.\-]+)"/g)].map((m) => m[1])), "^IRX"];
const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : { prices: {} };
const prices = { ...previous.prices };

for (const ticker of tickers) {
  try {
    const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?range=5y&interval=1d`, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = (await res.json()).chart.result[0];
    const closes = result.indicators.quote[0].close;
    const series = result.timestamp
      .map((t, i) => [new Date(t * 1000).toISOString().slice(0, 10), closes[i]])
      .filter(([, c]) => c != null)
      .map(([d, c]) => [d, Math.round(c * 100) / 100]);
    const last = result.meta.regularMarketPrice;
    if (last != null) series[series.length - 1][1] = Math.round(last * 100) / 100;
    prices[ticker] = series;
    console.log(`${ticker}: ${series.length} closes, last ${series.at(-1).join(" ")}`);
  } catch (err) {
    console.warn(`${ticker}: fetch failed (${err.message}), keeping previous data`);
  }
}

writeFileSync(OUT, JSON.stringify({ updated: new Date().toISOString(), prices }) + "\n");
