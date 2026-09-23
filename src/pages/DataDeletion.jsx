import LegalLayout from '../components/LegalLayout'

export default function DataDeletion() {
  return (
    <LegalLayout title="Account & Data Deletion Policy" updated="23 September 2026">
      <section>
        <h2>Who Can Request Deletion</h2>
        <p>Any individual with an account in Royal HRMS, provisioned by their employer.</p>
      </section>

      <section>
        <h2>How to Request Deletion</h2>
        <p>
          Send a deletion request to{' '}
          <a className="text-cyan" href="mailto:dev@royalstaffing.in">
            dev@royalstaffing.in
          </a>{' '}
          from your registered work email, or ask your HR administrator to submit the request on
          your behalf. We will verify the request and act on it within 30 days.
        </p>
      </section>

      <section>
        <h2>What Gets Deleted</h2>
        <ul>
          <li>Face biometric embeddings</li>
          <li>Uploaded documents</li>
          <li>Location history tied to attendance events</li>
        </ul>
      </section>

      <section>
        <h2>What May Be Retained</h2>
        <ul>
          <li>Records needed to resolve disputes or enforce our agreements</li>
          <li>Aggregated or anonymized data that no longer identifies you</li>
          <li>Information your employer is legally required to retain (e.g. payroll records)</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
