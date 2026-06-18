import { esPageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { snorkelingBoatTripFaqs } from "@/lib/topic-faqs";
import { buildProductSchema } from "@/lib/product-schema";
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

const faqSchema = buildFaqPageSchema(snorkelingBoatTripFaqs);

export default async function SnorkelingBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Excursiones snorkel en barco Ibiza con Salvador Ibiza",
    description:
      "Snorkel con equipo profesional en aguas mediterráneas; indicaciones de seguridad y paradas adaptadas al grupo.",
    path: "/boat-trips/snorkeling",
    price: "80",
    image: "/images/boat/parejasnorkeling.webp",
    duration: "PT3H",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnorkelingBoatTripsClientPage />
    </>
  );
}
