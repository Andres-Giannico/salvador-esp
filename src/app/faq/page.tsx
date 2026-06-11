import { Metadata } from "next";
import FAQClientPage from "./page.client";
import { esPageMetadata } from "@/lib/page-meta";
import { discoverabilityFaqs } from "@/lib/discoverability-faqs";
import {
  familyBoatTripFaqs,
  sunsetBoatTripFaqs,
  snorkelingBoatTripFaqs,
} from "@/lib/topic-faqs";

export const metadata: Metadata = esPageMetadata({
  path: "/faq",
  title: "Preguntas frecuentes | Excursiones en barco Ibiza",
  description:
    "Respuestas sobre las mejores excursiones en barco en Ibiza para familias, cruceros al atardecer, barcos de madera tradicional y reservas con Salvador Ibiza.",
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
        text: "Ofrecemos excursiones compartidas diurnas y al atardecer, y charters privados totalmente personalizados. Todas incluyen tripulación profesional, material náutico y restauración/bebidas según producto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto duran las excursiones de Salvador Ibiza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las excursiones diurnas y al atardecer suelen durar unas 3 horas cada una. La duración de los charters privados se adapta a tus preferencias con un mínimo de 3 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué rutas recorren las excursiones de Salvador Ibiza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las excursiones compartidas exploran la costa oeste (hacia Cala Comte) o la costa norte (hacia Sa Foradada), con calas como Cala Gració y Cala Salada. El capitán elige la mejor ruta cada día según condiciones. En charters privados, el itinerario es totalmente personalizable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde es el punto de encuentro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El punto de encuentro habitual es el puerto de Sant Antoni, Ibiza. La ubicación exacta y la hora de embarque se confirman al cerrar la reserva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el precio de las excursiones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las excursiones compartidas incluyen capitán, tripulación, combustible, bar abierto ilimitado (refrescos, cerveza, vino, cava, sangría, agua), tapas españolas y fruta fresca, y uso de paddle, kayaks y equipo de snorkel. Los charters privados tienen inclusiones similares con opciones de mejora.",
      },
    },
    {
      "@type": "Question",
      name: "¿Podemos traer comida y bebida propia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes traer comida a bordo, especialmente en charters privados. No se permiten bebidas de fuera porque ofrecemos un generoso bar abierto con varias opciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo reservo una excursión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos reservar online en nuestra web mediante los widgets con disponibilidad en tiempo real. Tras reservar recibirás un voucher con todos los detalles, incluido punto de encuentro y horario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la capacidad máxima del barco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros barcos pueden acoger hasta 35 pasajeros en excursiones compartidas. Consulta las páginas de cada producto o contáctanos para detalles específicos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay baño a bordo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, nuestros barcos están equipados con aseo marino (WC) para tu comodidad durante la excursión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluyen deportes acuáticos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Todas nuestras excursiones incluyen 15 tablas de paddle, 2 kayaks y equipo completo de snorkel para disfrutar en las paradas de baño.",
      },
    },
    {
      "@type": "Question",
      name: "¿Son seguras para niños?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Por supuesto. Nuestros barcos son seguros para familias y niños. Disponemos de chalecos en distintas tallas y la tripulación prioriza la seguridad. Indícanos las edades al reservar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debo llevar a la excursión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos bañador, toalla, protector solar, gorra, gafas de sol y cámara. Si eres propenso al mareo, considera medicación preventiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si hay mal tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La seguridad es lo primero. Si las condiciones no son seguras (decisión del capitán), intentaremos reprogramar. Si no es posible, ofrecemos reembolso completo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuestan las excursiones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excursiones diurnas y al atardecer: 80 € por adulto, 45 € niños 6–12 años, gratis bebés 0–5 años. Charters privados desde 1.350 €. Todo incluido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es mejor reservar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operamos de mayo a octubre. Reserva con antelación en julio y agosto. Excursiones diurnas suelen salir a las 14:00 y al atardecer sobre las 18:30 en temporada alta.",
      },
    },
    ...discoverabilityFaqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
    ...familyBoatTripFaqs.slice(0, 5).map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
    })),
    ...sunsetBoatTripFaqs.slice(0, 3).map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
    })),
    ...snorkelingBoatTripFaqs.slice(0, 3).map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
    })),
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
