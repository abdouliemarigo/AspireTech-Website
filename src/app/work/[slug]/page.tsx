import { projects } from '@/lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return projects.map(p=>({ slug: p.slug })); }

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find(x=>x.slug===params.slug);
  if (!p) return notFound();
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-10">
        <Link href="/work" className="text-sm text-slateMuted hover:text-navy">← Back to Our Work</Link>
        <div className={`mt-8 h-[320px] rounded-[28px] bg-gradient-to-br ${p.imageGradient} relative`}>
          <div className="absolute bottom-6 left-6 flex gap-2">
            <span className="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full bg-white">{p.typeLabel}</span>
            <span className="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full bg-navy text-white">{p.category}</span>
          </div>
        </div>
        <h1 className="mt-8 text-[32px] lg:text-[44px] font-bold tracking-tight">{p.title}</h1>
        <p className="mt-3 text-slateMuted leading-7">{p.overview}</p>
        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div><h3 className="font-semibold">Problem</h3><p className="mt-2 text-sm leading-6 text-slateMuted">{p.problem}</p></div>
            <div><h3 className="font-semibold">Solution & Key Features</h3><p className="mt-2 text-sm leading-6 text-slateMuted">{p.solution}</p><ul className="mt-3 space-y-2 text-sm text-slateMuted list-disc pl-5">{p.features.map(f=><li key={f}>{f}</li>)}</ul></div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border p-6"><h4 className="text-sm font-semibold">Technologies</h4><div className="mt-3 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="text-xs px-2.5 py-1 rounded-full bg-lightgray">{t}</span>)}</div></div>
            <div className="rounded-2xl bg-navy p-6 text-white"><h4 className="text-sm font-semibold">Transparency Note</h4><p className="mt-2 text-xs leading-6 text-white/60">This is a {p.typeLabel.toLowerCase()} project. No fake client, testimonial, or metric is presented as real. When client work is available, it will be clearly attributed with permission.</p>{p.liveUrl && <a href={p.liveUrl} target="_blank" className="mt-4 inline-flex h-9 px-4 items-center rounded-full bg-electric text-xs font-semibold">View Live Demo</a>}</div>
            <Link href="/start-project" className="inline-flex h-11 w-full items-center justify-center rounded-full bg-electric text-white text-sm font-semibold">Start a Similar Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
