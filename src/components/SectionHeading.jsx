// Heading used at the top of every section.
// "id" is used by the section's aria-labelledby so screen readers announce it.
export default function SectionHeading({ id, title, intro }) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  )
}
