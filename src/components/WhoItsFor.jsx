import { User, Users, UserSearch, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const ROLES = [
  {
    icon: User,
    tone: 'cyan',
    title: 'Employees',
    text: 'Clock in and out, apply for leave or work-from-home, submit expense claims, check payslips, track referrals and requests, and manage a personal profile — all from one self-service hub.',
  },
  {
    icon: Users,
    tone: 'violet',
    title: 'Managers / Approvers',
    text: "Everything an employee can do, plus a clear queue for approving — or sending back — their team's leave, expense and work-from-home requests.",
  },
  {
    icon: UserSearch,
    tone: 'cyan',
    title: 'HR / Recruiters',
    text: 'Run the candidate pipeline end to end — interview scheduling, candidate review and assessments — then carry approved hires straight into guided onboarding.',
  },
  {
    icon: ShieldCheck,
    tone: 'violet',
    title: 'HR Admins / System Admins',
    text: 'Full control over employee records, org chart and branches, company settings, roles and permissions, payroll rules, audit logs and every other system configuration.',
  },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="relative z-10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center text-base font-semibold uppercase tracking-[0.14em] text-cyan">
            Who It's For
          </p>
          <h2 className="mx-auto mb-4 max-w-2xl text-center font-head text-3xl font-bold text-text-hi sm:text-4xl">
            Built around the role, not the org chart.
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-lg text-text-mid">
            Royal HRMS adapts its navigation to whoever is signed in — an employee, a manager,
            a recruiter, or an administrator each land on a home screen built for their job,
            showing only what's relevant to them.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i % 2 === 1}>
              <div className="group h-full rounded-[18px] border border-panel-border bg-panel p-7 transition-all hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    role.tone === 'cyan' ? 'bg-cyan/10' : 'bg-violet/12'
                  }`}
                >
                  <role.icon
                    className={`h-6 w-6 ${role.tone === 'cyan' ? 'text-cyan' : 'text-violet'}`}
                  />
                </div>
                <h3 className="mb-3 font-head text-lg font-semibold text-text-hi">{role.title}</h3>
                <p className="text-sm leading-relaxed text-text-mid">{role.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
