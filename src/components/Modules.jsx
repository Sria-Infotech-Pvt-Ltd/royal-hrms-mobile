import {
  Megaphone,
  Briefcase,
  Building2,
  Wallet,
  ClipboardCheck,
  UserRound,
  Settings,
} from 'lucide-react'
import Reveal from './Reveal'

const MODULES = [
  {
    icon: Megaphone,
    name: 'Announcements',
    text: 'Company-wide updates and notices, visible right from the home dashboard.',
  },
  {
    icon: Briefcase,
    name: 'Recruitment',
    text: 'Interview scheduling, candidate review and assessments in one pipeline.',
  },
  {
    icon: Building2,
    name: 'Workforce',
    text: 'Employee directory, org chart and branch structure, always current.',
  },
  {
    icon: Wallet,
    name: 'Time & Pay',
    text: 'Attendance, leave, work-from-home and expense claims in one place.',
  },
  {
    icon: ClipboardCheck,
    name: 'HR Ops',
    text: 'Approvals, separations, a document center, and face-recognition registration.',
  },
  {
    icon: UserRound,
    name: 'My Space',
    text: 'A personal self-service hub for profile, payslips and requests.',
  },
  {
    icon: Settings,
    name: 'System',
    text: 'Reports, audit logs and configuration, available to admins only.',
  },
]

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center text-base font-semibold uppercase tracking-[0.14em] text-cyan">
            Under the Hood
          </p>
          <h2 className="mx-auto mb-4 max-w-2xl text-center font-head text-3xl font-bold text-text-hi sm:text-4xl">
            Every part of the HR lifecycle, one system.
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-lg text-text-mid">
            Access control down to the feature.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <Reveal key={m.name} delay={i % 2 === 1}>
              <div className="h-full rounded-[18px] border border-panel-border bg-panel p-6 transition-all hover:-translate-y-1.5 hover:border-violet/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet/12">
                  <m.icon className="h-5 w-5 text-violet" />
                </div>
                <h3 className="mb-2 font-head text-base font-semibold text-text-hi">{m.name}</h3>
                <p className="text-sm leading-relaxed text-text-mid">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
