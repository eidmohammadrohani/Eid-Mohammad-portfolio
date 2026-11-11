import { isHttpsUrl } from '../utils/url.js'

// ──────────────────────────────────────────────────────────────
// Social profiles. None have been confirmed yet, so all are empty.
// To show one, paste the full address, for example:
//   url: 'https://github.com/your-real-username'
// Only links that start with https:// are shown on the site.
// ──────────────────────────────────────────────────────────────

export const socialLinks = [
  { id: 'github', label: 'GitHub', url: '' },
  { id: 'linkedin', label: 'LinkedIn', url: '' },
  { id: 'facebook', label: 'Facebook', url: '' },
  { id: 'instagram', label: 'Instagram', url: '' },
  { id: 'website', label: 'Personal website', url: '' },
]

export const confirmedSocialLinks = socialLinks.filter((link) => isHttpsUrl(link.url))
