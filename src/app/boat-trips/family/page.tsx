import { esPageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { familyBoatTripFaqs } from "@/lib/topic-faqs";
import FamilyBoatTripsClientPage from "./page.client";

export const metadata = esPageMetadata({
  title: "Mejores excursiones en barco para familias Ibiza (3 h) | Niños y todas las edades",
  description:
    "¿Buscas la mejor excursión en barco para familias en Ibiza? Salvador Ibiza ofrece cruceros todo incluido de 3 horas con paddle, snorkel, chalecos y tapas aptas para niños desde Sant Antoni.",
  path: "/boat-trips/family",
  keywords:
    "mejor excursión barco familia Ibiza, excursiones barco niños Ibiza, barco familiar Ibiza, excursión con niños Baleares, snorkel seguro niños Sant Antoni",
});

const faqSchema = buildFaqPageSchema(familyBoatTripFaqs);

export default function FamilyBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FamilyBoatTripsClientPage />
    </>
  );
}
