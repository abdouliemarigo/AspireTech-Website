import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validators';
import { ensureDbConnection, prisma } from '@/lib/db';
import { sendEmail, contactEmailTemplate } from '@/lib/email';

const rateMap = new Map<string, { count:number, ts:number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const entry = rateMap.get(ip) || { count:0, ts:now };
    if (now - entry.ts < 60_000 && entry.count > 5) return NextResponse.json({ error: 'Rate limit, try later' }, { status:429 });
    entry.count++; rateMap.set(ip, entry);

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0].message }, { status:400 });
    const data = parsed.data;

    const db = await ensureDbConnection();
    if (db.ok) {
      try { await prisma.contactSubmission.create({ data: { name: data.name, email: data.email, subject: data.subject, service: data.service, message: data.message, ip } }); } catch {}
    }

    await sendEmail({ to: process.env.EMAIL_TO || 'team@aspiretech.gm', subject: `New Contact: ${data.subject||data.name}`, html: contactEmailTemplate(data) });
    return NextResponse.json({ ok:true });
  } catch (e:any) { return NextResponse.json({ error: e.message||'Server error' }, { status:500 }); }
}
