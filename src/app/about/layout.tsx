import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Melbourne's Trusted Tiling Specialists",
  description:
    "Meet NJ Pro Tiling — licensed & fully insured tilers delivering precision floor & wall tiling, certified waterproofing and bathroom renovations across Melbourne.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
