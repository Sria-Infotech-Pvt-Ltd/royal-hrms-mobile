import { Link } from 'react-router-dom'
import { FileText, ShieldCheck, Trash2 } from 'lucide-react'
import Reveal from './Reveal'

const POLICIES = [
  {
    icon: ShieldCheck,
    title: 'Privacy Policy',
    text: 'What data Royal HRMS collects, why, and how it is used within your organization.',
    to: '/privacy_policy',
  },
  {
    icon: Trash2,
    title: 'Account & Data Deletion',
    text: 'How to request deletion of your account and the personal data tied to it.',
    to: '/data_deletion',
  },
  {
    icon: FileText,
    title: 'Terms & Conditions',
    text: 'The rules that govern acceptable use of the Royal HRMS application.',
    to: '/terms_conditions',
  },
]

export default function Policies() {
  return (
    <section id="policies" className="relative z-10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center text-base font-semibold uppercase tracking-[0.14em] text-cyan">
            Our Policies
          </p>
          <h2 className="mx-auto mb-14 max-w-2xl text-center font-head text-3xl font-bold text-text-hi sm:text-4xl">
            Clear terms, plainly stated.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {POLICIES.map((p, i) => (
            <Reveal key={p.title} delay={i % 2 === 1}>
              <Link
                to={p.to}
                className="group flex h-full flex-col rounded-[18px] border border-panel-border bg-panel p-7 transition-all hover:-translate-y-1.5 hover:border-cyan/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10">
                  <p.icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="mb-3 font-head text-lg font-semibold text-text-hi group-hover:text-cyan">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-mid">{p.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
