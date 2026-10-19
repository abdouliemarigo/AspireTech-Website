'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/founders', label: 'Our Founders' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? 'bg-white/90 glass border-gray-200 shadow-soft' : 'bg-white border-transparent'}`}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/aspiretech-logo.png" alt="AspireTech logo" width={140} height={48} className="h-9 w-auto object-contain" priority />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map(i => {
            const active = pathname === i.href || (i.href !== '/' && pathname?.startsWith(i.href));
            return <Link key={i.href} href={i.href} className={`text-[14px] font-medium tracking-[-0.01em] transition-colors ${active ? 'text-electric' : 'text-navy/80 hover:text-navy'}`}>{i.label}</Link>
          })}
          <Link href="/start-project" className="ml-2 inline-flex h-10 items-center justify-center rounded-full bg-electric px-5 text-sm font-semibold text-white shadow-soft hover:bg-blue-600 transition">Let&apos;s Build Your Website</Link>
        </nav>
        <button aria-label="Open menu" className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200" onClick={() => setOpen(v=>!v)}>
          <div className="space-y-1.5"><div className="h-0.5 w-5 bg-navy"/><div className="h-0.5 w-5 bg-navy"/><div className="h-0.5 w-5 bg-navy"/></div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-white px-5 py-6">
          <div className="flex flex-col gap-4">
            {nav.map(i => <Link key={i.href} href={i.href} onClick={()=>setOpen(false)} className="text-[16px] font-medium">{i.label}</Link>)}
            <Link href="/start-project" onClick={()=>setOpen(false)} className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-electric px-6 text-sm font-semibold text-white">Let&apos;s Build Your Website</Link>
            <Link href="/book" onClick={()=>setOpen(false)} className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 px-6 text-sm font-semibold">Book an Appointment</Link>
          </div>
        </div>
      )}
    </header>
  );
}
