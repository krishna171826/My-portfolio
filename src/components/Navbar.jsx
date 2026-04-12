

const navItems = ['Home', 'About', 'Projects', 'Contact']



export function IslandNavbar() {
  return (
    <header className="absolute left-1/2 top-6 z-20 w-[min(92vw,760px)] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_8px_28px_rgba(255,255,255,0.04)] backdrop-blur-xl">
        <a
          href="#"
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90"
        >
          Portfolio
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Let&apos;s Talk
        </button>
      </nav>
    </header>
  )
}