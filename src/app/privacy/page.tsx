export const metadata = { title: 'Privacy Policy' };
export default function Privacy() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 prose prose-sm">
        <h1>Privacy Policy</h1>
        <p className="text-xs text-slateMuted">Last updated: {new Date().toLocaleDateString()} — Review for applicable laws and actual services used.</p>
        <h3>Information we collect</h3>
        <p>Contact forms, project inquiries, appointment requests: name, email, phone (optional), business, message, service interest, time zone, meeting preferences, IP for security and rate limiting.</p>
        <h3>How we use it</h3>
        <p>To respond to inquiries, schedule appointments, prepare proposals, improve our website, and send transactional emails (confirmations). We do not sell your data.</p>
        <h3>Appointment and inquiry processing</h3>
        <p>Requests are stored securely in our database (PostgreSQL) with access controls. Confirmation emails are sent via configured provider (Resend or equivalent). If no calendar provider is configured, appointments are handled as booking requests, not auto-confirmed.</p>
        <h3>Cookies and analytics</h3>
        <p>We use only essential cookies unless you consent to analytics. Analytics integration requires your consent and configuration.</p>
        <h3>Data retention</h3>
        <p>We retain inquiries and appointments as needed for business records and legal obligations, then delete or anonymize.</p>
        <h3>Security measures</h3>
        <p>HTTPS, server-side validation, rate limiting, spam protection, secure secrets via env vars, access controls. No API keys in frontend.</p>
        <h3>Your rights</h3>
        <p>Contact us at hello@aspiretech.gm to request access, correction or deletion where applicable law provides.</p>
      </div>
    </div>
  );
}
