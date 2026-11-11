import { confirmedSocialLinks } from '../data/socialLinks.js'
import SocialIcon from './SocialIcon.jsx'

// Shows only the profiles that were confirmed in src/data/socialLinks.js.
// If there are none, nothing is rendered.
export default function SocialLinkList({ className = '' }) {
  if (confirmedSocialLinks.length === 0) return null

  return (
    <ul className={`social-list ${className}`.trim()}>
      {confirmedSocialLinks.map((link) => (
        <li key={link.id}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <SocialIcon id={link.id} />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
