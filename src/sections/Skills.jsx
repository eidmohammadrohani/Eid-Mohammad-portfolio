import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title="Skills"
          intro="An honest view of where I am today. Levels change as I learn and build more."
        />

        <div className="skill-groups">
          {skillGroups.map((group) => {
            const visible = group.skills.filter((skill) => skill.show !== false)
            if (visible.length === 0) return null
            return (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul className="skill-list">
                  {visible.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="muted small skills-note">
          Levels: Beginner (just started), Learning (practising regularly), Intermediate (comfortable
          building with it), Advanced (confident and experienced).
        </p>
      </div>
    </section>
  )
}
