import { Link } from 'react-router-dom'

const routeMap = {
  Home: '/',
  About: '/about',
  Competences: '/competences',
  Project: '/project',
};

const navItems = ['Home', 'About', 'Competences', 'Project'];

const socialLinks = [
  { name: 'GitHub', icon: '↗', url: 'https://github.com/krishna171826' },
  { name: 'LinkedIn', icon: '↗', url: 'https://www.linkedin.com/in/gopi-suresh-6b5440327/' },
  { name: 'Email', icon: '✉', url: 'mailto:gopi.suresh2609@gmail.com' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-linear-to-b from-transparent to-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:pt-8 pb-0">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-lg font-semibold text-white"
            >
              Portfolio
            </Link>
            <p className="text-sm text-white/60">
              Créer des sites web élégants avec les technologies modernes.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={routeMap[item]}
                    className="text-sm text-white/70 transition hover:text-white hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Connecter</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                  >
                    {link.name} <span className="text-xs">{link.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 w-fit"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-5 p-6 text-center">
          <div className="flex justify-center gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              Créé par Suresh Gopi. Tous les droits réservés. © 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
