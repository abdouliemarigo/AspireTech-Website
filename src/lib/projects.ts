export type Project = {
  slug: string;
  title: string;
  category: 'Websites' | 'Web Applications' | 'Mobile Apps' | 'UI/UX Design' | 'Cybersecurity';
  typeLabel: 'Concept' | 'Demo' | 'Client Work';
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  imageGradient: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'gambia-health-portal',
    title: 'Clinic Booking Portal',
    category: 'Web Applications',
    typeLabel: 'Concept',
    overview: 'A booking and patient management concept for clinics in The Gambia.',
    problem: 'Clinics manage appointments manually, leading to long waits and missed follow-ups.',
    solution: 'A clean portal for patients to book, receive reminders, and for staff to manage schedules.',
    features: ['Online booking', 'SMS reminders (concept)', 'Staff dashboard', 'Role-based access'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    imageGradient: 'from-blue-500 to-cyan-400',
  },
  {
    slug: 'edufy-lms',
    title: 'Edufy Learning Platform',
    category: 'Websites',
    typeLabel: 'Demo',
    overview: 'Responsive educational website concept for schools and training centers.',
    problem: 'Educational institutions need clear program information and inquiry flows.',
    solution: 'Fast marketing site with program catalog, application form, and blog.',
    features: ['Program catalog', 'Application inquiry', 'Blog/insights', 'SEO optimized'],
    tech: ['Next.js', 'MDX', 'Tailwind'],
    imageGradient: 'from-indigo-500 to-electric',
  },
  {
    slug: 'marketplus',
    title: 'MarketPlus E-commerce',
    category: 'Websites',
    typeLabel: 'Concept',
    overview: 'Modern e-commerce concept for local retailers.',
    problem: 'Small retailers struggle to sell online with poor mobile experience.',
    solution: 'Mobile-first store with product filters, cart, and WhatsApp checkout option.',
    features: ['Product catalog', 'Cart and checkout', 'Order tracking UI', 'Payment ready'],
    tech: ['Next.js', 'Stripe (ready)', 'Prisma'],
    imageGradient: 'from-sky-500 to-blue-700',
  },
  {
    slug: 'fleet-dash',
    title: 'Fleet Operations Dashboard',
    category: 'Web Applications',
    typeLabel: 'Concept',
    overview: 'Dashboard concept for logistics operations.',
    problem: 'Operators need visibility into trips, vehicles, and costs.',
    solution: 'Dashboard with KPI cards, trip logs, and maintenance alerts.',
    features: ['KPI overview', 'Trip management', 'Vehicle status', 'Export reports'],
    tech: ['React', 'TypeScript', 'Recharts'],
    imageGradient: 'from-slate-800 to-slate-600',
  },
  {
    slug: 'quickpay-mobile',
    title: 'QuickPay Mobile Wallet',
    category: 'Mobile Apps',
    typeLabel: 'Concept',
    overview: 'Cross-platform wallet UI for peer transfers and bills.',
    problem: 'Users need a simple, secure way to manage small payments.',
    solution: 'Clean mobile UI with balance, transfers, and transaction history.',
    features: ['Onboarding flow', 'Secure PIN', 'Transfer UI', 'Transaction list'],
    tech: ['React Native', 'Expo'],
    imageGradient: 'from-blue-600 to-indigo-700',
  },
  {
    slug: 'securecheck',
    title: 'SecureCheck Site Review',
    category: 'Cybersecurity',
    typeLabel: 'Demo',
    overview: 'Authorized security review checklist tool for website owners.',
    problem: 'Small businesses miss basic security hardening steps.',
    solution: 'Guided checklist covering HTTPS, headers, updates, and backups with remediation tips.',
    features: ['Security checklist', 'Hardening guide', 'Remediation steps', 'Report export'],
    tech: ['Next.js', 'OWASP practices'],
    imageGradient: 'from-emerald-600 to-teal-600',
  },
];
