import LegalLayout from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="23 September 2026">
      <p>
        This policy explains what information Royal HRMS collects when your employer provisions
        you an account, why it is collected, and how it is used. Royal HRMS is provisioned to you
        by your employer, and your employer controls the underlying employment data.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Identity details</strong> — name, employee ID, role, department and contact
            information provided by your employer. This is used only for identity verification
            within the app.
          </li>
          <li>
            <strong>Attendance data</strong> — when you clock in or out, the app captures your
            device location at that moment, to confirm you are checking in from an approved
            location.
          </li>
          <li>
            <strong>Face biometric data</strong> — if your employer enables Face ID attendance,
            a facial embedding is stored to verify check-ins after you opt in and an admin
            approves enrollment.
          </li>
          <li>
            <strong>Device identifiers</strong> — used to deliver push notifications.
          </li>
          <li>
            <strong>Usage diagnostics</strong> — to improve app performance and fix issues.
          </li>
        </ul>
      </section>

      <section>
        <h2>How Information Is Shared</h2>
        <ul>
          <li>With your employer, since Royal HRMS is an internal HR tool they administer.</li>
          <li>With service providers who help us host and operate the platform.</li>
          <li>When required for legal reasons.</li>
        </ul>
        <p className="mt-3">We do not sell your personal data to third parties.</p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You can review and update most of your personal information from the My Profile screen.
          For anything you cannot change yourself, contact your HR administrator or reach us
          directly — see our <a className="text-cyan" href="mailto:dev@royalstaffing.in">contact email</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
