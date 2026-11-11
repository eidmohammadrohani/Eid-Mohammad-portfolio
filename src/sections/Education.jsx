import { GraduationCap, BookOpen } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { profile } from '../data/profile.js'

export default function Education() {
  return (
    <section id="education" className="section section-alt" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" title="Education" />

        <div className="edu-grid">
          <article className="panel">
            <GraduationCap size={26} aria-hidden="true" className="panel-icon" />
            <h3>{profile.university}</h3>
            <dl className="facts">
              <div>
                <dt>Faculty</dt>
                <dd>{profile.faculty}</dd>
              </div>
              <div>
                <dt>Department</dt>
                <dd>{profile.department}</dd>
              </div>
              <div>
                <dt>Expected graduation</dt>
                <dd>{profile.graduationYear}</dd>
              </div>
            </dl>
          </article>

          <article className="panel">
            <BookOpen size={26} aria-hidden="true" className="panel-icon" />
            <h3>{profile.course} course</h3>
            <dl className="facts">
              <div>
                <dt>Course center</dt>
                <dd>{profile.courseCenter}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Full-stack web development with MongoDB, Express.js, React.js, and Node.js</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Currently learning</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}
