import SunsetTripClientPage from './page.client';
import Script from 'next/script';
import { esPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = esPageMetadata({
  path: '/boat-trips/sunset-trip',
  title: 'Excursión atardecer Ibiza todo incluido',
  description:
    '🌅 Atardecer legendario desde el mar: crucero de ~3 h con bebidas ilimitadas, tapas, música y actividades. Café Mambo / del Mar. Desde 80 €. Reserva.',
  keywords:
    'excursión atardecer Ibiza, sunset boat trip, barco atardecer Café Mambo, tour compartido Salvador Ibiza',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  ogImageAlt: 'Atardecer en barco frente a la costa de Ibiza — Salvador',
});

export default async function SunsetTripPage() {
  const sunsetTripJsonLd = await buildProductSchema({
    name: 'Excursión en barco al atardecer Ibiza — Salvador Ibiza',
    description:
      'Excursión compartida al atardecer en Ibiza con capitán. ~3 h de navegación con catering, bebidas, paddle surf y snorkel según condiciones.',
    path: '/boat-trips/sunset-trip',
    price: '80.00',
    image: '/images/boat/sunset.png',
    includeRating: true,
  });

  return (
    <>
      <Script
        id="sunset-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetTripJsonLd) }}
      />
      <SunsetTripClientPage />
    </>
  );
}
