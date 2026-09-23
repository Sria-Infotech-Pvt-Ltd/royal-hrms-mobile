import { useState } from 'react'
import Reveal from './Reveal'

const inputClass =
  'w-full rounded-xl border border-panel-border bg-white/[0.03] px-4 py-3 text-sm text-text-hi placeholder:text-text-lo focus:border-cyan focus:outline-none'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage("Thanks — this preview site does not send data. Use the email link to reach us for real.")
    setSent(true)
  }

  return (
    <section id="contact" className="relative z-10 py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="mb-3 font-head text-3xl font-bold text-text-hi sm:text-4xl">
            See Royal HRMS in action.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-text-mid">
            Tell us a little about your team and we'll set up a walkthrough tailored to your
            organization.
          </p>
        </Reveal>

        <Reveal className="grid gap-10 text-left lg:grid-cols-[1.3fr_1fr]">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="name" className="mb-2 block text-[0.82rem] text-text-mid">
                  Name
                </label>
                <input id="name" type="text" placeholder="Your name" className={inputClass} />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="mb-2 block text-[0.82rem] text-text-mid">
                  Work Email
                </label>
                <input id="email" type="email" placeholder="you@company.com" className={inputClass} />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="mb-2 block text-[0.82rem] text-text-mid">
                Company
              </label>
              <input id="company" type="text" placeholder="Company name" className={inputClass} />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-[0.82rem] text-text-mid">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="What would you like to see in the demo?"
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center self-start rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3.5 text-sm font-semibold text-bg-0 transition-transform hover:scale-[1.03]"
            >
              Request a Demo
            </button>
            {sent && <p className="mt-4 text-sm text-cyan">{message}</p>}
          </form>

          <div className="rounded-[18px] border border-panel-border bg-panel p-7">
            <h3 className="mb-3 font-head text-lg font-semibold text-text-hi">Reach out directly</h3>
            <p className="mb-6 text-sm text-text-mid">
              Reach out directly and our team will follow up.
            </p>
            <a
              href="mailto:dev@royalstaffing.in"
              className="mb-2 block text-sm text-text-mid hover:text-cyan"
            >
              dev@royalstaffing.in
            </a>
            <a href="tel:+919666422240" className="mb-2 block text-sm text-text-mid hover:text-cyan">
              +91 96664 22240
            </a>
            <p className="text-sm text-text-lo">Add your company address here.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
