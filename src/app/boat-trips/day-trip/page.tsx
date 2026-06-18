import DayTripClientPage from './page.client';
import Script from 'next/script';
import { esPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = esPageMetadata({
  path: '/boat-trips/day-trip',
  title: 'Excursión diurna en barco Ibiza todo incluido',
  description:
    'Aventura de 3 h en Ibiza: bar abierto ilimitado, tapas españolas, 15 tablas paddle, snorkel y calas vírgenes. Desde 80 €. Reserva aquí.',
  keywords:
    'excursión barco Ibiza, día en barco, todo incluido Ibiza, paddle surf barco Ibiza',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
  ogImageAlt: 'Excursión diurna en barco Salvador Ibiza',
});

export default async function DayTripPage() {
  const dayTripJsonLd = await buildProductSchema({
    name: 'Excursión diurna en barco todo incluido Ibiza — Salvador Ibiza',
    description:
      'Excursión diurna todo incluido en Ibiza con capitán. 3 horas de navegación con catering, bebidas, paddle surf y snorkel incluidos.',
    path: '/boat-trips/day-trip',
    price: '80.00',
    image: '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
    includeRating: true,
  });

  return (
    <>
      <Script
        id="day-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dayTripJsonLd) }}
      />
      <DayTripClientPage />
    </>
  );
}
