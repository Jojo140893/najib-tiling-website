import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Real Melbourne Tiling Projects & Videos",
  description:
    "See real NJ Pro Tiling projects across Melbourne — bathrooms, splashbacks, floors and waterproofing — with on-site videos showcasing our craftsmanship.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Tiling Portfolio | NJ Pro Tiling Melbourne",
    description:
      "Real Melbourne tiling projects with on-site videos — bathrooms, splashbacks, floors and waterproofing.",
    url: "https://njprotiling.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
