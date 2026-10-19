import { google } from 'googleapis';

type CalendarConfig = {
  calendarId: string;
  clientEmail: string;
  privateKey: string;
};

function getConfig(): CalendarConfig | null {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!calendarId || !clientEmail || !privateKey) return null;
  // Handle escaped newlines from env
  privateKey = privateKey.replace(/\\n/g, '\n');
  return { calendarId, clientEmail, privateKey };
}

export function isCalendarConfigured(): boolean {
  return getConfig() !== null;
}

async function getAuth() {
  const config = getConfig();
  if (!config) throw new Error('Google Calendar not configured');
  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });
  return auth;
}

export async function createCalendarEvent(data: {
  fullName: string;
  email: string;
  service?: string;
  description?: string;
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string; // HH:MM
  timeZone: string;
  meetingType: 'online'|'in-person';
  notes?: string;
}) {
  const config = getConfig();
  if (!config) return { configured: false, eventId: null };

  const auth = await getAuth();
  const calendar = google.calendar({ version: 'v3', auth });

  // Combine date + time in given timezone - store as UTC for Google
  // Simplified: treat preferredDate+Time as local in timeZone, convert to ISO
  const startDateTimeStr = `${data.preferredDate}T${data.preferredTime}:00`;
  // We'll create with timeZone field so Google handles it
  const start = {
    dateTime: startDateTimeStr,
    timeZone: data.timeZone,
  };
  // 60 min default duration
  const endHour = (() => {
    const [h,m] = data.preferredTime.split(':').map(Number);
    let eh = h + 1;
    if (eh >= 24) eh = 23;
    return `${String(eh).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  })();
  const end = {
    dateTime: `${data.preferredDate}T${endHour}:00`,
    timeZone: data.timeZone,
  };

  const summary = `AspireTech - ${data.service || 'Consultation'} - ${data.fullName}`;
  const description = `Client: ${data.fullName} (${data.email})
Service: ${data.service || '-'}
Type: ${data.meetingType}
Description: ${data.description || '-'}
Notes: ${data.notes || '-'}
Timezone: ${data.timeZone}

Booked via aspiretech.gm
`;

  const event = await calendar.events.insert({
    calendarId: config.calendarId,
    requestBody: {
      summary,
      description,
      start,
      end,
      attendees: [{ email: data.email, displayName: data.fullName }],
      reminders: { useDefault: true },
      // Add Meet link for online meetings
      conferenceData: data.meetingType === 'online' ? {
        createRequest: { requestId: `aspire-${Date.now()}` }
      } : undefined,
    },
    conferenceDataVersion: data.meetingType === 'online' ? 1 : 0,
  });

  return { configured: true, eventId: event.data.id, htmlLink: event.data.htmlLink, meetLink: event.data.hangoutLink };
}

export async function checkAvailability(date: string, timeZone: string) {
  const config = getConfig();
  if (!config) return { configured: false, busy: [] };
  const auth = await getAuth();
  const calendar = google.calendar({ version: 'v3', auth });

  const dayStart = new Date(`${date}T00:00:00`);
  const dayEnd = new Date(`${date}T23:59:59`);

  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      timeZone,
      items: [{ id: config.calendarId }],
    }
  });

  const busy = res.data.calendars?.[config.calendarId]?.busy || [];
  return { configured: true, busy };
}

export async function updateCalendarEventStatus(eventId: string, status: 'confirmed'|'cancelled'|'tentative') {
  const config = getConfig();
  if (!config) return { configured: false };
  const auth = await getAuth();
  const calendar = google.calendar({ version: 'v3', auth });
  await calendar.events.patch({
    calendarId: config.calendarId,
    eventId,
    requestBody: { status: status === 'cancelled' ? 'cancelled' : 'confirmed', summary: status === 'cancelled' ? '[CANCELLED] ' : '' }
  });
  return { configured: true };
}
