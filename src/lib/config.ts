export const siteConfig = {
  name: 'AspireTech',
  tagline: 'Dream. Build. Grow.',
  domain: 'aspiretech.gm',
  description: 'We design and develop modern websites, powerful applications, and reliable digital solutions that help businesses turn ideas into impact.',
  location: 'The Gambia',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@aspiretech.gm',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+220 XXX XXXX',
  socials: {
    instagram: 'https://instagram.com/aspiretech.gm',
    facebook: 'https://facebook.com/aspiretech',
    tiktok: 'https://tiktok.com/@aspiretech',
    x: 'https://x.com/aspiretech',
    linkedin: 'https://linkedin.com/company/aspiretech',
  },
  ctas: {
    build: '/start-project',
    book: '/book',
  },
  budgetRanges: [
    '$1k - $3k',
    '$3k - $7k',
    '$7k - $15k',
    '$15k - $30k',
    '$30k+',
    'Not sure yet',
  ],
  projectTypes: [
    'Website',
    'Web Application',
    'Mobile App',
    'E-commerce Website',
    'UI/UX Design',
    'Cybersecurity',
    'Website Redesign',
    'Other',
  ],
  services: [
    'Website Design and Development',
    'Web Application Development',
    'Mobile Application Development',
    'Cybersecurity',
    'UI/UX and Product Design',
    'IT Consulting and Digital Transformation',
    'Website Maintenance and Support',
  ],
  timeSlots: [
    '09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00'
  ],
};

export const placeholderNotice = "Placeholder — replace with verified company details before launch.";
