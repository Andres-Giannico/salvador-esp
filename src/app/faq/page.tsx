import { Metadata } from "next";
import FAQClientPage from "./page.client";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/faq",
  title: "Preguntas frecuentes | Salvador Ibiza",
  description:
    "Respuestas sobre excursiones día y atardecer, charters privados, precios todo incluido, puntos embarque y seguridad antes de navegar Salvador Ibiza.",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué excursiones en barco ofrecéis en Ibiza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excursiones diurnas y al atardecer compartidas, y charters privados personalizados, con tripulación profesional, material náutico y restauración/bebidas según producto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto duran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Habitualmente tres horas las excursiones día y tarde-alta; charters privados suelen pactarse desde tres horas mínimo hasta jornadas mayores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde embarcamos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puerto de Sant Antoni — confirmamos muelle bloque horario cuando queda garantizada plaza.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye habitualmente la tarifa?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tripulación, combustible dentro de cada producto, bar abierto en el nivel anunciado (refrescos, cervezas, sangrías casa, copas selección temporada), gastronomía fría/tropical de cortesía, material paddle-kayaks-según especificaciones página reserva y equipo snorkel tamaños disponibles temporada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo reservo?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Lo habitual es hacerlo por la página web mediante los widgets autorizados: recibirás voucher con mapa/link del punto encuentro oficial y recordatorios fecha concreta entrada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mal tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "El capitán pospone zarpe si seguridad así lo marca; buscamos alternativa día libre temporada o reposición dineraria contractual según plataforma pago cuando no haya fecha sustitutiva.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClientPage />
    </>
  );
}
