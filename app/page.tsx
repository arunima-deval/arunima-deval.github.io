import Link from "next/link";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const workCards = [
  {
    title: "Foreword Capital · Analyst Intern",
    blurb: ["Covered SWX: IDIA's portfolio, mapping the competitive landscape across 4 pipeline assets.", "Evaluated Phase 3 candidates both mechanistically and financially, and built debt repayment waterfall models."],
    href: "",
    external: false,
    noLink: true,
    bg: "#D4C5B5",
    cta: "",
  },
  {
    title: "Affinity Asset Advisors · Analyst Intern",
    blurb: ["Healthcare analyst at a $1.9B AUM biotech and healthcare fund covering the Angelman syndrome therapeutics landscape.", "Built top down valuation models across a combined TAM of 40-80K."],
    href: "",
    external: false,
    noLink: true,
    bg: "#C0CED8",
    cta: "",
  },
  {
    title: "Berkeley Investment Group · Pod Lead & Intern Director",
    blurb: "Lead the Healthcare Pod at BIG's $140K student-managed fund. Pitched L/S ideas across healthcare, consumer & tech (Top 6 at the Point 72 Case Competition).",
    href: "/pitches",
    external: false,
    bg: "#D8DCAA",
    cta: "See investment pitches →",
  },
  {
    title: "Equity Intelligence Platform · Developer",
    blurb: "Screens using over 40 non-traditional metrics across NASDAQ/NYSE tickers, inspired by Tiger Global value longs and Porter/Feshbach short case studies.",
    href: "https://sweet-nasturtium-ea90d5.netlify.app/",
    external: true,
    bg: "#A8C8CC",
    cta: "See stock screener →",
  },
];

const researchCards = [
  {
    title: "Research · He Lab",
    blurb: "Investigating the NC domain of MERVL Gag and its role in RNA binding during early mouse embryogenesis. Selected to present at the 2026 Undergraduate Research Forum.",
    href: "/research",
    bg: "#E0C8D0",
    cta: "See research →",
  },
  {
    title: "Research · He Lab",
    blurb: "Understanding ESCRT-III machinery localization and functions involved in membrane abscission during cell division in mouse models. Selected to present at the 2026 Undergraduate Research Forum.",
    href: "/research",
    bg: "#D4A8B4",
    cta: "See research →",
  },
  {
    title: "Research · Analytical Chemistry",
    blurb: "Developed a low-cost nanoscale water filter using Ginkgo Xylem designed for communities without access to conventional treatment.",
    href: "/research",
    bg: "#C8C0D8",
    cta: "See research →",
  },
  {
    title: "Research · Pazzi Lab",
    blurb: "Created an image analysis software in Python and OpenCV to characterize lipid networks from fluorescence microscopy images.",
    href: "/research",
    bg: "#B8C8E8",
    cta: "See research →",
  },
];

function Card({ title, blurb, bg, cta, noLink }: { title: string; blurb: string | string[]; bg: string; cta: string; noLink?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 flex flex-col justify-between h-full transition-all ${!noLink && "hover:opacity-90 hover:shadow-sm cursor-pointer"}`}
      style={{ backgroundColor: bg }}
    >
      <div>
        <h3 className="text-sm font-semibold text-stone-800 leading-snug mb-2">{title}</h3>
        {Array.isArray(blurb)
          ? blurb.map((line, i) => <p key={i} className="text-sm text-stone-700 leading-relaxed mb-1 last:mb-0">{line}</p>)
          : <p className="text-sm text-stone-700 leading-relaxed">{blurb}</p>}
      </div>
      {cta && <p className="text-sm mt-3 text-stone-900 font-bold">{cta}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1 w-full px-4 md:px-12 pt-20 pb-2 flex flex-col gap-3">

        {/* Bio + Photo */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          <div className="w-36 h-36 md:hidden rounded-2xl overflow-hidden bg-stone-100 shrink-0">
            <img src="/headshot.jpg" alt="Arunima Deval" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-3 leading-tight">
              About Me
            </h1>
            <div className="text-stone-800 leading-relaxed text-sm flex flex-col gap-3">
              <p>Hi! My name is Arunima Deval and I am a student at UC Berkeley studying Economics and Chemical Biology in the College of Chemistry. I am from the Pacific Northwest (Seattle, Portland) and I am incredibly passionate about investing.</p>
              <p>I have worked for a few single manager funds (Affinity Asset Advisors and Foreword Capital) doing biotech credit and equity investing, but I enjoy expanding my horizons by exploring companies in all sectors. I was also a Top 6 finalist at the Point 72 Case Competition and have done research in several labs. I am currently an undergraduate researcher in the He Lab at UC Berkeley studying endogenous retroviruses (ancient viral sequences embedded in non coding DNA in the genome) involved in RNA binding and abscission during cell division. I&apos;ve also been experimenting with stock screening and I have built a screener that filters NASDAQ/NYSE tickers based on Feshbach, Robertson, Porter, and DiMenna strategies.</p>
              <p>Always happy to chat so please feel free to reach out!</p>
            </div>
          </div>

          <div className="hidden md:block w-44 self-stretch rounded-2xl overflow-hidden bg-stone-100 shrink-0 min-h-44">
            <img src="/headshot.jpg" alt="Arunima Deval" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Work cards — 4 columns */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mt-2">Investing Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {workCards.map((card) =>
            card.noLink ? (
              <div key={card.title}>
                <Card {...card} />
              </div>
            ) : card.external ? (
              <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                <Card {...card} />
              </a>
            ) : (
              <Link key={card.title} href={card.href}>
                <Card {...card} />
              </Link>
            )
          )}
        </div>

        {/* Research cards — 2×2 */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mt-2">Research Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {researchCards.map((card) => (
            <Link key={card.title + card.bg} href={card.href}>
              <Card {...card} />
            </Link>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}
