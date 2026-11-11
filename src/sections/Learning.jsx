import SectionHeading from '../components/SectionHeading.jsx'
import CrudDemo from '../components/CrudDemo.jsx'

// Short beginner explanations. They are learning notes, not expert advice.
const topics = [
  {
    title: 'What is a database?',
    text: 'A database is an organized place where a website keeps information, so it is still there after the page is closed. Examples are user accounts, notes, or products.',
  },
  {
    title: 'SQL fundamentals',
    text: 'SQL databases store data in tables with rows and columns, like a spreadsheet. The SQL language is used to ask questions, such as “show all notes written by one student”. I’m learning the basics: tables, SELECT, INSERT, UPDATE, and DELETE.',
  },
  {
    title: 'MongoDB fundamentals',
    text: 'MongoDB stores data as flexible documents that look like JavaScript objects. It is the “M” in the MERN Stack, which is why I’m learning it next to React.',
  },
  {
    title: 'CRUD: Create, Read, Update, Delete',
    text: 'These are the four basic things almost every app does with data. The practice notes next to this list use all four.',
  },
  {
    title: 'How a website stores information',
    text: 'The browser sends a request to a server, the server reads or changes data in a database, and the result comes back to the page. This portfolio does not need a database yet, so its content lives in plain files.',
  },
]

export default function Learning() {
  return (
    <section id="learning" className="section" aria-labelledby="learning-title">
      <div className="container">
        <SectionHeading
          id="learning-title"
          title="Learning databases"
          intro="I’m still learning database concepts, so this is a beginner’s explanation of what I’m studying."
        />

        <div className="learn-grid">
          <div className="topics">
            {topics.map((topic, index) => (
              <details key={topic.title} open={index === 0}>
                <summary>{topic.title}</summary>
                <p>{topic.text}</p>
              </details>
            ))}
          </div>
          <CrudDemo />
        </div>
      </div>
    </section>
  )
}
