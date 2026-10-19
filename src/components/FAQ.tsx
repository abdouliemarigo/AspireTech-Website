'use client';
import { useState } from 'react';
export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5">
      <button onClick={()=>setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-[16px] font-semibold">{q}</span>
        <span className="ml-4 h-8 w-8 inline-flex items-center justify-center rounded-full border">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-[14px] leading-6 text-slateMuted">{a}</p>}
    </div>
  );
}
