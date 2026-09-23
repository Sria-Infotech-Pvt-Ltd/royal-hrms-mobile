import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'Screens', href: '#screens' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
  { label: 'Account & Data Deletion', to: '/data-deletion' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-panel-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Royal HRMS logo" className="h-9 w-9 rounded-lg object-cover" />
            <span className="font-head text-lg font-bold text-text-hi">
              ROYAL <span className="text-text-lo font-medium">HRMS</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm text-text-mid">
            One adaptive HR platform for every role in your company.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-text-lo">
            Quick Links
          </span>
          {QUICK_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-text-mid hover:text-cyan">
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-text-lo">
            Legal
          </span>
          {LEGAL_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm text-text-mid hover:text-cyan">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-text-lo">
            Contact
          </span>
          <a href="mailto:dev@royalstaffing.in" className="text-sm text-text-mid hover:text-cyan">
            dev@royalstaffing.in
          </a>
          <a href="tel:+919666422240" className="text-sm text-text-mid hover:text-cyan">
            +91 96664 22240
          </a>
        </div>
      </div>

      <div className="border-t border-panel-border px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-[0.82rem] text-text-lo">
          <p>© {new Date().getFullYear()} Royal HRMS. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-cyan">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
