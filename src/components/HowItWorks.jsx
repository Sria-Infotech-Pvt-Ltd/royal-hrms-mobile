import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'

const STEPS = [
  {
    n: '01',
    title: 'Getting In',
    text: 'A branded splash screen leads into sign-in, with a self-service "forgot password" flow for anyone locked out. Behind the scenes, Royal HRMS checks each account\'s onboarding status before deciding where to send them next.',
    media: (
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PhoneFrame src="/1.png" alt="Royal HRMS splash screen" small />
        <PhoneFrame src="/2.png" alt="Royal HRMS sign-in screen" small />
      </div>
    ),
  },
  {
    n: '02',
    title: 'The Dashboard',
    text: 'A home base that opens straight into every module a person is allowed to see — Announcements, Recruitment, Workforce, Time & Pay, HR Ops, personal self-service, and, for admins, System — each organized under its own section of the navigation.',
    media: (
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PhoneFrame src="/3.png" alt="Royal HRMS dashboard" small />
        <PhoneFrame src="/4.png" alt="Royal HRMS profile screen" small />
      </div>
    ),
  },
  {
    n: '03',
    title: 'Daily Use',
    text: 'Day to day, people check in for attendance, request leave or work-from-home, check payslips, and clear their approvals. Notifications keep everyone current, and a floating voice assistant is always a tap away for common actions.',
    media: <PhoneFrame src="/5.png" alt="Royal HRMS attendance screen" />,
  },
  {
    n: '04',
    title: 'Administration',
    text: 'Admins configure company details, departments and roles, permissions, employee ID formats, email templates and SMTP, leave policy and holiday calendars, attendance rules, referral rules, assessment configuration, approval workflows, and notifications.',
    media: <PhoneFrame src="/6.png" alt="Royal HRMS settings and administration screen" />,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center text-base font-semibold uppercase tracking-[0.14em] text-cyan">
            How It Works
          </p>
          <h2 className="mx-auto mb-16 max-w-2xl text-center font-head text-3xl font-bold text-text-hi sm:text-4xl">
            A walkthrough of the everyday journey.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-20">
          {STEPS.map((step, i) => (
            <Reveal key={step.n}>
              <div
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex-1">
                  <span className="mb-4 inline-block font-head text-sm font-bold text-cyan">
                    {step.n}
                  </span>
                  <h3 className="mb-4 font-head text-2xl font-bold text-text-hi sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="max-w-md text-text-mid">{step.text}</p>
                </div>
                <div className="lg:flex-1">{step.media}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
