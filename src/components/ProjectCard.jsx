import { Github, ExternalLink } from 'lucide-react'
import { isHttpsUrl } from '../utils/url.js'
import ProjectPreview from './ProjectPreview.jsx'

const statusClass = {
  'In Progress': 'status-progress',
  Completed: 'status-done',
  'To Be Confirmed': 'status-tbc',
}

// A link that is empty or not https is hidden on the live site.
// While you are developing (npm run dev) a dashed note reminds you to fill it in.
function ProjectLink({ href, label, icon, hint }) {
  if (isHttpsUrl(href)) {
    return (
      <a className="project-link" href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        {label}
      </a>
    )
  }
  if (import.meta.env.DEV) {
    return <span className="project-link link-missing">{hint}</span>
  }
  return null
}

export default function ProjectCard({ project }) {
  const { name, category, description, status, technologies, github, liveDemo, preview } = project

  return (
    <article className="project-card">
      <ProjectPreview type={preview} label={`Illustration of the ${name} interface`} />

      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{category}</span>
          <span className={`status ${statusClass[status] || 'status-tbc'}`}>{status}</span>
        </div>

        <h3>{name}</h3>
        <p className="project-desc">{description}</p>

        {technologies.length > 0 ? (
          <ul className="tags" aria-label={`Technologies used in ${name}`}>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : (
          <p className="muted small">Technologies will be listed once confirmed.</p>
        )}

        <div className="project-links">
          <ProjectLink
            href={github}
            label="GitHub"
            icon={<Github size={16} aria-hidden="true" />}
            hint="GitHub link not set"
          />
          <ProjectLink
            href={liveDemo}
            label="Live demo"
            icon={<ExternalLink size={16} aria-hidden="true" />}
            hint="Live demo link not set"
          />
        </div>
      </div>
    </article>
  )
}
