import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { esPageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { sunsetBoatTripFaqs } from '@/lib/topic-faqs';
import SunsetBoatTripsClientPage from './page.client';

export const metadata = esPageMetadata({
  title: 'Excursiones en barco al atardecer Ibiza | Cruceros vespertinos',
  description:
    'Vive el atardecer en Ibiza desde el mar con Salvador Ibiza: salidas de 3 h, bebidas y tapas, bahía y costa oeste. Reserva tu crucero vespertino mediterráneo.',
  path: '/boat-trips/sunset',
  keywords:
    'atardecer Ibiza barco, excursión atardecer, puesta de sol mar Ibiza, barco atardecer Sant Antoni, crucero vespertino Ibiza',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  ogImageAlt: 'Puesta de sol durante excursión en barco en Ibiza con Salvador Ibiza',
});

const sunsetBoatTripsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Excursiones en barco al atardecer Ibiza con Salvador Ibiza',
  description:
    'Cruceros vespertinos de 3 horas desde Sant Antoni con bebidas, tapas y vistas al atardecer en el Mediterráneo.',
  image: publicAssetUrl('/images/blog/sunset-sailing-ibiza.jpg'),
  brand: {
    '@type': 'Brand',
    name: 'Salvador Ibiza',
  },
  offers: {
    '@type': 'Offer',
    url: absoluteUrl('/boat-trips/sunset'),
    priceCurrency: 'EUR',
    price: '80',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '80',
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: 'true',
    },
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '278',
  },
  duration: 'PT3H',
};

const sunsetFaqSchema = buildFaqPageSchema(sunsetBoatTripFaqs);

export default function SunsetBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetBoatTripsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetFaqSchema) }}
      />
      <SunsetBoatTripsClientPage />
    </>
  );
}
