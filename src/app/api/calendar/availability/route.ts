import { NextRequest, NextResponse } from 'next/server';
import { checkAvailability, isCalendarConfigured } from '@/lib/googleCalendar';
import { siteConfig } from '@/lib/config';
import { prisma, ensureDbConnection } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date'); // YYYY-MM-DD
  const timeZone = searchParams.get('tz') || 'Africa/Banjul';
  if (!date) return NextResponse.json({ error: 'date required' }, { status:400 });

  let busySlots: string[] = [];

  // 1) Check DB bookings
  const db = await ensureDbConnection();
  if (db.ok) {
    try {
      const dayStart = new Date(date);
      const dayEnd = new Date(date);
      dayEnd.setHours(23,59,59,999);
      const bookings = await prisma.appointment.findMany({ where: { preferredDate: { gte: dayStart, lte: dayEnd } }, select: { preferredTime: true } });
      busySlots = bookings.map(b=>b.preferredTime);
    } catch {}
  }

  // 2) Check Google Calendar if configured
  let googleBusy: string[] = [];
  if (isCalendarConfigured()) {
    try {
      const res = await checkAvailability(date, timeZone);
      if (res.configured) {
        // Map busy blocks to our slot format HH:MM
        res.busy.forEach((b:any) => {
          const start = new Date(b.start);
          const hh = String(start.getHours()).padStart(2,'0');
          const mm = start.getMinutes() < 30 ? '00' : '30';
          googleBusy.push(`${hh}:${mm}`);
        });
      }
    } catch {}
  }

  const allBusy = Array.from(new Set([...busySlots, ...googleBusy]));
  const available = siteConfig.timeSlots.filter(t=>!allBusy.includes(t));

  return NextResponse.json({ 
    date, 
    timeZone, 
    configured: { db: db.ok, calendar: isCalendarConfigured() },
    busy: allBusy, 
    available,
    googleBusy 
  });
}
