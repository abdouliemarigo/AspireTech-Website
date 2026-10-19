import { NextRequest, NextResponse } from 'next/server';
import { appointmentSchema } from '@/lib/validators';
import { ensureDbConnection, prisma } from '@/lib/db';
import { sendEmail, appointmentEmailTemplate } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = appointmentSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0].message }, { status:400 });
    const data = parsed.data;
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    const preferredDate = new Date(data.preferredDate);
    if (isNaN(preferredDate.getTime()) || preferredDate < new Date(new Date().setHours(0,0,0,0))) return NextResponse.json({ error: 'Invalid or past date' }, { status:400 });

    const db = await ensureDbConnection();
    if (db.ok) {
      try {
        await prisma.appointment.create({ data: {
          fullName: data.fullName, businessName: data.businessName, email: data.email, phone: data.phone,
          contactMethod: data.contactMethod, service: data.service, description: data.description,
          preferredDate, preferredTime: data.preferredTime, timeZone: data.timeZone,
          meetingType: data.meetingType, notes: data.notes, ip
        }});
      } catch (e:any) {
        if (e.code === 'P2002') return NextResponse.json({ error: 'That time slot is already booked — please choose another.' }, { status:409 });
        throw e;
      }
    }

    await sendEmail({ to: data.email, subject: 'Your AspireTech Appointment Request Received', html: appointmentEmailTemplate(data, true) });
    await sendEmail({ to: process.env.EMAIL_TO || 'team@aspiretech.gm', subject: `New Appointment Request — ${data.fullName}`, html: appointmentEmailTemplate(data, false) });

    return NextResponse.json({ ok:true });
  } catch (e:any) { return NextResponse.json({ error: e.message||'Server error' }, { status:500 }); }
}
