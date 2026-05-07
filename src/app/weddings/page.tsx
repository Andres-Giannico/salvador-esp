import WeddingsClientPage from './page.client';
import { getSiteUrl } from '@/config/site';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  path: '/weddings',
  title: 'Bodas en barco en Ibiza | Ceremonias y celebraciones en el mar',
  description:
    'Boda en el mar en Ibiza: ceremonias íntimas en el barco tradicional Salvador, atardeceres espectaculares y servicio tipo todo incluido anunciado. Solicita disponibilidad para tu gran día.',
  keywords:
    'boda barco Ibiza, ceremonia en el mar, boda romántica Ibiza, elopement Ibiza, paquetes boda, boda íntima, charter privado Salvador Ibiza, celebración en barco',
  ogImage: '/images/boat/private-new/tapasycavapopabarco_1.webp',
  ogImageAlt: 'Ambientación elegante con cava y catering para celebración en Salvador Ibiza',
});

// Wedding Schema for better SEO
const weddingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ceremonias y bodas en barco en Ibiza",
  "description":
    "Ceremonias y celebraciones románticas a bordo del barco tradicional Salvador Ibiza: grupos íntimos y charter privado hasta 36 invitados.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Salvador Ibiza",
    "url": getSiteUrl(),
  },
  "areaServed": {
    "@type": "Place",
    "name": "Ibiza, Islas Baleares, España",
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Charter privado boda (temporada baja)",
      "description": "Hasta 36 invitados, charter 4 h, bar abierto estándar y servicios según contratación.",
      "price": "1350",
      "priceCurrency": "EUR",
    },
    {
      "@type": "Offer",
      "name": "Charter privado boda (temporada alta)",
      "description": "Junio a septiembre; mismas prestaciones base con tarifa de temporada.",
      "price": "1650",
      "priceCurrency": "EUR",
    },
  ],
  "serviceType": "Ceremonia y celebración en barco",
  "category": "Servicios para bodas",
  "audience": {
    "@type": "Audience",
    "name": "Parejas que planean bodas destino o íntimas",
  },
};

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingSchema) }}
      />
      <WeddingsClientPage />
    </>
  );
} 