export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Design and Development',
    short: 'Business, corporate, landing, portfolio, e-commerce, hospital & education sites.',
    description: 'We build fast, secure, SEO-ready websites that convert visitors into customers. From simple landing pages to complex e-commerce and institutional sites.',
    benefits: ['Professional presence', 'Mobile-first performance', 'SEO and analytics ready', 'Easy to update and scale'],
    deliverables: ['Business websites', 'Corporate websites', 'Landing pages', 'Portfolio websites', 'E-commerce websites', 'Hospital and educational websites', 'Booking and appointment websites', 'Redesign and maintenance'],
    icon: '🌐'
  },
  {
    slug: 'web-apps',
    title: 'Web Application Development',
    short: 'Customer portals, dashboards, and custom business workflows.',
    description: 'Custom web applications that automate operations and give you control over your data and processes.',
    benefits: ['Automate manual work', 'Secure access control', 'Real-time insights', 'Built for growth'],
    deliverables: ['Customer portals', 'Business dashboards', 'Management systems', 'Booking and reservation systems', 'Client and staff portals', 'Custom business workflows'],
    icon: '⚙️'
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Application Development',
    short: 'Android, iOS and cross-platform apps with API integration.',
    description: 'Native and cross-platform mobile apps that feel great and work reliably offline and online.',
    benefits: ['Reach customers on mobile', 'Cross-platform efficiency', 'API and payment integrations', 'Ongoing improvements'],
    deliverables: ['Android and iOS applications', 'Cross-platform development', 'API integration', 'App maintenance and improvements'],
    icon: '📱'
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    short: 'Authorized security reviews, hardening and secure development.',
    description: 'We provide only authorized, defensive security services to help you protect your products and customers.',
    benefits: ['Reduce risk', 'Protect customer trust', 'Meet best-practice standards', 'Clear remediation guidance'],
    deliverables: ['Authorized security assessments', 'Website security reviews', 'Secure application development', 'Security hardening', 'Vulnerability assessment and remediation guidance'],
    icon: '🔒'
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX and Product Design',
    short: 'Wireframes, prototypes, journeys and responsive interfaces.',
    description: 'Human-centered design that makes complex products simple, accessible and delightful.',
    benefits: ['Higher conversion', 'Less user confusion', 'Faster development with prototypes', 'Consistent design system'],
    deliverables: ['Wireframes', 'Interactive prototypes', 'User journeys', 'Responsive interface design', 'Usability improvements'],
    icon: '🎨'
  },
  {
    slug: 'consulting',
    title: 'IT Consulting and Digital Transformation',
    short: 'Technology planning, workflow improvement and digital strategy.',
    description: 'We help startups and businesses choose the right tools, plan roadmaps, and integrate systems.',
    benefits: ['Clear technology roadmap', 'Lower operational cost', 'Better tool alignment', 'Startup-friendly guidance'],
    deliverables: ['Technology planning', 'Workflow improvement', 'Digital strategy', 'System integration', 'Technical guidance for startups and businesses'],
    icon: '💡'
  },
  {
    slug: 'maintenance',
    title: 'Website Maintenance and Support',
    short: 'Updates, backups, performance and security with ongoing support.',
    description: 'Keep your site fast, safe and up-to-date without worrying about technical details.',
    benefits: ['Peace of mind', 'Faster load times', 'Secure and backed up', 'Responsive support'],
    deliverables: ['Updates and bug fixes', 'Performance improvements', 'Backups', 'Security updates', 'Ongoing technical support'],
    icon: '🛠️'
  },
];
