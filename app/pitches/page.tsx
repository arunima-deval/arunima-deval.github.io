import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

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
  logo: string;
  note?: string;
  links: PitchLink[];
}

const pitches: Pitch[] = [
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
    logo: "/rivian.png",
    note: "Top 6 at Point 72 Case Competition",
    links: [
      { label: "Deck", url: "https://drive.google.com/file/d/1YeMUqRWi03nmG16RZNKuLifHSvEYuZyL/view?usp=sharing" },
      { label: "Model", url: "https://docs.google.com/spreadsheets/d/1_jgfMLqLaLCT0HwY82hK4zJ8bQSTJXmD/edit?usp=drive_link" },
    ],
  },
];

export default function PitchesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-4">
          Investment Pitches
        </h1>
        <p className="text-sm text-stone-700 leading-relaxed mb-6">
          I mostly specialize in Healthcare and Consumer sectors but I love expanding my horizons by pitching stocks in other sectors. I am always happy to hear feedback or just chat about any of these. Please feel free to reach out at <a href="mailto:arunimad@berkeley.edu" className="underline underline-offset-4 decoration-stone-300 hover:text-stone-900 transition-colors">arunimad@berkeley.edu</a>
        </p>

        <div className="flex flex-col">
          {pitches.map((pitch, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b border-stone-100 last:border-0">
              <div className="w-24 shrink-0 flex items-center justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pitch.logo} alt={pitch.company} width={96} height={48} className="max-h-12 max-w-full object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4 mb-2">
                  <div>
                    <span className="text-base font-semibold text-stone-900">{pitch.company}</span>
                    <span className="text-sm text-stone-600 ml-2">{pitch.exchange}: {pitch.ticker}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <span className="text-sm text-stone-600">{pitch.industry}</span>
                    <span className={`text-sm font-semibold rounded-full px-2.5 py-0.5 ${pitch.type === "Long" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
                      {pitch.type}
                    </span>
                    <span className="text-sm text-stone-600 italic">{pitch.date}</span>
                  </div>
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
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
