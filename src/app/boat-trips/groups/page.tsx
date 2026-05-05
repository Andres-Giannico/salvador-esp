import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Excursiones en barco para grupos Ibiza (3 h) | Salvador Ibiza',
  description:
    'Salidas compartidas con espacio suficiente para grupos grandes: celebraciones, amigos y pequeños eventos corporativos. Todo según disponibilidad y modalidad reservada.',
  path: '/boat-trips/groups',
  keywords:
    'grupo barco Ibiza, excursiones grandes grupos Baleares, despedida Ibiza barco compartido, team building Ibiza barco',
  ogImage: '/images/boat/chicasmuyfelices.webp',
  ogImageAlt: 'Grupo de amigos disfrutando una excursión en barco en Ibiza',
});

const groupBoatTripsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Excursiones en barco para grupos Ibiza · Salvador Ibiza',
  description:
    'Excursión compartida con amplia capacidad en cubierta: ideal para reuniones de amigos, celebraciones informales y salidas corporativas ligeras.',
  image: publicAssetUrl('/images/boat/chicasmuyfelices.webp'),
  brand: { '@type': 'Brand', name: 'Salvador Ibiza' },
  offers: {
    '@type': 'Offer',
    url: absoluteUrl('/boat-trips/groups'),
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

export default function GroupBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groupBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Grupos en barco por <span className="text-purple-600">Ibiza</span>
            </h1>

            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Reserva plazas en la misma excursión compartida cuando viajáis <strong>muchos amigos</strong>, celebráis un hito o
              buscáis una actividad de equipo distinta desde el Puerto de Sant Antoni.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ventajas para grupos grandes</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Capacidad cómoda en cubierta</h3>
                    <p className="text-gray-600">
                      El Salvador ofrece sitio suficiente para ir juntos sin sentiros apretados: zona de baño al sol, espacio para
                      merendar y estar de pie cuando el capitán permite moverse por cubierta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ambiente festivo controlado</h3>
                    <p className="text-gray-600">
                      Cumpleaños y despedidas son habituales: la tripulación mantiene la seguridad, el orden en puerto y un volumen de
                      música respetuoso con el mar y otros barcos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Pequeños eventos corporativos</h3>
                    <p className="text-gray-600">
                      Alternativa económica al charter íntegro cuando buscáis convivencia en grupo sin ocupar todo el barco en
                      exclusiva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Lista propia por Bluetooth</h3>
                    <p className="text-gray-600">
                      Podéis enlazar música propia dentro de límites razonables; el patrón prioriza seguridad náutica y normativa de
                      fondeos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:col-span-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Catering escalado según inclusión contratada</h3>
                    <p className="text-gray-600">
                      Bebidas y tapas se sirven dentro de lo que marca vuestra modalidad todo incluido o la tarifa anunciada al
                      reservar por canal web oficial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ocasiones frecuentes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Cumpleaños entre amigos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Despedidas de soltera o soltero
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Reuniones de antiguos compañeros
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Team building informal
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Aniversarios de pareja
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Vacaciones con familia amplia
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Viajes organizados estudiantiles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Celebraciones de equipo deportivo
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicasmuyfelices.webp"
                  alt="Grupo feliz durante excursión en barco en Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicaspasandolomuybien.webp"
                  alt="Amigos divirtiéndose en cubierta con Salvador Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserva vuestra salida</h2>

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
                  bookNow: 'RESERVAR GRUPO',
                  confirmReservationAndPay: 'CONFIRMAR Y PAGAR',
                  selectTimeLabel: 'Elige horario',
                  selectExperienceLabel: 'Experiencia en grupo',
                  addonsLabel: 'Extras',
                  childrenAge: '6 a 12 años',
                  infantAge: '0 a 5 años',
                  depositObservation:
                    'Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).',
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Combinar con otras opciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/private-boat-trips"
                  className="block bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Charter privado</h4>
                  <p>Todo el barco solo para vosotros, con itinerario cerrado antes de zarpar.</p>
                </Link>
                <Link href="/boat-trips" className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h4 className="text-xl font-bold mb-2">Todas las excursiones</h4>
                  <p>Otras páginas temáticas: atardecer, snorkel, paddle y más.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
