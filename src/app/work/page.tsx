'use client';
import { projects } from '@/lib/projects';
import { useState } from 'react';
import Link from 'next/link';

const filters = ['All','Websites','Web Applications','Mobile Apps','UI/UX Design','Cybersecurity'] as const;

export default function WorkPage() {
  const [active, setActive] = useState<typeof filters[number]>('All');
  const list = active==='All' ? projects : projects.filter(p=>p.category===active);
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-electric">OUR WORK</p>
            <h1 className="mt-4 text-[36px] lg:text-[48px] font-bold tracking-tight leading-[0.95]">Concept projects showing how we think and build.</h1>
            <p className="mt-4 text-sm leading-6 text-slateMuted">All projects are clearly labeled as Concept or Demo until verified client work is available. We never invent clients, testimonials, or metrics. New projects can be added via <code className="px-1.5 py-0.5 rounded bg-lightgray text-xs">src/lib/projects.ts</code>.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map(f=>(
            <button key={f} onClick={()=>setActive(f)} className={`h-9 px-4 rounded-full text-sm font-medium border transition ${active===f ? 'bg-navy text-white border-navy' : 'bg-white hover:bg-lightgray'}`}>{f}</button>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p=>(
            <Link key={p.slug} href={`/work/${p.slug}`} className="group rounded-[20px] border bg-white overflow-hidden hover:shadow-soft transition">
              <div className={`h-48 bg-gradient-to-br ${p.imageGradient} relative`}>
                <span className="absolute left-3 top-3 text-[10px] font-bold tracking-widest px-2 py-1 rounded-full bg-white/90">{p.typeLabel}</span>
                <span className="absolute right-3 top-3 text-[10px] font-bold tracking-widest px-2 py-1 rounded-full bg-navy text-white">{p.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold group-hover:text-electric">{p.title}</h3>
                <p className="mt-2 text-sm text-slateMuted leading-6">{p.overview}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.slice(0,3).map(t=><span key={t} className="text-[11px] px-2 py-1 rounded-full bg-lightgray">{t}</span>)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
