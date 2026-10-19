import { NextRequest, NextResponse } from 'next/server';
import { inquirySchema } from '@/lib/validators';
import { ensureDbConnection, prisma } from '@/lib/db';
import { sendEmail, inquiryEmailTemplate } from '@/lib/email';

function genRef(){ return 'ASP-' + Math.random().toString(36).slice(2,8).toUpperCase() + '-' + Date.now().toString(36).toUpperCase(); }

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0].message }, { status:400 });
    const data = parsed.data;
    const reference = genRef();
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    const db = await ensureDbConnection();
    if (db.ok) {
      try { await prisma.projectInquiry.create({ data: { reference, name: data.name, email: data.email, company: data.company, phone: data.phone, projectType: data.projectType, title: data.title, description: data.description, goals: data.goals, audience: data.audience, features: data.features, existingUrl: data.existingUrl, budgetRange: data.budgetRange, launchDate: data.launchDate, urgency: data.urgency, extra: data.extra, ip }}); } catch(e){ console.error(e); }
    }

    const htmlClient = `<div style="font-family:Inter,sans-serif"><h2>Thanks ${data.name} — we received your inquiry ${reference}</h2><p>We review and reply within one business day.</p><p>Summary: ${data.projectType} — ${data.title}</p></div>`;
    const htmlTeam = inquiryEmailTemplate(data, reference);

    await sendEmail({ to: data.email, subject: `We received your inquiry ${reference} — AspireTech`, html: htmlClient });
    await sendEmail({ to: process.env.EMAIL_TO || 'team@aspiretech.gm', subject: `New Project Inquiry ${reference}`, html: htmlTeam });

    return NextResponse.json({ ok:true, reference });
  } catch (e:any) { return NextResponse.json({ error: e.message||'Server error' }, { status:500 }); }
}
