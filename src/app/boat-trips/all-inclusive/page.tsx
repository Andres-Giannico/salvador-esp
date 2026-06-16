import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Excursiones en barco todo incluido Ibiza (3 h)',
  description:
    'Una tarifa que aglutina open bar, tapas, fruta, tablas SUP, kayaks, snorkel y tripulación en salidas de tres horas por la bahía de Sant Antoni y entorno.',
  path: '/boat-trips/all-inclusive',
  keywords: 'todo incluido barco Ibiza, excursión con bebidas y comida, SUP snorkel tarifa única Ibiza',
  ogImage: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
  ogImageAlt: 'Barco Salvador en excursión todo incluido por Ibiza',
});

const allInclusiveBoatTripsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Excursión en barco todo incluido Ibiza · Salvador Ibiza',
  description:
    'Salida colectiva con servicio de bebidas, tapeo, material de paddle, kayaks, snorkel y seguridad coordinada por patrón y tripulación.',
  image: publicAssetUrl('/images/optimized/salvador-ibiza-boat-aerial-view.webp'),
  brand: { '@type': 'Brand', name: 'Salvador Ibiza' },
  offers: {
    '@type': 'Offer',
    url: absoluteUrl('/boat-trips/all-inclusive'),
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

export default function AllInclusiveBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allInclusiveBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Todo incluido <span className="text-yellow-600">en barco</span>
            </h1>

            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Si buscas <strong>resolver el día sin sumar cargos dispersos uno a uno sobre cubierta</strong>, nuestra denominación tipo “todo incluido” agrupa los servicios gastronómicos principales más el equipo náutico recreativo habitual en esa misma reserva.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Piezas típicas del paquete amplio Salvador</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Barra muy completa dentro de lo anunciado</h3>
                    <p className="text-gray-600">
                      Cavas, sangría, cervezas, refrescos embotellados y agua: repostado por la tripulación mientras navegamos o paramos baño.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🍤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Tapeo español y fruta de temporada</h3>
                    <p className="text-gray-600">
                      Selección de tapas típicas y fruta fresca para recuperar fuerzas antes de tirarte al agua otra vez.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🏄‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Deportes acuáticos de la salida habitual</h3>
                    <p className="text-gray-600">
                      Lote suficiente de tablas SUP, dos kayaks de apoyo cuando el equipo los despliega y snorkeling con máscara y tubo en tallas prácticas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">⚓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Tripulación con experiencia local</h3>
                    <p className="text-gray-600">
                      Patrón que conoce fondeos frecuentes alrededor de Sant Antoni bajo distintos vientos habituales de verano.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Audio por Bluetooth comedido</h3>
                    <p className="text-gray-600">
                      Conecta tu música; el volumen debe respetar la convivencia con otros fondeos y las normas de puerto cuando volvemos atracados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Calas y bahía de Sant Antoni</h3>
                    <p className="text-gray-600">
                      Cada día se elige combinación de seguridad marina y vistas: aguas que suelen estar muy claras en verano, con tiempo suficiente de baño y paddle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ventajas de reservar el paquete amplio</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Un precio conceptual claro:</strong> la mayor parte de lo que usarás ese día viene en la misma tarifa.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Menos microgestión en cubierta</strong>: te centras en el mar, el snorkeling y los baños tranquilos entre tapa y tapeo.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Variedad deportiva desde el mismo embarque</strong>: paddles, kayak y snorkel comparten la misma reserva base.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Ideal si es tu primera excursión en grupo</strong> y quieres probar bastante sin contratar tres servicios diferentes.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
                  alt="Barco Salvador visto desde el aire en Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/tapastop.png"
                  alt="Tapeo español durante excursión en barco"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserva modo todo incluido</h2>
              <TurbnbWidget
                companyId={2}
                productId={0}
                billingTermIds={[]}
                channelId={0}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: 'Personas',
                  titleVariant: 'Modern',
                  bookNow: 'RESERVAR AHORA',
                  selectExperienceLabel: 'Tipo de experiencia',
                  addonsLabel: 'Extras',
                  childrenAge: '6 a 12 años',
                  infantAge: '0 a 5 años',
                  depositObservation:
                    'Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).',
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Si buscas algo aún más privado</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/private-boat-trips"
                  className="block bg-yellow-600 text-white p-6 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Charter exclusivo íntegro</h4>
                  <p>Elegís horarios y un servicio más personalizado sin compartir cubierta con pasajeros externos al reservar el Salvador en exclusiva.</p>
                </Link>
                <Link href="/boat-trips" className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h4 className="text-xl font-bold mb-2">Todas las excursiones públicas</h4>
                  <p>Atardecer, snorkel, paddle y páginas temáticas adicionales con el mismo listado habitual.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
