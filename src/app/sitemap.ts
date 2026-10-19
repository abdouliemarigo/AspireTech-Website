import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://aspiretech.gm';
  const routes = ['','/about','/services','/work','/founders','/contact','/faq','/blog','/privacy','/terms','/book','/start-project'];
  return routes.map(r=>({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'weekly', priority: r==='' ? 1 : 0.7 }));
}
