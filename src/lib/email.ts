import { Resend } from 'resend';

export async function sendEmail({ to, subject, html }: { to: string | string[]; subject: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || 'hello@aspiretech.gm';
  if (!apiKey) {
    console.log('[EMAIL FALLBACK] To:', to, 'Subject:', subject);
    console.log(html.slice(0, 1000));
    return { id: 'fallback-log', fallback: true };
  }
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({ from, to: Array.isArray(to) ? to : [to], subject, html });
  return result;
}

export function inquiryEmailTemplate(data: any, ref: string) {
  return `
  <div style="font-family:Inter, sans-serif; line-height:1.6; color:#111827">
    <h2>AspireTech — New Project Inquiry ${ref}</h2>
    <p><b>Name:</b> ${data.name}<br/><b>Email:</b> ${data.email}<br/><b>Company:</b> ${data.company||'-'}<br/><b>Type:</b> ${data.projectType}<br/><b>Title:</b> ${data.title}</p>
    <p><b>Description:</b><br/>${data.description?.replace(/\n/g,'<br/>')}</p>
    <p><b>Goals:</b> ${data.goals||'-'}<br/><b>Audience:</b> ${data.audience||'-'}<br/><b>Features:</b> ${data.features||'-'}</p>
    <p><b>Budget:</b> ${data.budgetRange||'-'} | <b>Launch:</b> ${data.launchDate||'-'} | <b>Urgency:</b> ${data.urgency||'-'}</p>
    <hr/><p>Ref: ${ref}</p>
  </div>`;
}

export function contactEmailTemplate(data: any) {
  return `<div style="font-family:Inter,sans-serif"><h2>New Contact: ${data.subject||'General'}</h2><p><b>${data.name}</b> (${data.email}) — ${data.service||'No service'}</p><p>${data.message?.replace(/\n/g,'<br/>')}</p></div>`;
}

export function appointmentEmailTemplate(data: any, isClient: boolean) {
  return `<div style="font-family:Inter,sans-serif"><h2>${isClient ? 'Your AspireTech Appointment Request Received' : 'New Appointment Request'}</h2><p><b>${data.fullName}</b> — ${data.email}<br/>Service: ${data.service||'-'}<br/>Date: ${data.preferredDate} at ${data.preferredTime} (${data.timeZone})<br/>Type: ${data.meetingType}</p><p>${data.description||''}<br/>${data.notes||''}</p></div>`;
}
