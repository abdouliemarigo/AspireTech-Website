'use client';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import { useSearchParams } from 'next/navigation';

type FormState = {
  name: string; email: string; company: string; phone: string;
  projectType: string; title: string; description: string; goals: string; audience: string; features: string; existingUrl: string;
  budgetRange: string; launchDate: string; urgency: string; extra: string;
  consent: boolean;
};

export default function StartProject() {
  const params = useSearchParams();
  const preselected = params.get('service') || '';
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  const [ref, setRef] = useState('');
  const [form, setForm] = useState<FormState>({
    name:'', email:'', company:'', phone:'',
    projectType: preselected, title:'', description:'', goals:'', audience:'', features:'', existingUrl:'',
    budgetRange:'', launchDate:'', urgency:'', extra:'',
    consent:false,
  });

  function update(k: keyof FormState, v: any){ setForm(f=>({...f,[k]:v})); }

  async function submit() {
    setStatus('sending'); setError('');
    try {
      const res = await fetch('/api/inquiry', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)});
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Failed');
      setRef(j.reference || ''); setStatus('success');
    } catch (e:any){ setStatus('error'); setError(e.message); }
  }

  return (
    <div className="py-16 lg:py-24 bg-lightgray min-h-[80vh]">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-[32px] lg:text-[48px] font-bold tracking-tight leading-[0.95]">Let&apos;s Build Something Great Together.</h1>
          <p className="mt-4 text-sm leading-6 text-slateMuted">Tell us what you have in mind. Whether you need a new website, a powerful application, or a complete digital solution, we&apos;ll help you plan your next step.</p>
          <div className="mt-6 flex justify-center gap-2">{[1,2,3,4,5].map(i=><div key={i} className={`h-2 w-12 rounded-full transition ${step>=i ? 'bg-electric' : 'bg-gray-200'}`}/>)}</div>
        </div>

        <div className="mt-10 rounded-[28px] border bg-white p-6 lg:p-10">
          {status==='success' ? (
            <div className="text-center py-10">
              <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">✓</div>
              <h2 className="mt-4 text-2xl font-bold">Inquiry Received</h2>
              <p className="mt-2 text-sm text-slateMuted">Reference: <span className="font-mono font-semibold text-navy">{ref}</span></p>
              <p className="mt-2 text-sm text-slateMuted max-w-md mx-auto">We&apos;ve sent a confirmation to your email and notified our team. We&apos;ll review and reply within one business day.</p>
              <a href="/" className="mt-6 inline-flex h-11 px-6 items-center rounded-full bg-navy text-white text-sm font-semibold">Back to Home</a>
            </div>
          ) : (
            <>
              {step===1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Step 1 — About You</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold">Full name *</label><input value={form.name} onChange={e=>update('name',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                    <div><label className="text-xs font-semibold">Email *</label><input value={form.email} onChange={e=>update('email',e.target.value)} type="email" className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold">Company</label><input value={form.company} onChange={e=>update('company',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                    <div><label className="text-xs font-semibold">Phone (optional)</label><input value={form.phone} onChange={e=>update('phone',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                  </div>
                </div>
              )}
              {step===2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Step 2 — Your Project</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {siteConfig.projectTypes.map(t=>(
                      <button key={t} type="button" onClick={()=>update('projectType',t)} className={`h-12 rounded-xl border text-sm font-medium text-left px-4 transition ${form.projectType===t ? 'bg-navy text-white border-navy' : 'bg-white hover:bg-lightgray'}`}>{t}</button>
                    ))}
                  </div>
                </div>
              )}
              {step===3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Step 3 — Project Details</h3>
                  <div><label className="text-xs font-semibold">Project title *</label><input value={form.title} onChange={e=>update('title',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                  <div><label className="text-xs font-semibold">Describe your idea *</label><textarea value={form.description} onChange={e=>update('description',e.target.value)} rows={4} className="mt-1 w-full rounded-xl border p-4 text-sm"/></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold">Main goals</label><input value={form.goals} onChange={e=>update('goals',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                    <div><label className="text-xs font-semibold">Target audience</label><input value={form.audience} onChange={e=>update('audience',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                  </div>
                  <div><label className="text-xs font-semibold">Required features</label><textarea value={form.features} onChange={e=>update('features',e.target.value)} rows={3} className="mt-1 w-full rounded-xl border p-4 text-sm"/></div>
                  <div><label className="text-xs font-semibold">Existing website URL (if any)</label><input value={form.existingUrl} onChange={e=>update('existingUrl',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                </div>
              )}
              {step===4 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Step 4 — Budget and Timeline</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold">Budget range</label><select value={form.budgetRange} onChange={e=>update('budgetRange',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option value="">Select</option>{siteConfig.budgetRanges.map(b=><option key={b}>{b}</option>)}</select></div>
                    <div><label className="text-xs font-semibold">Desired launch date</label><input type="date" value={form.launchDate} onChange={e=>update('launchDate',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"/></div>
                  </div>
                  <div><label className="text-xs font-semibold">Project urgency</label><select value={form.urgency} onChange={e=>update('urgency',e.target.value)} className="mt-1 w-full h-11 rounded-xl border px-4 text-sm"><option value="">Select</option><option>Flexible</option><option>Soon</option><option>Urgent</option></select></div>
                  <div><label className="text-xs font-semibold">Additional requirements</label><textarea value={form.extra} onChange={e=>update('extra',e.target.value)} rows={3} className="mt-1 w-full rounded-xl border p-4 text-sm"/></div>
                </div>
              )}
              {step===5 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Step 5 — Review and Submit</h3>
                  <div className="rounded-xl bg-lightgray p-5 text-sm space-y-1">
                    <div><b>Name:</b> {form.name} — {form.email}</div>
                    <div><b>Company:</b> {form.company || '-'} | <b>Phone:</b> {form.phone || '-'}</div>
                    <div><b>Project Type:</b> {form.projectType}</div>
                    <div><b>Title:</b> {form.title}</div>
                    <div><b>Description:</b> {form.description}</div>
                    <div><b>Goals:</b> {form.goals || '-'} | <b>Audience:</b> {form.audience || '-'}</div>
                    <div><b>Features:</b> {form.features || '-'}</div>
                    <div><b>Budget:</b> {form.budgetRange || '-'} | <b>Launch:</b> {form.launchDate || '-'} | <b>Urgency:</b> {form.urgency || '-'}</div>
                  </div>
                  <label className="flex gap-2 text-xs text-slateMuted"><input type="checkbox" checked={form.consent} onChange={e=>update('consent',e.target.checked)}/> I consent to processing per Privacy Policy *</label>
                  {status==='error' && <p className="text-sm text-red-600">{error}</p>}
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button type="button" disabled={step===1} onClick={()=>setStep(s=>Math.max(1,s-1))} className="h-11 px-6 rounded-full border text-sm font-semibold disabled:opacity-50">Back</button>
                {step<5 ? <button type="button" onClick={()=>setStep(s=>Math.min(5,s+1))} className="h-11 px-6 rounded-full bg-navy text-white text-sm font-semibold">Continue</button> : <button type="button" disabled={status==='sending' || !form.consent} onClick={submit} className="h-11 px-6 rounded-full bg-electric text-white text-sm font-semibold disabled:opacity-50">{status==='sending'?'Submitting...':'Submit Inquiry'}</button>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
