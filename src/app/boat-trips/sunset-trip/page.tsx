import SunsetTripClientPage from './page.client';
import Script from 'next/script';
import { esPageMetadata } from '@/lib/page-meta';
import { absoluteUrl, publicAssetUrl } from '@/config/site';

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

function sunsetTripJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Excursión en barco al atardecer Ibiza — Salvador Ibiza',
    image: [publicAssetUrl('/images/optimized/ibiza-sunset-boat-trip-salvador.webp')],
    description:
      'Excursión compartida al atardecer en Ibiza con capitán. ~3 h de navegación con catering, bebidas, paddle surf y snorkel según condiciones.',
    brand: {
      '@type': 'Organization',
      name: 'Salvador Ibiza',
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl('/boat-trips/sunset-trip'),
      priceCurrency: 'EUR',
      price: '80.00',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-06-25',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.9',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Cliente verificado',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1198',
    },
  };
}

export default function SunsetTripPage() {
  return (
    <>
      <Script
        id="sunset-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetTripJsonLd()) }}
      />
      <SunsetTripClientPage />
    </>
  );
}
