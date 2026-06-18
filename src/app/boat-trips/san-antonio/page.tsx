import SanAntonioBoatTripsClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = esPageMetadata({
  title: 'Excursiones barco Sant Antoni Ibiza | Bahía y puesta del sol',
  description:
    'Salidas desde la bahía de Sant Antoni: excursiones diurnas y al atardecer con Salvador Ibiza. Aguas tranquilas, calas cercanas y vistas al ocaso. Desde 80 €.',
  path: '/boat-trips/san-antonio',
  keywords:
    'barco sant antoni ibiza, excursion bahia sant antoni, sunset cafe del mar vista mar salvador grupo paddle snorkel sant antonio',
  ogImage: '/images/optimized/ibiza-sunset-boat-trip-salvador.webp',
  ogImageAlt: 'Barco Salvador al atardecer en bahía Sant Antoni Ibiza',
});

export default async function SanAntonioBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Excursiones en barco desde Sant Antoni Ibiza — Salvador Ibiza",
    description:
      "Excursiones en barco desde Sant Antoni: rutas diurnas y al atardecer por la bahía y costa oeste, bebidas y tapas en modalidad anunciada, paddle y snorkel.",
    path: "/boat-trips/san-antonio",
    price: "80",
    image: "/images/barcodesdedron.jpg",
    duration: "PT3H",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SanAntonioBoatTripsClientPage />
    </>
  );
}
