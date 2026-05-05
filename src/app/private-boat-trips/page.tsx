import Script from 'next/script';
import PrivateBoatTripsClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';
import { esPageMetadata } from '@/lib/page-meta';
import { absoluteUrl, publicAssetUrl } from '@/config/site';

export const metadata = esPageMetadata({
  title: 'Charters privados en Ibiza hasta 35 personas',
  description:
    'Barco Salvador solo para tu grupo: rutas a medida, tripulación profesional, servicio tipo todo incluido anunciado y deportes acuáticos. Precios desde 1.350 € según temporada. Reserva charter privado.',
  path: '/private-boat-trips',
  keywords:
    'charter privado Ibiza, barco exclusivo Sant Antoni, evento empresa mar, grupo familiar barco Baleares Salvador',
  ogImage: '/images/boat/aereabarco2.webp',
  ogImageAlt: 'Vista aérea del Salvador Ibiza en charter privado',
});

function privateBoatTripsJsonLd() {
  const pageUrl = absoluteUrl('/private-boat-trips');
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Charter privado en barco Ibiza — Salvador Ibiza',
    description:
      'Excursiones privadas en Ibiza para hasta 35 invitados. Incluye capitán, equipo acuático (paddle, kayak, snorkel) y catering según modalidad contratada.',
    image: publicAssetUrl('/images/boat/aereabarco2.webp'),
    brand: {
      '@type': 'Brand',
      name: 'Salvador Ibiza',
    },
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: 'EUR',
      price: '1350',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '1350',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '278',
    },
  };
}

const getIconName = (icon: any): string => {
  if (icon === FiUsers) return 'FiUsers';
  if (icon === FiGift) return 'FiGift';
  if (icon === FiStar) return 'FiStar';
  if (icon === FiCamera) return 'FiCamera';
  if (icon === FiCalendar) return 'FiCalendar';
  if (icon === FiBriefcase) return 'FiBriefcase';
  return 'FiHelpCircle';
};

const perfectForItems = [
  { icon: getIconName(FiUsers), title: 'Grupos y familias', description: 'Cubierta amplia para todos.', color: 'text-blue-500' },
  {
    icon: getIconName(FiGift),
    title: 'Celebraciones',
    description: 'Cumpleaños, aniversarios y días especiales.',
    color: 'text-pink-500',
  },
  {
    icon: getIconName(FiStar),
    title: 'Ocasiones únicas',
    description: 'Propuestas, eventos diferentes.',
    color: 'text-yellow-500',
  },
  {
    icon: getIconName(FiCamera),
    title: 'Sesiones foto / vídeo',
    description: 'Fondos espectaculares garantizados.',
    color: 'text-purple-500',
  },
  {
    icon: getIconName(FiCalendar),
    title: 'Fiestas pre/post boda',
    description: 'Relájate antes o después del gran día.',
    color: 'text-orange-500',
    href: '/weddings',
  },
  {
    icon: getIconName(FiBriefcase),
    title: 'Eventos empresa',
    description: 'Team building y clientes invitados.',
    color: 'text-teal-500',
    href: '/corporate-events',
  },
];

export default function PrivateBoatTripsPage() {
  return (
    <>
      <Script
        id="private-boat-trips-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privateBoatTripsJsonLd()) }}
      />
      <PrivateBoatTripsClientPage perfectFor={perfectForItems} />
    </>
  );
}
