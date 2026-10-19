'use client';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function BookPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [err, setErr] = useState('');
  const [tz, setTz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending'); setErr('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    data.consent = form.consent.checked;
    data.timeZone = tz;
    try {
      const res = await fetch('/api/appointment', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setStatus('success'); form.reset();
    } catch (e:any){ setStatus('error'); setErr(e.message); }
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <p className="text-xs font-bold tracking-widest text-electric">BOOK AN APPOINTMENT</p>
          <h1 className="mt-4 text-[32px] lg:text-[44px] font-bold tracking-tight leading-[0.95]">Discuss your website, app or digital solution.</h1>
          <p className="mt-4 text-sm leading-6 text-slateMuted">Choose a date and time. Times are shown in your selected time zone. We prevent double-booking server-side and store bookings in database. If no calendar provider is configured, this is a booking request workflow.</p>
          <ul className="mt-6 text-sm text-slateMuted list-disc pl-5 space-y-1">
            <li>Validation for required fields and invalid dates</li>
            <li>Time zone aware display</li>
            <li>Server-side double-booking prevention</li>
            <li>Confirmation email to you + notification to team</li>
          </ul>
        </div>
        <form onSubmit={submit} className="rounded-[24px] border bg-white p-6 lg:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold">Full name *</label><input name="fullName" required className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
            <div><label className="text-xs font-semibold">Business (optional)</label><input name="businessName" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold">Email *</label><input name="email" type="email" required className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
            <div><label className="text-xs font-semibold">Phone (optional)</label><input name="phone" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold">Preferred contact method</label><select name="contactMethod" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></div>
            <div><label className="text-xs font-semibold">Service</label><select name="service" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option value="">Select</option>{siteConfig.services.map(s=><option key={s}>{s}</option>)}</select></div>
          </div>
          <div><label className="text-xs font-semibold">Project description</label><textarea name="description" rows={3} className="mt-1 w-full rounded-xl border p-4 text-sm"/></div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div><label className="text-xs font-semibold">Preferred date *</label><input name="preferredDate" type="date" required min={new Date().toISOString().split('T')[0]} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
            <div><label className="text-xs font-semibold">Time *</label><select name="preferredTime" required className="mt-1 w-full h-11 rounded-xl border px-4 text-sm">{siteConfig.timeSlots.map(t=><option key={t}>{t}</option>)}</select></div>
            <div><label className="text-xs font-semibold">Time zone *</label><select value={tz} onChange={e=>setTz(e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option>{Intl.DateTimeFormat().resolvedOptions().timeZone}</option><option>UTC</option><option>Africa/Banjul</option><option>Europe/London</option><option>America/New_York</option></select><input type="hidden" name="timeZone" value={tz}/></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold">Meeting type *</label><select name="meetingType" required className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option value="online">Online meeting</option><option value="in-person">In-person (when available)</option></select></div>
            <div><label className="text-xs font-semibold">Additional notes</label><input name="notes" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
          </div>
          <label className="flex gap-2 text-xs text-slateMuted"><input type="checkbox" name="consent" required/> I consent to Privacy Policy *</label>
          <button disabled={status==='sending'} className="h-11 w-full rounded-full bg-electric text-white text-sm font-semibold disabled:opacity-50">{status==='sending'?'Requesting...':'Request Appointment'}</button>
          {status==='success' && <p className="text-sm text-emerald-600">Appointment request received. We&apos;ll confirm via email. No double-booking — server validated.</p>}
          {status==='error' && <p className="text-sm text-red-600">{err}</p>}
        </form>
      </div>
    </div>
  );
}
