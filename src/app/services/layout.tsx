import type { Metadata } from "next";

const BASE = "https://njprotiling.com";

export const metadata: Metadata = {
  title: "Tiling Services in Melbourne — Floor, Wall, Bathroom & Waterproofing",
  description:
    "Professional tiling services across Melbourne: floor & wall tiling, bathroom renovations, kitchen splashbacks, outdoor & patio tiling, waterproofing (AS 3740) and tile repairs.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Tiling Services in Melbourne | NJ Pro Tiling",
    description:
      "Floor & wall tiling, bathroom renovations, splashbacks, outdoor tiling, waterproofing and repairs across Melbourne.",
    url: `${BASE}/services`,
  },
};

const SERVICES: { name: string; description: string }[] = [
  { name: "Bathroom Tiling & Renovations", description: "Complete bathroom transformations with curbless showers, custom niches, correct floor falls and compliant wet-area finishes." },
  { name: "Floor Tiling", description: "Living space, hallway and bedroom floor tiling with large-format levelling systems, acoustic underlays and expansion joints." },
  { name: "Wall Tiling", description: "Feature walls, laundries and accent panels with laser-guided alignment, subway and mosaic formats and premium trim profiles." },
  { name: "Kitchen Splashbacks", description: "Mosaic, subway, herringbone and large-format porcelain splashbacks with precise cuts around outlets and sanitary silicone seals." },
  { name: "Outdoor & Patio Tiling", description: "Slip-resistant outdoor and patio tiling with correct falls for drainage, weather-proof grouts and efflorescence prevention." },
  { name: "Waterproofing (AS 3740)", description: "Certified wet-area waterproofing to Australian Standard AS 3740 with premium membranes and waterproofing certificates." },
  { name: "Tile Repair & Regrouting", description: "Grout removal and epoxy regrouting, cracked tile replacement and sanitary silicone refreshes to restore old tiling." },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": SERVICES.map((s) => ({
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.name,
    category: "Tiling",
    provider: { "@type": "HomeAndConstructionBusiness", "@id": `${BASE}/#business`, name: "NJ Pro Tiling" },
    areaServed: { "@type": "City", name: "Melbourne" },
    url: `${BASE}/services`,
  })),
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}
