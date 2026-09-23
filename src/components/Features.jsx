import { ScanFace, Mic, ShieldCheck, UserCog, WifiOff, GitBranch } from 'lucide-react'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: ScanFace,
    title: 'Face ID Attendance',
    text: 'Facial-recognition check-in and check-out, with admin-side registration and approval before any employee is enrolled.',
  },
  {
    icon: Mic,
    title: 'Voice Assistant',
    text: 'A floating, always-available voice-command mic for hands-free access to the actions people use most, without ever leaving the current screen.',
  },
  {
    icon: ShieldCheck,
    title: 'Fine-Grained Roles & Permissions',
    text: 'Every feature is gated by permission, not just by broad role — so each company controls exactly who sees and does what.',
  },
  {
    icon: UserCog,
    title: 'Self-Service Everything',
    text: 'Leave, work-from-home, expenses, payslips, referrals, even separation requests — handled directly by the employee, without routing through another person first.',
  },
  {
    icon: WifiOff,
    title: 'Offline-Aware',
    text: 'Royal HRMS clearly signals when connectivity drops, instead of failing silently and leaving people guessing whether an action went through.',
  },
  {
    icon: GitBranch,
    title: 'End-to-End Recruitment Pipeline',
    text: 'Interview scheduling, candidate review, assessments and onboarding, handled in one system from first application to first day.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center text-base font-semibold uppercase tracking-[0.14em] text-cyan">
            Features
          </p>
          <h2 className="mx-auto mb-14 max-w-2xl text-center font-head text-3xl font-bold text-text-hi sm:text-4xl">
            Standout capabilities, built in.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i % 2 === 1}>
              <div className="h-full rounded-[18px] border border-panel-border bg-panel p-7 transition-all hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/15 to-violet/15">
                  <f.icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="mb-3 font-head text-lg font-semibold text-text-hi">{f.title}</h3>
                <p className="text-sm leading-relaxed text-text-mid">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
