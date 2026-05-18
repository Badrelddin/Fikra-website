'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mlgagzer")

  if (state.succeeded) {
    return (
      <div className="py-16">
        <h2 className="text-5xl font-bold tracking-tighter text-white mb-4">
          Message received.
        </h2>
        <p className="text-white/45 text-base mb-2">
          We&apos;ll be in touch within 24 hours.
        </p>
        <p className="text-white/25 text-sm italic">
          info@fikratechnology.com if you need us sooner.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      <div className="field-group">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" name="name" required placeholder="Your full name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="field-group">
        <label htmlFor="company">Company Name</label>
        <input id="company" type="text" name="company" required placeholder="Your company" />
      </div>

      <div className="field-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required placeholder="you@company.com" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="field-group">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" name="phone" placeholder="+971 or +20..." />
      </div>

      <div className="field-group">
        <label htmlFor="industry">Industry</label>
        <select id="industry" name="industry" required defaultValue="">
          <option value="" disabled>Select your industry</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance &amp; Banking</option>
          <option value="government">Government &amp; Public Sector</option>
          <option value="real-estate">Real Estate</option>
          <option value="ecommerce">E-commerce</option>
          <option value="transportation">Transportation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="service">What are you looking to build?</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option value="custom-software">Custom Software</option>
          <option value="mobile-app">Mobile Application</option>
          <option value="web-app">Web Application</option>
          <option value="system-integration">System Integration</option>
          <option value="ui-ux">UI/UX Design</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="The problem, the idea, the timeline — anything that helps us understand what you need."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="field-group">
        <label htmlFor="budget">Approximate Budget Range</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>Select a range</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-25k">$10,000 – $25,000</option>
          <option value="25k-50k">$25,000 – $50,000</option>
          <option value="50k-100k">$50,000 – $100,000</option>
          <option value="over-100k">Over $100,000</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send It →'}
      </button>

      <p className="form-note">We read every message. Every single one.</p>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <p className="form-error">
          Something went wrong. Please email us at info@fikratechnology.com
        </p>
      )}

    </form>
  )
}
