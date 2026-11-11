// ──────────────────────────────────────────────────────────────
// Projects. Edit descriptions, status and technologies so they match
// what you really used. Leave github / liveDemo empty until the links
// exist. Empty links are hidden on the live site.
//
// status can be: 'In Progress', 'Completed', or 'To Be Confirmed'
// preview picks the drawing on the card: 'notes', 'health', or 'pharmacy'
// ──────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'notehub',
    name: 'NoteHub',
    category: 'Education / Web Application',
    description:
      'A student note-sharing platform concept designed to help students organize and share study materials.',
    status: 'In Progress',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    github: '',
    liveDemo: '',
    preview: 'notes',
  },
  {
    id: 'afghan-sehat',
    name: 'Afghan Sehat (Afghan Health)',
    category: 'Healthcare / Web Application',
    description:
      'A healthcare project concept intended to help people discover doctors and access health-related information.',
    status: 'In Progress',
    technologies: ['React.js', 'JavaScript', 'CSS'],
    github: '',
    liveDemo: '',
    preview: 'health',
  },
  {
    id: 'pharmacy-website',
    name: 'Pharmacy Website',
    category: 'Business / Web Design',
    description:
      'A pharmacy website concept focused on presenting pharmacy information and products in a clear, user-friendly interface.',
    status: 'To Be Confirmed',
    technologies: [], // Add only the technologies actually used in this project.
    github: '',
    liveDemo: '',
    preview: 'pharmacy',
  },
]
