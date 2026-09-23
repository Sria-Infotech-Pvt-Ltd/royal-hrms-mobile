import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 overflow-hidden px-6 pb-24 pt-36 min-h-[90vh] lg:grid-cols-[1.05fr_0.95fr] lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 blur-[120px] sm:h-[520px] sm:w-[520px]"
      />

      <Reveal className="min-w-0">
        <p className="mb-3 text-base font-semibold uppercase tracking-[0.14em] text-cyan">
          Enterprise HR Platform
        </p>
        <h1 className="mb-5 font-head text-4xl font-bold leading-[1.12] text-text-hi sm:text-5xl lg:text-6xl">
          One adaptive system for your entire workforce.
        </h1>
        <p className="mb-9 max-w-xl text-lg text-text-mid">
          Royal HRMS brings recruiting and onboarding, attendance and leave, payslips and
          expenses, and every approval in between into a single role-based, multi-tenant
          platform — so employees, managers, HR and admins each get exactly the tools their
          role needs, nothing more.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3.5 text-sm font-semibold text-bg-0 transition-transform hover:scale-[1.03]"
          >
            See How It Works
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-panel-border px-7 py-3.5 text-sm font-semibold text-text-hi transition-colors hover:border-cyan hover:text-cyan"
          >
            Request a Demo
          </a>
        </div>
      </Reveal>

      <Reveal delay className="flex min-w-0 flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="sm:translate-y-6">
          <PhoneFrame src="/2.png" alt="Royal HRMS sign-in screen" small />
        </div>
        <div className="sm:-translate-y-6">
          <PhoneFrame src="/3.png" alt="Royal HRMS dashboard screen" small />
        </div>
      </Reveal>
    </section>
  )
}
