export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
};

export const posts: Post[] = [
  { slug: 'how-much-website-gambia', title: 'How Much Does a Website Cost in The Gambia? (Honest Breakdown)', excerpt: 'We break down what drives cost: scope, design, content, e-commerce, and maintenance — so you can budget with confidence.', category: 'Web Development', date: '2026-05-01', readingTime: '6 min', author: 'AspireTech Team' },
  { slug: 'website-redesign-checklist', title: 'Website Redesign Checklist: 12 Things to Fix Before You Launch', excerpt: 'From performance to SEO to accessibility — the practical checklist we use for every redesign.', category: 'Design', date: '2026-04-20', readingTime: '7 min', author: 'AspireTech Team' },
  { slug: 'security-basics-small-business', title: 'Website Security Basics Every Small Business Should Know', excerpt: 'Only defensive, authorized practices: HTTPS, updates, backups, least privilege, and what to do if something looks off.', category: 'Cybersecurity', date: '2026-04-10', readingTime: '5 min', author: 'AspireTech Team' },
  { slug: 'from-idea-to-mvp', title: 'From Idea to MVP: How We Plan Projects at AspireTech', excerpt: 'Discover, Plan, Build, Launch & Support — how we keep scope clear and delivery predictable.', category: 'Product Strategy', date: '2026-03-28', readingTime: '8 min', author: 'AspireTech Team' },
];
