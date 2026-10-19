import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-7xl font-black tracking-tight">404</h1>
        <p className="mt-4 text-lg font-semibold">Page not found</p>
        <p className="mt-2 text-sm text-slateMuted max-w-md">The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to building.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="h-11 px-6 inline-flex items-center rounded-full bg-electric text-white text-sm font-semibold">Go Home</Link>
          <Link href="/services" className="h-11 px-6 inline-flex items-center rounded-full border text-sm font-semibold">Our Services</Link>
        </div>
      </div>
    </div>
  );
}
