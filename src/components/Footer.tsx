import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/aspiretech-logo.png" alt="AspireTech" width={150} height={52} className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="mt-3 text-sm font-semibold tracking-widest text-white/90">Dream. Build. Grow.</p>
            <p className="mt-4 text-[14px] leading-6 text-white/60 max-w-[320px]">AspireTech transforms ideas into practical, reliable digital solutions that help businesses grow. Based in The Gambia, serving clients worldwide.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/founders" className="hover:text-white">Our Founders</Link></li>
              <li><Link href="/work" className="hover:text-white">Our Work</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="/services#website-development" className="hover:text-white">Website Development</Link></li>
              <li><Link href="/services#web-apps" className="hover:text-white">Web Applications</Link></li>
              <li><Link href="/services#mobile-apps" className="hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/services#ui-ux" className="hover:text-white">UI/UX Design</Link></li>
              <li><Link href="/services#cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/services#consulting" className="hover:text-white">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.location}</li>
              <li><Link href="/book" className="hover:text-white underline">Book an Appointment</Link></li>
              <li><Link href="/start-project" className="hover:text-white underline">Let&apos;s Build Your Website</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              {Object.entries(siteConfig.socials).slice(0,4).map(([k,v])=>(
                <a key={k} href={v} target="_blank" rel="noreferrer" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-xs uppercase tracking-widest">{k[0]}</a>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40">Social URLs are centralized in src/lib/config.ts. Replace placeholders with verified accounts before launch.</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50">
          <p>© {year} AspireTech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
