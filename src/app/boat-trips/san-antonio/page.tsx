import SanAntonioBoatTripsClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';
import { absoluteUrl, publicAssetUrl } from '@/config/site';

export const metadata = esPageMetadata({
  title: 'Excursiones barco Sant Antoni Ibiza | Bahía y puesta del sol | Salvador Ibiza',
  description:
    'Salidas desde la bahía de Sant Antoni: excursiones diurnas y al atardecer con Salvador Ibiza. Aguas tranquilas, calas cercanas y vistas al ocaso. Desde 80 €.',
  path: '/boat-trips/san-antonio',
  keywords:
    'barco sant antoni ibiza, excursion bahia sant antoni, sunset cafe del mar vista mar salvador grupo paddle snorkel sant antonio',
  ogImage: '/images/optimized/ibiza-sunset-boat-trip-salvador.webp',
  ogImageAlt: 'Barco Salvador al atardecer en bahía Sant Antoni Ibiza',
});

function sanAntonioBoatTripsJsonLd() {
  const pageUrl = absoluteUrl('/boat-trips/san-antonio');
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Excursiones en barco desde Sant Antoni Ibiza | Salvador Ibiza',
    description:
      'Excursiones grupo desde Sant Antoni: rutas día y ocaso por la bahía y costa oeste, bebidas y tapas en modalidad anunciada, paddle y snorkel.',
    image: publicAssetUrl('/images/barcodesdedron.jpg'),
    brand: { '@type': 'Brand', name: 'Salvador Ibiza' },
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'EUR',
      price: '80',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '80',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '278',
    },
    duration: 'PT3H',
    location: {
      '@type': 'Place',
      name: 'Bahía Sant Antoni de Portmany, Ibiza',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sant Antoni de Portmany',
        addressRegion: 'Illes Balears',
        addressCountry: 'ES',
      },
    },
  };
}

export default function SanAntonioBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sanAntonioBoatTripsJsonLd()) }}
      />
      <SanAntonioBoatTripsClientPage />
    </>
  );
}
