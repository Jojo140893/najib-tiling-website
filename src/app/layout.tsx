import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NJ Pro Tiling | Professional Wall & Floor Tilers Melbourne",
    template: "%s | NJ Pro Tiling"
  },
  description: "NJ Pro Tiling provides premium floor tiling, wall tiling, bathroom renovations, waterproofing, kitchen splashbacks, and tile repair services across Melbourne. Contact 0468 372 835 for a free quote.",
  metadataBase: new URL("https://njprotiling.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NJ Pro Tiling | Premium Tiling Services Melbourne",
    description: "Quality tiling with a professional finish. Bathrooms, splashbacks, waterproofing, floor & wall tiling in Melbourne. Call 0468 372 835.",
    url: "https://njprotiling.com",
    siteName: "NJ Pro Tiling",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NJ Pro Tiling — premium wall & floor tiling in Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJ Pro Tiling | Premium Tiling Services Melbourne",
    description: "Quality tiling with a professional finish across Melbourne. Call 0468 372 835.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <SEO />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

