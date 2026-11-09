import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { PriceChart } from "./price-chart";
import priceData from "../../data/prices.json";

interface PitchLink {
  label: string;
  url: string;
}

interface Pitch {
  company: string;
  ticker: string;
  exchange: string;
  type: "Long" | "Short";
  industry: string;
  date: string;
  closed?: string;
  logo: string;
  note?: string;
  links: PitchLink[];
}

const pitches: Pitch[] = [
  {
    company: "Nike",
    ticker: "NKE",
    exchange: "NYSE",
    type: "Short",
    industry: "Consumer Discretionary",
    date: "11/02/26",
    logo: "/NKE.png",
    links: [
      { label: "Deck", url: "https://drive.google.com/file/d/1VDn86uio5d86lQzbwIvuJlMEwQKjKIa6/view?usp=drive_link" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/1lZbqOMXJ4G1zJLm7myLx_tTukge56U4n/edit?usp=drive_link&rtpof=true&sd=true" },
    ],
  },
  {
    company: "Amer Sports",
    ticker: "AS",
    exchange: "NYSE",
    type: "Long",
    industry: "Consumer Discretionary",
    date: "10/20/26",
    logo: "/AS.png",
    links: [
      { label: "Memo", url: "https://drive.google.com/file/d/1O0x9UTZphQs88SDS0fBWxBic4_wVia-x/view?usp=drive_link" },
    ],
  },
  {
    company: "Best Buy",
    ticker: "BBY",
    exchange: "NYSE",
    type: "Short",
    industry: "Consumer Discretionary",
    date: "10/01/26",
    logo: "/BBY.png",
    links: [],
  },
  {
    company: "Anheuser-Busch InBev",
    ticker: "BUD",
    exchange: "NYSE",
    type: "Long",
    industry: "Consumer Staples",
    date: "09/28/26",
    logo: "/ABI.png",
    links: [
      { label: "Pitch", url: "https://drive.google.com/file/d/16K9qwYV-fQaJPxc9llgS56DJcHxjfBhI/view?usp=drive_link" },
    ],
  },
  {
    company: "Estée Lauder",
    ticker: "EL",
    exchange: "NYSE",
    type: "Short",
    industry: "Consumer Staples",
    date: "09/01/26",
    logo: "/EL.png",
    links: [],
  },
  {
    company: "Flutter Entertainment PLC",
    ticker: "FLUT",
    exchange: "NYSE",
    type: "Long",
    industry: "Consumer Discretionary",
    date: "04/30/26",
    logo: "/flutter.png",
    links: [
      { label: "Deck", url: "https://drive.google.com/file/d/1T9obOZOhWKjdbTffn0Kb66N9ZofRMgW-/view?usp=drive_link" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/1ibqbPnUci_5bBRN4tMDaiIiu-g37YWO4/edit?usp=drive_link" },
    ],
  },
  {
    company: "Celldex Therapeutics",
    ticker: "CLDX",
    exchange: "NASDAQ",
    type: "Long",
    industry: "Healthcare",
    date: "03/23/26",
    logo: "/celldex.png",
    links: [
      { label: "Pitch", url: "https://drive.google.com/file/d/15WVj19r5VHxGcBzvGMw0QoLn2L2b3dF_/view?usp=drive_link" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/18IW_763Ke9d4wu4gxMsx2SpNWFnGmWL-/edit?usp=drive_link" },
    ],
  },
  {
    company: "Roku",
    ticker: "ROKU",
    exchange: "NASDAQ",
    type: "Short",
    industry: "TMT",
    date: "01/27/26",
    closed: "06/15/26",
    logo: "/roku.png",
    links: [
      { label: "Pitch", url: "https://drive.google.com/file/d/1AzfH_6gdhWP-15Y-SLVq8saI3IQMUxRi/view?usp=drive_link" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/1_CTTDbM5akxleNAsJ0no4NXAnjDqI11o/edit?usp=drive_link" },
    ],
  },
  {
    company: "Dutch Bros",
    ticker: "BROS",
    exchange: "NYSE",
    type: "Short",
    industry: "Consumer Discretionary",
    date: "01/11/26",
    closed: "09/30/26",
    logo: "/bros.png",
    links: [
      { label: "Pitch", url: "https://drive.google.com/file/d/1efsMSaobcZTm1VD5qhLPDpngz03Kzy5F/view?usp=drive_link" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/10EzjKLXpebaz0hNrteFjkpaJd39aKR2i/edit?usp=drive_link" },
    ],
  },
  {
    company: "Vertex Pharmaceuticals",
    ticker: "VRTX",
    exchange: "NASDAQ",
    type: "Long",
    industry: "Healthcare",
    date: "10/27/25",
    logo: "/vertex.png",
    links: [
      { label: "Deck", url: "https://docs.google.com/presentation/d/1zZfUWhzLx3QnmjAMJlggFYiHc7FwLq-q/edit?usp=drive_link" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/1pugD9iLXBRy5sre9p7YWzUOLxKbtJUEQ/edit?usp=drive_link" },
    ],
  },
  {
    company: "Rivian Automotive",
    ticker: "RIVN",
    exchange: "NASDAQ",
    type: "Long",
    industry: "Industrials",
    date: "10/10/25",
    closed: "06/30/26",
    logo: "/rivian.png",
    note: "Top 6 at Point 72 Case Competition",
    links: [
      { label: "Deck", url: "https://drive.google.com/file/d/1YeMUqRWi03nmG16RZNKuLifHSvEYuZyL/view?usp=sharing" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/1_jgfMLqLaLCT0HwY82hK4zJ8bQSTJXmD/edit?usp=drive_link" },
    ],
  },
  {
    company: "Life Time Group Holdings",
    ticker: "LTH",
    exchange: "NYSE",
    type: "Long",
    industry: "Consumer Discretionary",
    date: "05/26/25",
    closed: "06/30/26",
    logo: "/LTH.png",
    links: [
      { label: "Deck", url: "https://drive.google.com/file/d/1999cOwUSDyrEIPUdJk6N2rY3NctD__sn/view?usp=drive_link" },
    ],
  },
];

const prices = priceData.prices as unknown as Record<string, [string, number][]>;

// "MM/DD/YY" -> "20YY-MM-DD"
function isoDate(date: string) {
  const [m, d, y] = date.split("/");
  return `20${y}-${m}-${d}`;
}

// Daily risk-free rate by date, from the 13-week T-bill yield (percent, annualized).
const riskFree = new Map((prices["^IRX"] ?? []).map(([d, y]) => [d, y / 100 / 252]));
const lastRiskFree = (prices["^IRX"]?.at(-1)?.[1] ?? 0) / 100 / 252;
const MIN_DAYS = 20;

// Annualized Sharpe ratio of daily returns keyed by date; null with under a month of data.
function sharpe(daily: [string, number][]) {
  if (daily.length < MIN_DAYS) return null;
  const excess = daily.map(([d, r]) => r - (riskFree.get(d) ?? lastRiskFree));
  const mean = excess.reduce((a, b) => a + b, 0) / excess.length;
  const variance = excess.reduce((a, b) => a + (b - mean) ** 2, 0) / (excess.length - 1);
  return variance > 0 ? (mean / Math.sqrt(variance)) * Math.sqrt(252) : null;
}

// Closes from the first trading day on or after the pitch date through the close
// date (if the position is closed), the return of the call (a short gains when the
// price falls), and its daily returns.
function performance(pitch: Pitch) {
  const start = isoDate(pitch.date);
  const end = pitch.closed ? isoDate(pitch.closed) : "9999";
  const points = (prices[pitch.ticker] ?? []).filter(([d]) => d >= start && d <= end);
  if (points.length === 0) return null;
  const sign = pitch.type === "Long" ? 1 : -1;
  const entry = points[0][1];
  const current = points[points.length - 1][1];
  const daily: [string, number][] = points.slice(1).map(([d, c], i) => [d, sign * (c / points[i][1] - 1)]);
  return { points, entry, current, ret: sign * ((current - entry) / entry), daily, sharpe: sharpe(daily) };
}

const performances = pitches.map(performance);
const tracked = performances.filter((p) => p !== null);

// Equal-weight book: each day, the average return of every call open that day.
const byDate = new Map<string, number[]>();
for (const p of tracked) for (const [d, r] of p.daily) byDate.set(d, [...(byDate.get(d) ?? []), r]);
// Skip days with a single open call, so one stock's swings don't stand in for the book.
const bookDaily = [...byDate.entries()]
  .filter(([, rs]) => rs.length >= 2)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([d, rs]) => [d, rs.reduce((a, b) => a + b, 0) / rs.length] as [string, number]);
const bookSharpe = sharpe(bookDaily);

// Growth of $1 in the book, starting the trading day before its first counted return.
const allDates = [...byDate.keys()].sort();
const bookStart = allDates[allDates.indexOf(bookDaily[0][0]) - 1] ?? bookDaily[0][0];
const equity: [string, number][] = [[bookStart, 1]];
for (const [d, r] of bookDaily) equity.push([d, equity[equity.length - 1][1] * (1 + r)]);
const bookEnd = equity[equity.length - 1][0];
const cumReturn = equity[equity.length - 1][1] - 1;
const bookDays = (Date.parse(bookEnd) - Date.parse(bookStart)) / 86_400_000;
const annualized = (1 + cumReturn) ** (365 / bookDays) - 1;
let peak = 1;
let maxDrawdown = 0;
for (const [, v] of equity) {
  peak = Math.max(peak, v);
  maxDrawdown = Math.min(maxDrawdown, v / peak - 1);
}

function formatSharpe(x: number | null) {
  return x === null ? "-" : `${x < 0 ? "-" : ""}${Math.abs(x).toFixed(2)}`;
}

function formatPct(x: number) {
  return `${x >= 0 ? "+" : "-"}${Math.abs(x * 100).toFixed(1)}%`;
}

export default function PitchesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 px-4 md:px-12 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 mb-6 pb-6 border-b border-stone-200">
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-4">
              Investment Pitches
            </h1>
            <p className="text-sm text-stone-700 leading-relaxed">
              I mostly specialize in Healthcare and Consumer sectors but I love expanding my horizons by pitching stocks in other sectors. I am always happy to hear feedback or just chat about any of these. Please feel free to reach out at <a href="mailto:arunimad@berkeley.edu" className="underline underline-offset-4 decoration-stone-300 hover:text-stone-900 transition-colors">arunimad@berkeley.edu</a>
            </p>
          </div>
          <dl className="grid grid-cols-[auto_auto] gap-x-8 gap-y-2 text-sm shrink-0 md:pt-2">
            <dt className="text-stone-600">Sharpe</dt>
            <dd className="text-right font-semibold tabular-nums text-stone-900">{formatSharpe(bookSharpe)}</dd>
            <dt className="text-stone-600">Max DD</dt>
            <dd className="text-right font-semibold tabular-nums text-stone-900">{formatPct(maxDrawdown)}</dd>
            <dt className="text-stone-600">Annualised</dt>
            <dd className="text-right font-semibold tabular-nums text-stone-900">{formatPct(annualized)}</dd>
          </dl>
        </div>

        <div className="flex flex-col">
          {pitches.map((pitch, i) => {
            const perf = performances[i];
            return (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b border-stone-100 last:border-0">
              <div className="w-24 shrink-0 flex items-center justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pitch.logo} alt={pitch.company} width={96} height={48} className="max-h-12 max-w-full object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <span className="text-base font-semibold text-stone-900">{pitch.company}</span>
                  <span className="text-sm text-stone-600 ml-2">{pitch.exchange}: {pitch.ticker}</span>
                </div>

                {pitch.note && <p className="text-sm text-stone-600 italic mb-3">{pitch.note}</p>}

                <div className="flex items-center gap-5">
                  {pitch.links.length > 0 ? pitch.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-stone-900 hover:text-stone-400 transition-colors underline underline-offset-4 decoration-stone-300">
                      {link.label} →
                    </a>
                  )) : (
                    <span className="text-sm text-stone-400 italic">Coming soon</span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-end md:gap-1 md:w-44 shrink-0 md:order-last">
                <span className={`text-sm font-semibold rounded-full px-2.5 py-0.5 ${pitch.type === "Long" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
                  {pitch.type}
                </span>
                <span className="text-sm text-stone-600 md:text-right">{pitch.industry}</span>
                <span className="text-sm text-stone-600 italic">{pitch.date}</span>
                {pitch.closed && <span className="text-sm text-stone-400 italic">Closed {pitch.closed}</span>}
              </div>

              {perf && (
                <div className="flex items-center gap-6 md:w-[26rem] shrink-0">
                  <div className="w-24 shrink-0 md:text-right">
                    <div className={`text-xl font-semibold tabular-nums ${perf.ret >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                      {formatPct(perf.ret)}
                    </div>
                    <div className="text-xs text-stone-500 tabular-nums">
                      ${perf.entry.toFixed(2)} → ${perf.current.toFixed(2)}
                    </div>
                    <div className="text-xs text-stone-500 tabular-nums">
                      Sharpe {formatSharpe(perf.sharpe)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <PriceChart ticker={pitch.ticker} points={perf.points} entry={perf.entry} />
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
