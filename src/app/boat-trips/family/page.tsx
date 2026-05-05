import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Excursiones en barco para familias Ibiza (3 h) | Salvador Ibiza',
  description:
    'Excursión compartida pensada para familias: chalecos, baños tranquilos junto Sant Antoni, snorkel superficial y opciones sin alcohol pensadas también para menores, según la modalidad todo incluido contratada.',
  path: '/boat-trips/family',
  keywords: 'familia barco Ibiza, excursión con niños Baleares, snorkel seguro niños sant antonio',
});

export default function FamilyBoatTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Familias · <span className="text-green-600">excursión en barco Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Salidas donde <strong>niños y adultos comparten el mismo barco con ritmo tranquilo</strong>: chalecos en tallas infantiles,
            paradas para nadar donde el tiempo suele dejar mar en calma cerca del puerto de Sant Antoni y explicaciones sencillas
            sobre fauna de superficie antes de coger snorkel.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Qué valoramos cuando viajan familias</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Ambiente acogedor en cubierta</h3>
                  <p className="text-gray-600">
                    No hace falta ir en silencio: la tripulación está acostumbrada al bullicio contenido de niños que descubren un
                    barco por primera vez.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🏊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Zonas de baño poco movidas</h3>
                  <p className="text-gray-600">
                    Elegimos fondeos con agua en general tranquila ese día para que chapoteen con confianza bajo vigilancia desde
                    el Salvador.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🐠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Mirar peces desde la superficie</h3>
                  <p className="text-gray-600">
                    Antes del snorkel comentamos de forma rápida qué pueden ver desde la línea del agua: pequeños bancales de arena y
                    pececillos cercanos sin salir muy lejos ni aguantar apnea largo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🍎</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Opciones pensadas también para menores</h3>
                  <p className="text-gray-600">
                    Fruta, agua y refrescos para los más pequeños; las bebidas con alcohol quedan bajo decisión parental según vuestra norma habitual de consumo durante la excursión.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="font-bold text-green-800 mb-2">Seguridad ante todo</h3>
              <p className="text-green-700">
                El equipo reparte chalecos y explica rápidamente dónde sujetarse al salir del puerto, cómo esperar orden de tirarse al agua y
                qué zonas estarán prohibidas ese día cuando el tiempo marque limitaciones.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">¿Reservamos día compartido con niños?</p>
              <p className="text-3xl font-bold text-green-600 mb-2">Desde 80 € adulto · consulta infantil</p>
              <p className="text-lg text-gray-600 mb-6">
                Completa fecha en el siguiente enlace para ver disponibilidad y precio exacto menor en el canal web habitual.
              </p>
              <Link
                href="/boat-trips/day-trip"
                className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Reservar excursión diurna
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Familias numerosas sin compartir con desconocidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/private-boat-trips"
                className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Charter privado sólo vosotros</h4>
                <p>Gestionáis horarios y ritmo de baños exclusivos para vuestra casa sin depender otros pasajeros compartidos.</p>
              </Link>
              <Link href="/boat-trips" className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h4 className="text-xl font-bold mb-2">Índice de excursiones públicas</h4>
                <p>Otras páginas temáticas con el mismo formato de información clara antes de cerrar día en alta mar.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
