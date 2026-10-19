import React from 'react';
export function Section({ id, children, className='', dark=false }: { id?: string; children: React.ReactNode; className?: string; dark?: boolean }) {
  return <section id={id} className={`${dark ? 'bg-navy text-white' : 'bg-white'} ${className}`}>{children}</section>
}
export function Container({ children, className='' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
}
