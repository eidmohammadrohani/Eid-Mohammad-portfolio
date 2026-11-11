import { Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SocialLinkList from '../components/SocialLinkList.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          title="Contact"
          intro="Have a question, an idea, or an opportunity? Write to me. I’m happy to hear from you."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Email</h3>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <p className="contact-place">
              <MapPin size={18} aria-hidden="true" />
              {profile.city}, {profile.country}
            </p>
            <SocialLinkList />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
