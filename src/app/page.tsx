import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-mesh relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-16 lg:py-28">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-semibold tracking-widest text-slateMuted">DREAM • BUILD • GROW</div>
              <h1 className="mt-6 text-[36px] sm:text-[52px] lg:text-[64px] font-[800] leading-[0.95] tracking-[-0.04em] text-navy text-balance">Dream Big.<br/>Build Smart.<br/><span className="text-electric">Grow Digitally.</span></h1>
              <p className="mt-6 max-w-[560px] text-[16px] sm:text-[18px] leading-7 text-slateMuted">We design and develop modern websites, powerful applications, and reliable digital solutions that help businesses turn ideas into impact.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/start-project" className="h-[52px] inline-flex items-center justify-center rounded-full bg-electric px-7 text-[15px] font-semibold text-white shadow-soft hover:bg-blue-600 transition">Let&apos;s Build Your Website</Link>
                <Link href="/services" className="h-[52px] inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 text-[15px] font-semibold hover:bg-gray-50 transition">Explore Our Services</Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-slateMuted">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>No fake clients • No invented metrics</span>
                <span>The Gambia • Worldwide</span>
              </div>
            </div>
            <div className="relative reveal" style={{animationDelay:'.12s'}}>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[28px] border bg-white shadow-softLg">
                <div className="absolute inset-0 bg-gradient-to-br from-paleblue to-white"/>
                <div className="absolute left-6 top-6 right-6 flex items-center justify-between">
                  <div className="h-8 w-28 rounded-full bg-navy"/>
                  <div className="flex gap-2"><div className="h-8 w-8 rounded-full bg-electric"/><div className="h-8 w-8 rounded-full bg-gray-200"/></div>
                </div>
                <div className="absolute left-6 top-20 right-6 grid grid-cols-3 gap-3">
                  {[1,2,3].map(i=><div key={i} className="h-24 rounded-2xl bg-white border shadow-soft"/>)}
                </div>
                <div className="absolute left-6 right-6 bottom-6 h-40 rounded-2xl bg-navy p-4">
                  <div className="h-3 w-24 rounded bg-white/20"/><div className="mt-4 h-2 w-full rounded bg-white/10"/><div className="mt-2 h-2 w-3/4 rounded bg-white/10"/><div className="mt-6 flex gap-2"><div className="h-8 w-24 rounded-full bg-electric"/><div className="h-8 w-24 rounded-full bg-white/10"/></div>
                </div>
                <div className="absolute bottom-[-20px] right-[-20px] h-40 w-40 rounded-full bg-electric/10 blur-2xl"/>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-soft">
                <Image src="/aspiretech-logo.png" alt="AspireTech" width={36} height={36} className="h-9 w-9 object-contain rounded-full border"/>
                <div><p className="text-xs font-semibold">AspireTech</p><p className="text-[11px] text-slateMuted">Dream • Build • Grow</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-16 lg:py-24 border-y">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-[28px] lg:text-[36px] font-bold tracking-tight">Built by three founders who care about real problems.</h2>
            <p className="mt-4 text-slateMuted leading-7">AspireTech started with a shared ambition: aim higher, create useful technology, and grow together. We&apos;re not an anonymous agency — we&apos;re Abdoulie, Sarjo and Pa Louie, building with integrity, transparency and continuous learning.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {t:'Built Around Your Goals', d:'We start with your business objectives, not templates. Scope is clear, transparent and documented.'},
              {t:'Designed for Real People', d:'Accessible, fast, mobile-first interfaces with thoughtful UX that respects your users.'},
              {t:'Created to Grow With You', d:'Clean code, documented architecture, and maintenance that keeps you safe as you scale.'},
            ].map(c=>(
              <div key={c.t} className="rounded-[20px] border bg-lightgray p-7">
                <h3 className="font-semibold">{c.t}</h3><p className="mt-2 text-sm leading-6 text-slateMuted">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-[28px] lg:text-[40px] font-bold tracking-tight max-w-[520px]">Services that take you from idea to launch.</h2>
            <Link href="/services" className="text-sm font-semibold text-electric hover:underline">View all services →</Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0,6).map(s=>(
              <Link key={s.slug} href={`/services#${s.slug}`} className="group rounded-[20px] border bg-white p-7 hover:shadow-soft transition">
                <div className="h-10 w-10 rounded-full bg-paleblue flex items-center justify-center text-lg">{s.icon}</div>
                <h3 className="mt-4 font-semibold group-hover:text-electric">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slateMuted">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-[28px] lg:text-[36px] font-bold tracking-tight">Featured Work — clearly labeled concept & demo projects.</h2>
          <p className="mt-3 max-w-2xl text-sm text-slateMuted">We never claim fictional work as client work. Until real projects are launched, these are concept designs used to demonstrate our approach.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {projects.slice(0,3).map(p=>(
              <div key={p.slug} className="rounded-[20px] overflow-hidden border bg-white">
                <div className={`h-44 bg-gradient-to-br ${p.imageGradient}`}/>
                <div className="p-6">
                  <div className="flex items-center gap-2"><span className="text-[11px] font-semibold tracking-widest px-2 py-1 rounded-full bg-paleblue text-electric">{p.category}</span><span className="text-[11px] font-semibold tracking-widest px-2 py-1 rounded-full bg-gray-100">{p.typeLabel}</span></div>
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slateMuted leading-6">{p.overview}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/work" className="mt-8 inline-flex h-11 px-6 items-center rounded-full border bg-white text-sm font-semibold">See all projects</Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <h2 className="text-[28px] lg:text-[40px] font-bold tracking-tight">Our process — simple, transparent, collaborative.</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {k:'01', t:'Discover', d:'Understand your needs, users and business goals.'},
              {k:'02', t:'Plan', d:'Define features, scope, timelines and milestones.'},
              {k:'03', t:'Build', d:'Design, develop, test with clear communication.'},
              {k:'04', t:'Launch & Support', d:'Deploy, monitor, improve and maintain.'},
            ].map(s=>(
              <div key={s.k} className="rounded-[20px] border p-7">
                <div className="text-[12px] font-bold tracking-widest text-electric">{s.k}</div>
                <h3 className="mt-2 font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-slateMuted leading-6">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-navy text-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[30px] lg:text-[44px] font-bold tracking-tight leading-[0.95]">Why choose AspireTech?</h2>
            <p className="mt-4 text-white/60 leading-7">Clear communication, thoughtful design, dependable engineering, transparent scopes, and solutions built around client needs — not hype.</p>
          </div>
          <ul className="space-y-4 text-[14px] leading-6 text-white/80">
            <li className="flex gap-3"><span className="mt-1 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">✓</span>Honest timelines and documented scope — no surprise fees.</li>
            <li className="flex gap-3"><span className="mt-1 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">✓</span>Accessible, performant UI with clean, maintainable code.</li>
            <li className="flex gap-3"><span className="mt-1 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">✓</span>Security best practices, backups and performance monitoring.</li>
            <li className="flex gap-3"><span className="mt-1 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">✓</span>Based in The Gambia, working with businesses worldwide.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-[32px] bg-gradient-to-br from-navy to-[#1e293b] p-8 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-electric/20 blur-[80px] rounded-full"/>
            <h2 className="relative text-[30px] lg:text-[48px] font-bold tracking-tight max-w-[520px] leading-[0.95]">Have an Idea? Let&apos;s Make It Real.</h2>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link href="/start-project" className="h-[52px] inline-flex items-center rounded-full bg-electric px-7 text-sm font-semibold text-white">Start a Project</Link>
              <Link href="/book" className="h-[52px] inline-flex items-center rounded-full bg-white text-navy px-7 text-sm font-semibold">Book an Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
