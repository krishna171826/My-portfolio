import { useState } from 'react'
import { Link } from 'react-router-dom'

const routeMap = {
  Home: '/',
  About: '/about',
  Competences: '/competences',
  Project: '/project',
};

const orderedNavItems = ['Home', 'About', 'Competences', 'Project'];

export function IslandNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute left-1/2 top-6 z-20 w-[min(92vw,760px)] -translate-x-1/2">
      <nav className="relative flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_8px_28px_rgba(255,255,255,0.04)] backdrop-blur-xl">
        {/* Logo linking back to Home */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90"
        >
          Portfolio
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {orderedNavItems.map((item) => (
            <li key={item}>
              <Link
                to={routeMap[item]}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Example: Download button for CV */}
          <button
            type="button"
            className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            CV
          </button>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 sm:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-white" />
              <span className="h-0.5 w-5 rounded-full bg-white" />
              <span className="h-0.5 w-5 rounded-full bg-white" />
            </span>
          </button>
        </div>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-3xl border border-white/10 bg-[#0b0b10]/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 sm:hidden ${
            isMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <div className="grid gap-2">
            {orderedNavItems.map((item) => (
              <Link
                key={item}
                to={routeMap[item]}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}