import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-stone-100 bg-[#FDFCF8]/90 backdrop-blur-sm">
      <div className="px-12 h-16 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold text-stone-900 hover:text-stone-400 transition-colors">
          Arunima Deval
        </Link>
        <div className="flex items-center gap-6 text-base text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <Link href="/pitches" className="hover:text-stone-900 transition-colors">Investment Pitches</Link>
          <Link href="/research" className="hover:text-stone-900 transition-colors">Research</Link>
          <Link href="/screener" className="hover:text-stone-900 transition-colors">Stock Screener</Link>
        </div>
      </div>
    </nav>
  );
}
