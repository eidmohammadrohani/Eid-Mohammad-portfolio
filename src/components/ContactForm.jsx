import { useState } from 'react'
import { Send, AlertCircle, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

const emptyForm = { name: '', email: '', subject: '', message: '' }

// Returns an object with one message per field that is not valid.
function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Enter a valid email address, like name@example.com.'
  if (values.subject.trim().length < 3) errors.subject = 'Enter a subject (at least 3 characters).'
  if (values.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.'
  return errors
}

// Without a backend, the form can only prepare an email in the visitor's own email app.
// The visitor still has to press Send there, so we never claim the message was delivered.
function buildMailto(values) {
  const body = `${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`
  return (
    `mailto:${profile.email}` +
    `?subject=${encodeURIComponent(values.subject.trim())}` +
    `&body=${encodeURIComponent(body)}`
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [mailtoHref, setMailtoHref] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setMailtoHref('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      setMailtoHref('')
      event.currentTarget.elements[firstInvalid].focus()
      return
    }

    const href = buildMailto(values)
    setMailtoHref(href)
    window.location.href = href
  }

  const hasErrors = Object.values(errors).some(Boolean)

  function field(name, label, props = {}) {
    const error = errors[name]
    const Tag = props.as || 'input'
    return (
      <div className="field">
        <label htmlFor={`contact-${name}`}>{label}</label>
        <Tag
          id={`contact-${name}`}
          name={name}
          value={values[name]}
          onChange={handleChange}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `contact-${name}-error` : undefined}
          required
          {...props.attrs}
        />
        {error && (
          <p className="field-error" id={`contact-${name}-error`}>
            {error}
          </p>
        )}
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {hasErrors && (
        <p className="form-banner form-banner-error" role="alert">
          <AlertCircle size={18} aria-hidden="true" />
          Some fields need attention. Check the messages below.
        </p>
      )}

      <div className="field-row">
        {field('name', 'Your name', { attrs: { type: 'text', autoComplete: 'name', maxLength: 80 } })}
        {field('email', 'Your email', { attrs: { type: 'email', autoComplete: 'email', maxLength: 120 } })}
      </div>
      {field('subject', 'Subject', { attrs: { type: 'text', maxLength: 120 } })}
      {field('message', 'Message', { as: 'textarea', attrs: { rows: 6, maxLength: 1000 } })}

      <button type="submit" className="btn btn-primary">
        <Send size={16} aria-hidden="true" />
        Open email draft
      </button>
      <p className="muted small">
        This opens your email app with the message filled in. Nothing is sent until you press Send there.
      </p>

      {mailtoHref && (
        <p className="form-banner form-banner-info" role="status">
          <Mail size={18} aria-hidden="true" />
          <span>
            Your email draft is ready. If your email app did not open,{' '}
            <a href={mailtoHref}>open the draft</a> or write directly to {profile.email}.
          </span>
        </p>
      )}
    </form>
  )
}
