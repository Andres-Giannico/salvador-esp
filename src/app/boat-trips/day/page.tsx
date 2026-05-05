import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Excursiones de día en barco Ibiza (3 h) | Tarde en el mar',
  description:
    'Salidas diurnas de tres horas: sol de tarde, baños, snorkel y paddle con bar y tapas según modalidad reservada. Punto de encuentro habitual Sant Antoni.',
  path: '/boat-trips/day',
  keywords: 'excursión día Ibiza barco, crucero tarde Ibiza, baños calas Sant Antoni',
});

export default function DayBoatTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Excursiones de <span className="text-blue-600">día en barco</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Reserva la franja <strong>diurna clásica de tres horas</strong> con Salvador Ibiza: media tarde de sol mediterráneo, paradas para nadar y deporte acuático ligero sin renunciar al tapeo y las bebidas habituales del barco compartido.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Por qué encaja para muchos viajeros</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Horario cómodo tras el almuerzo</h3>
                  <p className="text-gray-600">
                    Salida orientada a quien ya ha desayunado en tierra y quiere aprovechar el sol fuerte del mediodía y primera tarde sin madrugar en exceso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Actividades suaves en el agua</h3>
                  <p className="text-gray-600">
                    Baño libre, snorkel guiado someramente por la tripulación y tablas SUP cuando el grupo rota turnos de cubierta.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Servicio integrado bar-tapas</h3>
                  <p className="text-gray-600">
                    Bebidas con y sin alcohol más picoteo típico según la tarifa contratada con antelación en el motor de reservas web.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Tripulación experimentada</h3>
                  <p className="text-gray-600">
                    Patrón y ayudantes coordinan embarque, chalecos y tiempos de baño para que el grupo se sienta seguro en cubierta húmeda.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">¿Te encaja el turno de tarde?</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">Desde 80 € por persona</p>
              <Link
                href="/boat-trips/day-trip"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ir a la página detallada del día completo
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ver más variantes náuticas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/boat-trips/sunset"
                className="block bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Salidas al atardecer</h4>
                <p>Ocaso sobre el Poniente ibicenco desde cubierta</p>
              </Link>
              <Link href="/boat-trips" className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h4 className="text-xl font-bold mb-2">Índice de excursiones públicas</h4>
                <p>Listado completo ordenado por temáticas navegación y reservas actuales web oficial.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
