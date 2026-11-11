import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Mail } from 'lucide-react'
import { navLinks } from '../data/navigation.js'

// Every section the page watches to highlight the current link.
const watchedIds = ['home', 'about', 'skills', 'projects', 'education', 'learning', 'contact']

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  // Highlight the link of the section that is in the middle of the screen.
  useEffect(() => {
    const sections = watchedIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark" aria-hidden="true">EK</span>
          <span className="logo-name">Eid Mohammad Kharoti</span>
        </a>

        <nav aria-label="Main">
          <ul id="site-menu" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href="#contact" onClick={() => setMenuOpen(false)}>
            <Mail size={16} aria-hidden="true" />
            Contact
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
