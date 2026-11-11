import SectionHeading from '../components/SectionHeading.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" title="About me" />

        <div className="about-grid">
          <div className="prose">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="motto">{profile.motto}</p>
          </div>

          <aside className="about-side">
            {profile.photo ? (
              <img className="avatar" src={profile.photo} alt={profile.photoAlt} width="160" height="160" />
            ) : (
              <div className="avatar avatar-monogram" aria-hidden="true">EK</div>
            )}
            <dl className="facts">
              <div>
                <dt>Based in</dt>
                <dd>{profile.city}, {profile.country}</dd>
              </div>
              <div>
                <dt>Studying</dt>
                <dd>{profile.department}, {profile.university}</dd>
              </div>
              <div>
                <dt>Course</dt>
                <dd>{profile.course} at {profile.courseCenter}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{profile.focus}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="about-extra">
          <div>
            <h3>Career goal</h3>
            <p>{profile.careerGoal}</p>
          </div>
          <div>
            <h3>What I’m learning</h3>
            <ul className="tags">
              {profile.learningInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>My journey so far</h3>
            <p>{profile.journey}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
