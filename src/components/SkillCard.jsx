import { levels } from '../data/skills.js'

// One skill: its name, its level in words, and a 4-step meter.
// The meter is decoration only, because the level is also written out.
export default function SkillCard({ name, level }) {
  const filled = levels.indexOf(level) + 1

  return (
    <li className="skill">
      <div className="skill-top">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div className="meter" aria-hidden="true">
        {levels.map((step, index) => (
          <span key={step} className={index < filled ? 'on' : ''} />
        ))}
      </div>
    </li>
  )
}
