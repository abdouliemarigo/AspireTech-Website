import { FAQItem } from '@/components/FAQ';
export const metadata = { title: 'FAQ' };
const faqs = [
  { q: 'What services does AspireTech offer?', a: 'Website design and development, web applications, mobile apps (Android/iOS cross-platform), authorized cybersecurity reviews and hardening, UI/UX design, IT consulting and digital transformation, and maintenance/support.' },
  { q: 'How do I start a project?', a: 'Go to Start a Project, fill the 5-step brief, or book an appointment. We review and send a clear proposal with scope and milestones.' },
  { q: 'How much does a website cost?', a: 'Cost depends on scope, design complexity, content, e-commerce, integrations and maintenance. See our budget ranges in the inquiry form. We provide a fixed proposal after discovery.' },
  { q: 'How long does development take?', a: 'Landing pages: 1-3 weeks, business websites: 3-6 weeks, e-commerce or web apps: 6-12+ weeks depending on features and content readiness.' },
  { q: 'Can you redesign an existing website?', a: 'Yes — we audit performance, SEO, security and UX, then propose a redesign plan with content migration.' },
  { q: 'Do you offer website maintenance?', a: 'Yes — updates, bug fixes, performance, backups, security updates and ongoing support as a separate service.' },
  { q: 'Can I book a consultation before committing?', a: 'Absolutely — use Book an Appointment. We discuss goals, budget and timeline with no obligation.' },
  { q: 'Will I own my website and source code?', a: 'Yes, per your signed project agreement. You own the delivered website and source code. Third-party licenses remain with their owners.' },
  { q: 'How do payments and milestones work?', a: 'Typically proposal → deposit → milestones tied to deliverables → final payment before launch. Terms are in your agreement and Terms of Service.' },
  { q: 'Do you work with international clients?', a: 'Yes — based in The Gambia, we work with clients worldwide via online meetings, with optional in-person when available.' },
];

export default function FAQPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <h1 className="text-[36px] font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-3 text-sm text-slateMuted">Honest answers. Cost and timing depend on scope and agreed requirements.</p>
        <div className="mt-10">{faqs.map(f=><FAQItem key={f.q} q={f.q} a={f.a}/>)}</div>
      </div>
    </div>
  );
}
