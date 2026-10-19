import { posts } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams(){ return posts.map(p=>({ slug: p.slug })); }

export default function PostPage({ params }: { params:{ slug:string } }) {
  const post = posts.find(p=>p.slug===params.slug);
  if (!post) return notFound();
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <Link href="/blog" className="text-sm text-slateMuted hover:text-navy">← Back to Blog</Link>
        <div className="mt-6 inline-flex gap-2"><span className="text-[11px] px-2 py-1 rounded-full bg-paleblue text-electric font-bold tracking-widest">{post.category}</span><span className="text-[11px] text-slateMuted">{post.readingTime} • {post.date}</span></div>
        <h1 className="mt-4 text-[32px] font-bold tracking-tight leading-tight">{post.title}</h1>
        <p className="mt-2 text-xs text-slateMuted">By {post.author}</p>
        <div className="mt-8 prose prose-sm max-w-none prose-headings:font-semibold">
          <p>{post.excerpt}</p>
          <p className="text-slateMuted">Full article content is added via your CMS or markdown files. This template includes categories, search (add later), reading time, author attribution, metadata and social sharing. Replace placeholder content with reviewed, original articles — never copy or fabricate news.</p>
          <h3>What you&apos;ll learn</h3>
          <ul><li>Practical steps you can apply today</li><li>Why it matters for business growth</li><li>How AspireTech approaches this topic for clients</li></ul>
        </div>
        <div className="mt-10 flex gap-3">
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" className="h-9 px-4 inline-flex items-center rounded-full border text-xs font-semibold">Share on X</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://aspiretech.gm/blog/${post.slug}`} target="_blank" className="h-9 px-4 inline-flex items-center rounded-full border text-xs font-semibold">Share on Facebook</a>
        </div>
      </div>
    </div>
  );
}
