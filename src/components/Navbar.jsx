import { Link } from 'react-router-dom';

const routeMap = {
  Home: '/',
  About: '/about',
  Competences: '/competences',
  Project: '/project',
};

const orderedNavItems = ['Home', 'About', 'Competences', 'Project'];

export function IslandNavbar() {
  return (
    <header className="absolute left-1/2 top-6 z-20 w-[min(92vw,760px)] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_8px_28px_rgba(255,255,255,0.04)] backdrop-blur-xl">
        
        {/* Logo linking back to Home */}
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90"
        >
          Portfolio
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {orderedNavItems.map((item) => (
            <li key={item}>
              <Link
                to={routeMap[item]}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Example: Download button for CV */}
        <button
          type="button"
          className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          CV
        </button>
      </nav>
    </header>
  );
}