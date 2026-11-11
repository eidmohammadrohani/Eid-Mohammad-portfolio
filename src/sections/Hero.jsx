import { MapPin, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile.js'

// One numbered code line. "i" sets the order of the reveal animation.
function Line({ i, children }) {
  return (
    <div className="code-line" style={{ '--i': i }}>
      <span className="ln">{i + 1}</span>
      <span>{children}</span>
    </div>
  )
}

// The editor-style card that introduces Eid as code. It repeats facts from the
// page, so it is hidden from screen readers (aria-hidden).
function CodeWindow() {
  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-bar">
        <span /> <span /> <span />
        <b>eid.js</b>
      </div>
      <div className="code-body">
        <Line i={0}><span className="t-c">// who I am, written as code</span></Line>
        <Line i={1}><span className="t-k">const</span> <span className="t-v">eid</span> = {'{'}</Line>
        <Line i={2}>&nbsp;&nbsp;<span className="t-p">name</span>: <span className="t-s">"{profile.name}"</span>,</Line>
        <Line i={3}>&nbsp;&nbsp;<span className="t-p">role</span>: <span className="t-s">"{profile.title}"</span>,</Line>
        <Line i={4}>&nbsp;&nbsp;<span className="t-p">location</span>: <span className="t-s">"{profile.city}, {profile.country}"</span>,</Line>
        <Line i={5}>&nbsp;&nbsp;<span className="t-p">studying</span>: <span className="t-s">"{profile.department}"</span>,</Line>
        <Line i={6}>&nbsp;&nbsp;<span className="t-p">learning</span>: [<span className="t-s">"{profile.course}"</span>, <span className="t-s">"React.js"</span>],</Line>
        <Line i={7}>&nbsp;&nbsp;<span className="t-p">building</span>: [<span className="t-s">"NoteHub"</span>, <span className="t-s">"Afghan Sehat"</span>],</Line>
        <Line i={8}>&nbsp;&nbsp;<span className="t-p">goal</span>: <span className="t-s">"Full-Stack Developer"</span>,</Line>
        <Line i={9}>{'};'}</Line>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-pashto">
            <span lang="ps" dir="rtl">{profile.pashtoName}</span>
          </p>
          <p className="hero-intro">{profile.heroIntro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore my work</a>
            <a className="btn btn-ghost" href="#contact">Contact me</a>
          </div>

          <ul className="hero-facts">
            <li>
              <MapPin size={18} aria-hidden="true" />
              {profile.city}, {profile.country}
            </li>
            <li>
              <GraduationCap size={18} aria-hidden="true" />
              {profile.university}, expected graduation {profile.graduationYear}
            </li>
          </ul>
        </div>

        <CodeWindow />
      </div>
    </section>
  )
}
