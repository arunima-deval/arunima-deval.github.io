import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

interface Project {
  title: string;
  description: string;
  poster?: string;
}

interface ResearchEntry {
  lab: string;
  role: string;
  period: string;
  note?: string;
  color: string;
  projects: Project[];
}

const entries: ResearchEntry[] = [
  {
    lab: "He Lab · UC Berkeley",
    role: "Undergraduate Researcher",
    period: "Sep 2024 – Present",
    color: "#E0C8D0",
    note: "Selected to present at the 2026 Undergraduate Research Forum (URF).",
    projects: [
      {
        title: "NC Domain Role in MERVL Gag RNA Binding",
        description:
          "Investigated how the nucleocapsid (NC) domain of MERVL Gag mediates RNA binding in HEK 293 cells. Used biotin-labeled RNA pulldown, Co-IP, and western blotting to establish NC-dependence of the Gag–RNA interaction and identify optimal protein concentration for sequence specificity.",
        poster: "https://docs.google.com/presentation/d/1ADM-0aoTLnVSWZHuWWnShW4R-t3lRpvyGFDLz8kb7g0/present?slide=id.p1",
      },
      {
        title: "VPS4A ATPase & ESCRT-III in 2-Cell Membrane Abscission",
        description:
          "Characterized VPS4A/B and ESCRT-III component (VPS28, IST1, CHMP1A) localization during cytokinetic abscission in early embryos. Cloned mScarlet-tagged constructs and a dominant-negative VPS4A EQ mutant to study ESCRT-III filament disassembly dynamics.",
        poster: "https://docs.google.com/presentation/d/1ADM-0aoTLnVSWZHuWWnShW4R-t3lRpvyGFDLz8kb7g0/present?slide=id.p1",
      },
    ],
  },
  {
    lab: "Analytical Chemistry Research · UC Berkeley",
    role: "Student Researcher",
    period: "Jan 2025 – May 2025",
    color: "#C8C0D8",
    note: "Selected to present at the Chemistry Research Symposium.",
    projects: [
      {
        title: "Nanoscale Water Filtration via Ginkgo Xylem",
        description:
          "Developed a low-cost nanoscale water filter reducing Cu²⁺ ions using Ginkgo Xylem as a filtration medium designed for underserved communities without access to conventional water treatment. Presented to 516+ attendees.",
        poster: "https://docs.google.com/presentation/d/1g7p4mYM0z_kHxs3VRlPIK9orWGvBAO30k8rTBYH-rY0/present?slide=id.g3dd9ee3d5aa_0_62",
      },
    ],
  },
  {
    lab: "Pazzi Lab · ASDRP",
    role: "Student Researcher",
    period: "Jun 2023 – Jan 2024",
    color: "#B8C8E8",
    note: "Selected to present at the Boston Bioprocessing Summit.",
    projects: [
      {
        title: "Lipid Network Drug Delivery & Image Analysis",
        description:
          "Created lipid networks for efficient drug delivery and built fluorescence microscopy image analysis software in Python/OpenCV to quantify lipid structures. Presented at the Boston Bioprocessing Summit (1,500 attendees, 300 projects).",
        poster: "/pazziposter.png",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-10">
          Research Experience
        </h1>

        <div className="flex flex-col gap-8">
          {entries.map((entry) => (
            <div key={entry.lab}>
              <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: entry.color }}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h2 className="text-base font-semibold text-stone-900">{entry.lab}</h2>
                  <span className="text-sm text-stone-600 italic shrink-0">{entry.period}</span>
                </div>
                {entry.note && <p className="text-sm text-stone-600 mt-1">{entry.note}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 px-1">
                {entry.projects.map((project) => (
                  <div key={project.title} className={`border-l-2 border-stone-200 pl-4 ${entry.projects.length === 1 ? "md:col-span-2" : ""}`}>
                    <h3 className="text-sm font-semibold text-stone-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{project.description}</p>
                    {project.poster ? (
                      <a
                        href={project.poster}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-600 transition-colors"
                      >
                        View Poster →
                      </a>
                    ) : (
                      <p className="mt-3 text-sm text-stone-400 italic">Poster coming soon</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
