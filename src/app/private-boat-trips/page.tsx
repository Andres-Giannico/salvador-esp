import Script from 'next/script';
import PrivateBoatTripsClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';
import { esPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = esPageMetadata({
  title: 'Charters privados en Ibiza hasta 35 personas',
  description:
    'Barco Salvador solo para tu grupo: rutas a medida, tripulación profesional, servicio tipo todo incluido anunciado y deportes acuáticos. Precios desde 1.350 € según temporada. Reserva charter privado.',
  path: '/private-boat-trips',
  keywords:
    'charter privado Ibiza, barco exclusivo Sant Antoni, evento empresa mar, grupo familiar barco Baleares Salvador',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-wide-aerial-view.webp',
  ogImageAlt: 'Vista aérea con dron del Salvador Ibiza en charter privado en Cala Comte',
});

const getIconName = (icon: typeof FiUsers): string => {
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

export default async function PrivateBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Charter privado en barco Ibiza — Salvador Ibiza",
    description:
      "Excursiones privadas en Ibiza para hasta 35 invitados. Incluye capitán, bar abierto, tapas y deportes acuáticos como paddle surf y snorkel.",
    path: "/private-boat-trips",
    price: "1350",
    image: "/images/optimized/salvador-ibiza-cala-comte-wide-aerial-view.webp",
  });

  return (
    <>
      <Script
        id="private-boat-trips-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PrivateBoatTripsClientPage perfectFor={perfectForItems} />
    </>
  );
}
