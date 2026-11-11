import { Github, Linkedin, Facebook, Instagram, Globe } from 'lucide-react'

const icons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  website: Globe,
}

export default function SocialIcon({ id, size = 18 }) {
  const Icon = icons[id] || Globe
  return <Icon size={size} aria-hidden="true" />
}
