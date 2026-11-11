// Links in the top navigation. "id" must match the id of a section on the page.
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// The footer also links to the database learning section.
export const footerLinks = [
  ...navLinks.slice(0, 5),
  { id: 'learning', label: 'Learning' },
  navLinks[5],
]
