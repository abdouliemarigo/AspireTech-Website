import { posts } from '@/lib/blog';
import Link from 'next/link';
export const metadata = { title: 'Blog / Insights' };
export default function BlogPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <h1 className="text-[36px] font-bold tracking-tight">Blog / Insights</h1>
        <p className="mt-3 text-sm text-slateMuted max-w-2xl">Practical web development tips, technology explainers, cybersecurity awareness and design best practices. Real, reviewed content — no fabricated news.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p=>(
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-[20px] border bg-white p-6 hover:shadow-soft transition">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest"><span className="px-2 py-1 rounded-full bg-paleblue text-electric">{p.category}</span><span className="text-slateMuted">{p.readingTime}</span></div>
              <h3 className="mt-4 font-semibold leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-slateMuted leading-6">{p.excerpt}</p>
              <div className="mt-4 text-xs text-slateMuted">{p.date} • {p.author}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
