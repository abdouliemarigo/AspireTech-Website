'use client';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending'); setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    data.consent = form.consent.checked;
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setStatus('success'); form.reset();
    } catch (err:any) { setStatus('error'); setError(err.message); }
  }
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <p className="text-xs font-bold tracking-widest text-electric">CONTACT</p>
          <h1 className="mt-4 text-[32px] lg:text-[44px] font-bold tracking-tight leading-[0.95]">Let&apos;s talk about your idea.</h1>
          <p className="mt-4 text-sm leading-6 text-slateMuted">We reply within one business day. Your information is used only to respond to your inquiry per our Privacy Policy.</p>
          <div className="mt-8 space-y-3 text-sm">
            <div><span className="font-semibold">Email:</span> {siteConfig.email}</div>
            <div><span className="font-semibold">Phone:</span> {siteConfig.phone}</div>
            <div><span className="font-semibold">Location:</span> {siteConfig.location} — serving worldwide</div>
            <div className="text-xs text-slateMuted pt-2">Business hours when supplied. Social links in footer (centralized config).</div>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="/book" className="h-11 px-6 inline-flex items-center rounded-full bg-navy text-white text-sm font-semibold">Book an Appointment</a>
            <a href="/start-project" className="h-11 px-6 inline-flex items-center rounded-full border text-sm font-semibold">Start a Project</a>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-[24px] border bg-white p-6 lg:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold">Full name *</label><input name="name" required className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
            <div><label className="text-xs font-semibold">Email *</label><input name="email" type="email" required className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold">Subject</label><input name="subject" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
            <div><label className="text-xs font-semibold">Service of interest</label><select name="service" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option value="">Select</option>{siteConfig.services.map(s=><option key={s}>{s}</option>)}</select></div>
          </div>
          <div><label className="text-xs font-semibold">Message *</label><textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border p-4 text-sm"/></div>
          <label className="flex items-start gap-2 text-xs text-slateMuted"><input type="checkbox" name="consent" required className="mt-1"/> I consent to processing per Privacy Policy *</label>
          <button disabled={status==='sending'} className="h-11 w-full rounded-full bg-electric text-white text-sm font-semibold disabled:opacity-50">{status==='sending'?'Sending...':'Send Message'}</button>
          {status==='success' && <p className="text-sm text-emerald-600 font-medium">Message sent — we&apos;ll be in touch soon.</p>}
          {status==='error' && <p className="text-sm text-red-600">{error}</p>}
          <p className="text-[11px] text-slateMuted">Spam protection: rate limiting + honeypot + server validation. No secrets exposed in frontend.</p>
        </form>
      </div>
    </div>
  );
}
