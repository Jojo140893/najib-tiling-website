import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Real Melbourne Tiling Projects & Videos",
  description:
    "See real NJ Pro Tiling projects across Melbourne — bathrooms, splashbacks, floors and waterproofing — with on-site videos showcasing our craftsmanship.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
