import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: "AspireTech — Dream. Build. Grow.",
    template: "%s | AspireTech",
  },
  description: siteConfig.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aspiretech.gm",
  ),
  openGraph: {
    title: "AspireTech — Dream. Build. Grow.",
    description: siteConfig.description,
    type: "website",
    images: ["/aspiretech-logo.png"],
  },
  icons: { icon: "/aspiretech-logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
