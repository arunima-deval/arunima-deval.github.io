import { TrendingUp, Microscope, FlaskConical, ExternalLink, Mail, FileText } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arunimadeval/", icon: <LinkedInIcon /> },
  { label: "Berkeley Investment Group", href: "https://www.berkeleyinvestment.group/", icon: <TrendingUp size={14} /> },
  { label: "He Lab", href: "https://www.helabucb.org/", icon: <Microscope size={14} /> },
  { label: "Pazzi Lab", href: "https://sites.google.com/asdrp.org/pazzi/alumni", icon: <FlaskConical size={14} /> },
  { label: "arunimad@berkeley.edu", href: "mailto:arunimad@berkeley.edu", icon: <Mail size={14} /> },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-100 mt-8">
      <div className="px-4 md:px-12 pt-5 pb-2 flex flex-wrap gap-5">
        {links.map(({ label, href, icon }) => {
          const isEmail = href.startsWith("mailto:");
          return (
            <a
              key={label}
              href={href}
              {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex items-center gap-1.5 text-stone-400 hover:text-stone-800 transition-colors group"
            >
              <span>{icon}</span>
              <span className="text-sm underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-500 transition-colors">
                {label}
              </span>
              {!isEmail && <ExternalLink size={10} className="text-stone-300" />}
            </a>
          );
        })}
      </div>
      <div className="px-4 md:px-12 h-10 flex items-center justify-between text-sm text-stone-400 italic">
        <span>Arunima Deval</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
