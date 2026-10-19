import Link from 'next/link';
export const metadata = { title: 'Our Founders' };

const founders = [
  { name: 'Abdoulie', role: 'Technical Lead / Software Engineering (placeholder)', bio: 'Passionate about building reliable, maintainable software and solving real problems with clean engineering. Role placeholder until founders confirm responsibilities.', skills: ['Software Architecture','TypeScript','Next.js','PostgreSQL'] },
  { name: 'Sarjo', role: 'Design, Product Strategy / User Experience (placeholder)', bio: 'Focused on human-centered product strategy and interfaces that are simple, accessible and delightful. Role placeholder until founders confirm.', skills: ['Product Strategy','UI/UX','Wireframing','User Research'] },
  { name: 'Pa Louie', role: 'Operations, Business Development / Client Relations (placeholder)', bio: 'Driven by client success, clear communication, and long-term partnerships. Ensures projects stay transparent and on track. Role placeholder until founders confirm.', skills: ['Client Relations','Operations','Business Development','Communication'] },
];

export default function FoundersPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-widest text-electric">OUR FOUNDERS</p>
        <h1 className="mt-4 text-[36px] lg:text-[52px] font-bold tracking-tight leading-[0.95] max-w-3xl">Three Minds. One Vision.</h1>
        <p className="mt-5 max-w-3xl text-[16px] leading-7 text-slateMuted">We bring our ideas, skills, and ambitions together to create technology that solves real problems. AspireTech is built on collaboration, continuous learning, and a shared commitment to quality.</p>
        <p className="mt-3 text-xs text-slateMuted">Roles are editable placeholders. No qualifications, job titles, work histories or certifications are invented. Replace with verified info when founders agree.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {founders.map(f=>(
            <div key={f.name} className="rounded-[24px] border bg-white p-7">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-paleblue to-electric/30 flex items-center justify-center text-xl font-bold text-navy">{f.name[0]}</div>
              <h3 className="mt-5 text-lg font-semibold">{f.name}</h3>
              <p className="mt-1 text-xs font-medium text-electric leading-5">{f.role}</p>
              <p className="mt-4 text-sm leading-6 text-slateMuted">{f.bio}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{f.skills.map(s=><span key={s} className="text-[11px] px-2 py-1 rounded-full bg-lightgray">{s}</span>)}</div>
              <div className="mt-6 text-xs text-slateMuted">LinkedIn / professional links: add in config when supplied.</div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] bg-navy p-8 lg:p-10 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div><h2 className="text-2xl font-bold">Work With Our Team</h2><p className="mt-2 text-sm text-white/60 max-w-xl">We&apos;re equal partners. Whether you need a website, web app, mobile app or security review — we&apos;ll plan your next step together.</p></div>
          <div className="flex gap-3"><Link href="/start-project" className="h-11 px-6 inline-flex items-center rounded-full bg-electric text-white text-sm font-semibold">Start a Project</Link><Link href="/book" className="h-11 px-6 inline-flex items-center rounded-full bg-white text-navy text-sm font-semibold">Book a Call</Link></div>
        </div>
      </div>
    </div>
  );
}
