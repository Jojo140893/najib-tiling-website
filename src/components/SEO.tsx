/**
 * Site-wide LocalBusiness structured data (server-rendered JSON-LD).
 * Rendered once from the root layout so it appears in the initial HTML on
 * every page (more reliable for crawlers than client-injected scripts).
 *
 * TODO (owner): replace the placeholders below with verified data —
 *   - real street address / postcode (or keep locality-only for a service-area business)
 *   - real social profile URLs in `sameAs`
 *   - keep the reviews in sync with what is shown on the site
 */

const BASE = "https://njprotiling.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE}/#business`,
  name: "NJ Pro Tiling",
  description:
    "Licensed and fully insured tilers providing premium floor & wall tiling, bathroom renovations, kitchen splashbacks, waterproofing and tile repairs across Melbourne.",
  url: BASE,
  image: `${BASE}/og-image.jpg`,
  logo: `${BASE}/og-image.jpg`,
  telephone: "+61468372835",
  email: "info@njprotiling.com.au",
  priceRange: "$$",
  currenciesAccepted: "AUD",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: { "@type": "City", name: "Melbourne" },
  geo: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 144.9631 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "17:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tiling Services",
    itemListElement: [
      "Floor Tiling",
      "Wall Tiling",
      "Bathroom Renovations",
      "Kitchen Splashbacks",
      "Outdoor & Patio Tiling",
      "Waterproofing (AS 3740)",
      "Tile Repair & Regrouting",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Daniel K." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Najib did an incredible job tiling our bathroom. The levelling is absolutely perfect, and the custom niches look fantastic. Highly recommend NJ Pro Tiling!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Very professional team. They turned up exactly on time, laid down protective sheets, and finished our splashback in a day. Spotless clean-up afterwards.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marcus L." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Flawless outdoor tiling for our new patio. NJ Pro Tiling ensured correct falls for drainage. Will be using them for our upcoming laundry renovation.",
    },
  ],
};

export default function SEO() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
