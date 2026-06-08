import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Sydney's Trusted Tiling Specialists",
  description:
    "Meet NJ Pro Tiling — NSW licensed tilers (Lic #392817C) delivering precision floor & wall tiling, certified waterproofing and bathroom renovations across Sydney.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
