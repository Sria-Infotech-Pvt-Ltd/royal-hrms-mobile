import LegalLayout from '../components/LegalLayout'

export default function TermsConditions() {
  return (
    <LegalLayout title="Terms and Conditions" updated="23 September 2026">
      <p>
        These terms govern your use of the Royal HRMS application. By signing in, you agree to
        use the app only as intended for internal HR purposes at your organization.
      </p>

      <section>
        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of your employer's policies.</li>
          <li>Attempt to access another user's account or data without authorization.</li>
          <li>Reverse-engineer, decompile, or tamper with the App.</li>
        </ul>
      </section>

      <section>
        <h2>Availability</h2>
        <p>
          The App is provided on an "as is" and "as available" basis. We work to keep it reliable
          but do not guarantee uninterrupted access.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the App after a change
          means you accept the revised terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a className="text-cyan" href="mailto:dev@royalstaffing.in">
            dev@royalstaffing.in
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  )
}
