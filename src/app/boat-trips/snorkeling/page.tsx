import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Excursiones snorkel en barco Ibiza (3 h) | Mar transparente | Salvador Ibiza',
  description:
    'Snorkel en Ibiza desde el Salvador: equipo incluido, calas tranquilas y tripulación que guía cada parada en agua cristalina del Mediterráneo.',
  path: '/boat-trips/snorkeling',
  keywords:
    'snorkel Ibiza barco, excursión snorkel, fauna marina Baleares, aguas transparentes Ibiza',
  ogImage: '/images/boat/parejasnorkeling.webp',
  ogImageAlt: 'Pareja haciendo snorkel en excursión en barco Ibiza',
});

const snorkelingBoatTripsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Excursiones snorkel en barco Ibiza con Salvador Ibiza',
  description:
    'Snorkel con equipo profesional en aguas mediterráneas; indicaciones de seguridad y paradas adaptadas del grupo.',
  image: publicAssetUrl('/images/boat/parejasnorkeling.webp'),
  brand: { '@type': 'Brand', name: 'Salvador Ibiza' },
  offers: {
    '@type': 'Offer',
    url: absoluteUrl('/boat-trips/snorkeling'),
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

export default function SnorkelingBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snorkelingBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Snorkel en barco en <span className="text-cyan-600">Ibiza</span>
            </h1>

            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Descubre fondos cercanos desde una <strong>excursión de snorkel en barco por Ibiza</strong>: equipo listo a bordo y
              calas donde la visibilidad suele ser muy buena con mar en calma.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tu aventura bajo superficie tranquila</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🤿</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Equipo profesional incluido</h3>
                    <p className="text-gray-600">
                      Máscaras, tubos y aletas en varias tallas; tras cada grupo habitual el equipo pasa revisión rápida e higiene básica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🐠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Vida marina mediterránea</h3>
                    <p className="text-gray-600">
                      Roqueríos de costa donde ver peces típicos del Mediterráneo; la fauna no se puede garantizar al 100 % día a día.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Aguas claras y calas vírgenes cercanas</h3>
                    <p className="text-gray-600">
                      Calas menos masificadas donde el agua permite ver bien el fondo con buenas condiciones meteorológicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ayuda desde cubierta</h3>
                    <p className="text-gray-600">
                      Charla de seguridad y uso del equipo; conviven niveles distintos y la tripulación orienta antes de cada parada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Varias paradas en tres horas</h3>
                    <p className="text-gray-600">
                      La meteorología ese día marca si alargamos un baño único o repartimos el tiempo entre dos rincones; el capitán adapta tiempo y paradas con seguridad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🍹</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Momentos tranquilos sobre cubierta</h3>
                    <p className="text-gray-600">
                      Bebidas, tapas y fruta dentro de lo incluido cuando contratas el paquete todo incluido que publicamos ese año para salidas Salvador compartidas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🤿 Pensado para distintos perfiles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Principiantes</strong>: charla rápida y paradas en aguas en calma cuando el mar lo permite.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Con experiencia</strong>: más tiempo bajo superficie donde el panorama submarino compensa ese día.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Solo cubierta</strong>: música a volumen razonable, sombra y descanso sin obligación de chapuzón.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Familias</strong>: chalecos infantiles en varios tamaños antes de llegar al punto de snorkel.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/parejasnorkeling.webp"
                  alt="Pareja haciendo snorkel en excursión en barco Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/optimized/crystal-clear-waters-ibiza.webp"
                  alt="Aguas muy transparentes ideales snorkel Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserva excursión snorkel</h2>
              <TurbnbWidget
                companyId={2}
                productId={2}
                billingTermIds={[]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: 'Personas',
                  titleVariant: 'Modern',
                  bookNow: 'RESERVAR SNORKEL',
                  confirmReservationAndPay: 'CONFIRMAR Y PAGAR',
                  selectTimeLabel: 'Elige horario',
                  selectExperienceLabel: 'Experiencia snorkel',
                  addonsLabel: 'Extras',
                  childrenAge: '6 a 12 años',
                  infantAge: '0 a 5 años',
                  depositObservation:
                    'Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).',
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Más actividades acuáticas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/boat-trips/paddle"
                  className="block bg-cyan-600 text-white p-6 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Paddle surf (SUP)</h4>
                  <p>Combina snorkel con tablas en la misma jornada compartida</p>
                </Link>
                <Link
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Todas las excursiones</h4>
                  <p>Consulta todas las páginas temáticas públicas antes de elegir día y canal de reserva.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
