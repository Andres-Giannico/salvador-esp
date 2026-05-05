import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Paddle surf (SUP) desde barco en Ibiza (3 h) | Kayaks opcionales | Salvador Ibiza',
  description:
    'Excursión compartida con tablas SUP a bordo, paradas para remar desde calas cercanas al puerto de Sant Antoni y aguas habitualmente muy claras. Kayaks disponibles.',
  path: '/boat-trips/paddle',
  keywords: 'paddle surf Ibiza, SUP Ibiza barco, tablas inclusión excursiones Baleares',
  ogImage: '/images/boat/chicasentablasup.png',
  ogImageAlt: 'Paddle surf durante excursión en barco en Ibiza',
});

const paddleBoatTripsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Paddle surf desde barco en Ibiza · Salvador Ibiza',
  description:
    'Salida colectiva con tablas suficientes para que el grupo disfrute el SUP desde el agua cercana al anclaje y kit de seguridad habitual.',
  image: publicAssetUrl('/images/boat/chicasentablasup.png'),
  brand: { '@type': 'Brand', name: 'Salvador Ibiza' },
  offers: {
    '@type': 'Offer',
    url: absoluteUrl('/boat-trips/paddle'),
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

export default function PaddleBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paddleBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Paddle SUP en excursiones por <span className="text-teal-600">Ibiza</span>
            </h1>

            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Prueba el <strong>stand up paddle</strong> en la misma excursión de barco sin reservas aparte: llegamos a calas donde el capitán permite bajar tabla y navegar tranquilamente antes de seguir navegación o snorkel.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Lo que marca esta temática dentro del tour</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🏄‍♀️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Lote grande de tablas</h3>
                    <p className="text-gray-600">
                      Tablas hinchables y estables para debutantes y para quien ya controla mejor el balanceo sobre las olas cortas mediterráneas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Fondeos cerca del litoral</h3>
                    <p className="text-gray-600">
                      El capitán para en aguas tranquilas ese día para que podáis bajar tabla y explorar vistas de acantilado y entrada a calitas sin tener que ir en coche hasta otro punto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Mini taller de entrada al agua</h3>
                    <p className="text-gray-600">
                      Repasamos postura corta sobre tabla, seguridad elemental y cercanía al barco; la tripulación vigila cuando el grupo entra en el agua.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Aguas con buena visibilidad</h3>
                    <p className="text-gray-600">
                      En jornadas de mar en calma el color del agua y el fondo se aprecian con claridad; las condiciones reales ese día marcan el tiempo que pasáis en tabla frente al descanso en cubierta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🛶</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Kayaks opcionales a bordo</h3>
                    <p className="text-gray-600">
                      Para quien prefiere remar sentado, suele haber kayaks disponibles dentro del mismo equipo de actividades náuticas de la salida colectiva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">📸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Lugares muy fotográficos</h3>
                    <p className="text-gray-600">
                      Desde el agua ves la costa y el barco Salvador de un ángulo distinto; es un buen momento para fotos antes de cambiar bañador por toalla en cubierta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">¿Vas por primera vez o ya lo dominas?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Novatos</strong>: instrucciones breves y remada cercana al barco
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Nivel intermedio</strong>: más autonomía alrededor del fondeo
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Fuerte en SUP</strong>: disfruta el tramo donde el tiempo de parada permite más línea recta sobre el agua
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Solo quieres descansar</strong>: música moderada en cubierta, baños y equipo de snorkel si apetece
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Equipamiento habitual relacionado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>Tablas para repartir entre el grupo</li>
                    <li>Kayaks cuando la tripulación los despliega ese día</li>
                    <li>Chalecos y material de seguridad</li>
                    <li>Indicaciones antes de saltar al agua</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>Equipo de snorkel si quieres alternar con el paddle</li>
                    <li>Bebidas y tapeo según modalidad todo incluido contratada</li>
                    <li>Sistema de sonido con Bluetooth a volumen comedido</li>
                    <li>Capitán y tripulación habituales ruta Sant Antoni</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicasentablasup.png"
                  alt="Persona en tabla SUP junto al barco en Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/4chicasparadasentablaxxl.webp"
                  alt="Grupo sobre tablas de paddle en excursión en Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserva día con paddle</h2>
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
                  bookNow: 'RESERVAR SUP',
                  confirmReservationAndPay: 'CONFIRMAR Y PAGAR',
                  selectTimeLabel: 'Elige horario',
                  selectExperienceLabel: 'Experiencia paddle',
                  addonsLabel: 'Extras',
                  childrenAge: '6 a 12 años',
                  infantAge: '0 a 5 años',
                  depositObservation:
                    'Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).',
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Combinar con más actividades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/boat-trips/snorkeling"
                  className="block bg-teal-600 text-white p-6 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Combinar snorkel</h4>
                  <p>Otra página con el mismo formato informativo para quien prioriza tiempo bajo el agua ese mismo día de salida.</p>
                </Link>
                <Link href="/boat-trips" className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h4 className="text-xl font-bold mb-2">Todas las excursiones</h4>
                  <p>Listado temático desde la página principal excursiones náuticas</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}