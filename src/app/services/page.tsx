import { services } from '@/lib/services';
import Link from 'next/link';
export const metadata = { title: 'Services' };
export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-widest text-electric">WHAT WE DO</p>
          <h1 className="mt-4 text-[36px] lg:text-[52px] font-bold tracking-tight leading-[0.95]">Practical services for real business growth.</h1>
          <p className="mt-5 text-slateMuted leading-7">Every service is scoped transparently, built with maintainable code, and delivered with documentation and support. Select a service to discuss it — we&apos;ll preselect it in the inquiry form.</p>
        </div>
        <div className="mt-12 grid gap-8">
          {services.map(s=>(
            <div key={s.slug} id={s.slug} className="rounded-[24px] border bg-white p-8 lg:p-10 scroll-mt-24">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-paleblue flex items-center justify-center text-xl">{s.icon}</div>
                  <div>
                    <h2 className="text-[22px] font-bold tracking-tight">{s.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slateMuted">{s.description}</p>
                  </div>
                </div>
                <Link href={`/start-project?service=${encodeURIComponent(s.title)}`} className="h-11 inline-flex items-center rounded-full bg-electric px-6 text-sm font-semibold text-white">Discuss This Service</Link>
              </div>
              <div className="mt-8 grid lg:grid-cols-2 gap-8">
                <div><h4 className="text-sm font-semibold">Benefits</h4><ul className="mt-3 space-y-2 text-sm text-slateMuted list-disc pl-5">{s.benefits.map(b=><li key={b}>{b}</li>)}</ul></div>
                <div><h4 className="text-sm font-semibold">Deliverables</h4><ul className="mt-3 space-y-2 text-sm text-slateMuted list-disc pl-5">{s.deliverables.map(d=><li key={d}>{d}</li>)}</ul></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
