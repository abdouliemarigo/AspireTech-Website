# AspireTech — Dream. Build. Grow.

Premium, production-ready website for AspireTech, a software development company based in The Gambia serving worldwide.

## Brand
- Logo: `public/aspiretech-logo.png` — supplied logo preserved with original proportions, AS monogram, electric blue #1677F2, navy #111827.
- Tagline: Dream. Build. Grow.
- Palette: #FFFFFF, #111827, #1677F2, #DBEAFE, #F3F4F6, #64748B
- Style: white/light-gray backgrounds, dark navy contrast sections, electric blue CTAs, rounded cards, soft shadows, subtle reveals, no neon.

## Tech Stack
- Next.js 14 App Router + TypeScript + React 18
- Tailwind CSS 3.4
- Prisma ORM + PostgreSQL
- Resend for transactional email (fallback logs if no key)
- Zod validation, server-side rate limiting, honeypot-ready
- SEO: metadata, openGraph, sitemap.xml, robots.txt, semantic HTML, alt text
- Accessibility: WCAG 2.2 AA target, keyboard nav, focus rings, label associations

## Pages (all implemented)
- `/` Home — hero "Dream Big. Build Smart. Grow Digitally.", trust section, services preview, featured work (concept/demo labeled), process, why us, closing CTA
- `/about` Story, mission, vision, values, approach, commitment, Three Minds One Vision
- `/services` 7 detailed services each with benefits, deliverables, Discuss CTA with preselected service
- `/work` Filterable gallery (Websites, Web Apps, Mobile Apps, UI/UX, Cybersecurity) + `/work/[slug]` detail, central data file `src/lib/projects.ts`
- `/founders` Abdoulie, Sarjo, Pa Louie — editable placeholder roles, no invented qualifications
- `/book` Appointment booking with date/time/timezone validation, double-booking prevention via DB unique constraint
- `/start-project` 5-step inquiry form: About You, Your Project, Project Details, Budget/Timeline, Review & Submit — generates reference, emails client+team
- `/contact` Contact form + placeholders for real email/phone
- `/faq` Honest answers, cost/timing explained as scope-dependent
- `/blog` + `/blog/[slug]` Categories, reading time, author, sharing
- `/privacy`, `/terms` Configurable templates, flagged for legal review
- Custom 404 with brand

## Backend
### Database (Prisma)
Models:
- ContactSubmission
- ProjectInquiry (with unique reference)
- Appointment (unique constraint on preferredDate+preferredTime)

Migrations:
```
npm run db:generate
npm run db:push  # or db:migrate for migration
```

### API
- POST /api/contact — validates, stores, emails team
- POST /api/inquiry — validates, generates ASP-XXXX reference, stores, emails client+team
- POST /api/appointment — validates date not past, prevents double booking, stores, emails both

Security: server validation (Zod), rate limiting (IP memory, replace with Redis in prod), no secrets in frontend, sanitized HTML emails.

### Email
Configure in .env:
RESEND_API_KEY, EMAIL_FROM, EMAIL_TO
If missing, emails are logged to console (fallback) — no fake success.

## Configuration
Centralized in `src/lib/config.ts`:
- contact email/phone/location
- socials (Instagram, Facebook, TikTok, X, LinkedIn) — placeholder URLs until verified
- budgetRanges, projectTypes, timeSlots

## Environment
Copy .env.example to .env.local:
DATABASE_URL="postgresql://..."
RESEND_API_KEY=""
EMAIL_FROM="hello@aspiretech.gm"
EMAIL_TO="team@aspiretech.gm"
NEXT_PUBLIC_SITE_URL="https://aspiretech.gm"
NEXT_PUBLIC_CONTACT_EMAIL / PHONE

## Local Dev
```
npm install
npm run db:generate
npm run dev
```
Open http://localhost:3000

## Production Deploy (Vercel recommended)
1. Push to GitHub
2. Vercel → New Project → import repo
3. Add env vars in Vercel dashboard
4. Add PostgreSQL (Vercel Postgres / Neon / Supabase) and set DATABASE_URL
5. Deploy — Vercel runs `next build`
6. Run migrations: `npx prisma migrate deploy` via Vercel build step or locally

## Launch Checklist
- [ ] Replace placeholder email/phone/location/socials in config.ts and .env
- [ ] Verify RESEND_API_KEY and test email delivery
- [ ] Create PostgreSQL and run migrations
- [ ] Test all forms empty/invalid/valid
- [ ] Test double-booking prevention (try same date/time twice)
- [ ] Test responsive mobile/tablet/desktop
- [ ] Check keyboard nav and focus
- [ ] Verify sitemap.xml, robots.txt, metadata
- [ ] Legal review of Privacy & Terms
- [ ] Add real blog posts (replace placeholder content)
- [ ] Replace concept projects with real client work when available (keep labeling honest)
- [ ] Set up analytics only after consent config
- [ ] Enable HTTPS (Vercel does by default)

## Updating Content
- Projects: edit `src/lib/projects.ts`
- Services: edit `src/lib/services.ts`
- Blog: edit `src/lib/blog.ts` or connect MDX/CMS later
- Founders: edit `src/app/founders/page.tsx`
- Socials: edit `src/lib/config.ts`

## Notes on Integrity
- No fake client logos, testimonials, metrics, awards invented.
- All concept projects labeled Concept/Demo.
- Founder roles are placeholders.
- Contact info is placeholder until verified.
- No calendar auto-confirm without credentials — implemented as request workflow.

© 2026 AspireTech. All rights reserved.
