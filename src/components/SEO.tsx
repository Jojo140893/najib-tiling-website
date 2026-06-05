import Script from "next/script";

export default function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NJ Pro Tiling",
    "image": "https://njprotiling.com.au/logo.jpg",
    "@id": "https://njprotiling.com.au/#business",
    "url": "https://njprotiling.com.au",
    "telephone": "+61468372835",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sydney Metro Area",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8688,
      "longitude": 151.2093
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "07:00",
        "closes": "17:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/njprotiling",
      "https://www.instagram.com/njprotiling"
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Sydney Metropolitan Area"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tiling Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Tiling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wall Tiling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Renovations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Waterproofing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Splashbacks"
          }
        }
      ]
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
