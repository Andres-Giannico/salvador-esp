import { absoluteUrl, publicAssetUrl } from "@/config/site";
import { esPageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { snorkelingBoatTripFaqs } from "@/lib/topic-faqs";
import SnorkelingBoatTripsClientPage from "./page.client";

export const metadata = esPageMetadata({
  title: "Mejores excursiones snorkel en barco Ibiza (3 h) | Equipo incluido",
  description:
    "Descubre la mejor excursión de snorkel en barco en Ibiza con Salvador Ibiza: equipo profesional, calas cristalinas, 2–3 paradas de baño y salidas todo incluido desde Sant Antoni.",
  path: "/boat-trips/snorkeling",
  keywords:
    "mejor excursión snorkel barco Ibiza, snorkel Ibiza barco, dónde hacer snorkel Ibiza, excursión snorkel Baleares, calas snorkel Ibiza",
  ogImage: "/images/boat/parejasnorkeling.webp",
  ogImageAlt: "Pareja haciendo snorkel en excursión en barco Ibiza",
});

const snorkelingBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Excursiones snorkel en barco Ibiza con Salvador Ibiza",
  description:
    "Snorkel con equipo profesional en aguas mediterráneas; indicaciones de seguridad y paradas adaptadas al grupo.",
  image: publicAssetUrl("/images/boat/parejasnorkeling.webp"),
  brand: { "@type": "Brand", name: "Salvador Ibiza" },
  offers: {
    "@type": "Offer",
    url: absoluteUrl("/boat-trips/snorkeling"),
    priceCurrency: "EUR",
    price: "80",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "80",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: "true",
    },
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "278",
  },
  duration: "PT3H",
};

const faqSchema = buildFaqPageSchema(snorkelingBoatTripFaqs);

export default function SnorkelingBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snorkelingBoatTripsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnorkelingBoatTripsClientPage />
    </>
  );
}
