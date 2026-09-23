import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'Screens', href: '#screens' },
  { label: 'Policies', href: '#policies' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'bg-bg-0/85 backdrop-blur border-b border-panel-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Royal HRMS logo" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-head text-lg font-bold tracking-tight text-text-hi">
            ROYAL <span className="text-text-lo font-medium">HRMS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-text-mid transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-2.5 text-sm font-semibold text-bg-0 transition-transform hover:scale-[1.03]"
          >
            Request a Demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-panel-border text-text-hi lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-4.2rem)] overflow-y-auto border-t border-panel-border bg-bg-0 lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-2 py-3 text-base text-text-mid hover:bg-panel hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-3 text-sm font-semibold text-bg-0"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
