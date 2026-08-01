import { navLinks } from '../data/schoolData.js';

export default function Navbar({ onBookTour }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/35 bg-ivory/75 px-5 py-3 shadow-glow backdrop-blur-2xl">
        <a href="#top" className="flex items-center gap-3 font-bold tracking-tight text-blueberry">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-blueberry text-lg text-ivory">BF</span>
          <span className="hidden sm:block">Blueberry Fields</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-blueberry/75 md:flex">
          {navLinks.map((link) => <a key={link.href} className="transition hover:text-violet" href={link.href}>{link.label}</a>)}
        </div>
        <button onClick={onBookTour} className="rounded-full bg-blueberry px-5 py-3 text-sm font-bold text-ivory shadow-lg transition hover:-translate-y-0.5 hover:bg-violet">
          Book Tour
        </button>
      </nav>
    </header>
  );
}
