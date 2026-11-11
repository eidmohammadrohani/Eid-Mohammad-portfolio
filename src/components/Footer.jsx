import { Mail } from 'lucide-react'
import { profile } from '../data/profile.js'
import { footerLinks } from '../data/navigation.js'
import SocialLinkList from './SocialLinkList.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">
            {profile.title} in {profile.city}, {profile.country}
          </p>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinkList className="footer-social" />
      </div>
      <div className="container footer-bottom">
        {/* The year updates by itself. */}
        <p className="muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
