import Link from 'next/link';
export const metadata = { title: 'About Us' };
export default function About() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-widest text-electric">ABOUT ASPIRETECH</p>
          <h1 className="mt-4 text-[36px] lg:text-[52px] font-bold tracking-tight leading-[0.95]">Three founders. One shared ambition to aim higher through technology.</h1>
          <p className="mt-6 text-[16px] leading-7 text-slateMuted">AspireTech represents the shared ambition of Abdoulie, Sarjo and Pa Louie — “Aspire” is ambition, vision and progress. “Tech” is software engineering, digital innovation and practical problem solving.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div><h2 className="text-xl font-semibold">Our Story</h2><p className="mt-3 text-sm leading-7 text-slateMuted">We started AspireTech because we saw talented businesses and entrepreneurs with great ideas but limited access to reliable, affordable technology partners who communicate clearly and deliver with integrity. We decided to build the partner we wanted to have — a team that listens first, plans honestly, and builds responsibly.</p></div>
            <div><h2 className="text-xl font-semibold">Why we started AspireTech</h2><p className="mt-3 text-sm leading-7 text-slateMuted">To make technology accessible to businesses of all sizes, help startups turn ideas into digital products, and create a company culture based on continuous learning, collaboration and quality.</p></div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border bg-lightgray p-6"><h3 className="font-semibold">Mission</h3><p className="mt-2 text-sm text-slateMuted leading-6">To transform ideas into practical, reliable, and innovative digital solutions that help businesses grow.</p></div>
              <div className="rounded-2xl border bg-lightgray p-6"><h3 className="font-semibold">Vision</h3><p className="mt-2 text-sm text-slateMuted leading-6">To become a trusted technology partner known for building useful digital products, delivering excellent service, and making technology accessible.</p></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[24px] bg-navy p-8 text-white"><h3 className="font-semibold">Our Values</h3><ul className="mt-4 space-y-3 text-sm text-white/70 list-disc pl-5"><li>Innovation and creativity</li><li>Integrity and transparency</li><li>Quality and reliability</li><li>Collaboration and teamwork</li><li>Continuous learning</li><li>Customer satisfaction</li><li>Long-term growth</li></ul></div>
            <div className="rounded-[24px] border p-8"><h3 className="font-semibold">Our Approach</h3><p className="mt-3 text-sm leading-6 text-slateMuted">We solve problems by: listening to understand context, defining measurable outcomes, designing the simplest usable solution, building with security and accessibility in mind, testing with real users, and supporting after launch.</p></div>
            <div className="rounded-[24px] border p-8"><h3 className="font-semibold">Our Commitment to Clients</h3><p className="mt-3 text-sm leading-6 text-slateMuted">You own your website and source code per your project agreement. We provide clear proposals, milestone payments, documented scope changes, backups, and respectful communication. No fake testimonials, no inflated claims.</p></div>
          </div>
        </div>

        <div className="mt-16 rounded-[28px] bg-gradient-to-br from-paleblue to-white border p-8 lg:p-10">
          <h3 className="text-2xl font-bold tracking-tight">Three Minds. One Vision.</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slateMuted">We bring our ideas, skills, and ambitions together to create technology that solves real problems. AspireTech is built on collaboration, continuous learning, and a shared commitment to quality.</p>
          <Link href="/founders" className="mt-6 inline-flex h-11 px-6 items-center rounded-full bg-navy text-white text-sm font-semibold">Meet the Founders</Link>
        </div>
      </div>
    </div>
  );
}
