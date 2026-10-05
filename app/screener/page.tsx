import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

export default function ScreenerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-2">
          Stock Screener
        </h1>
        <p className="text-sm text-red-400 italic mb-6">Last updated Aug 15th</p>
        <p className="text-sm text-stone-500 leading-relaxed mb-8">
          I built this to automate part of the investment research process. As an analyst,
          I wanted to create a platform to consolidate filings and display sector-specific
          metrics. I also wanted the screener to utilize case studies of some of the greats:
          Feshbach Brothers, Julian Robertson, Michael Porter, and DiMenna. Currently it
          pulls over 40 non-traditional metrics across over 6,000 NASDAQ/NYSE tickers.
        </p>
        <p className="text-sm text-stone-500 leading-relaxed mb-10">
          This is an initial version, and there are a lot more features I plan to add. If
          you find a bug, have ideas, or just want to talk through my approach, please reach
          out.{" "}
          <a href="mailto:arunimad@berkeley.edu" className="underline underline-offset-4 decoration-stone-300 hover:text-stone-900 transition-colors">
            arunimad@berkeley.edu
          </a>
        </p>
        <a href="https://sweet-nasturtium-ea90d5.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-stone-900 hover:text-stone-500 transition-colors">
          Launch Screener →
        </a>
      </main>
      <Footer />
    </div>
  );
}
