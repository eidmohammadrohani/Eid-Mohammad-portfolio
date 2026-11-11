// ──────────────────────────────────────────────────────────────
// Skills. The levels below are cautious starting points, NOT verified facts.
// Change each one to your honest level before publishing.
//
// level can be: 'Beginner', 'Learning', 'Intermediate', or 'Advanced'
// show: false hides a skill until you are ready to list it.
// ──────────────────────────────────────────────────────────────

export const levels = ['Beginner', 'Learning', 'Intermediate', 'Advanced']

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 'Intermediate' },
      { name: 'CSS3', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Learning' },
      { name: 'React.js', level: 'Learning' },
      { name: 'Responsive Web Design', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools',
    skills: [{ name: 'Git and GitHub', level: 'Learning' }],
  },
  {
    title: 'Backend and databases',
    skills: [
      { name: 'SQL fundamentals', level: 'Beginner' },
      { name: 'MongoDB fundamentals', level: 'Beginner' },
      // Hidden until you confirm your Node.js level.
      { name: 'Node.js', level: 'Beginner', show: false },
    ],
  },
]
