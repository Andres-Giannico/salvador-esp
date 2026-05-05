import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata = esPageMetadata({
  title:
    "Calas escondidas de Ibiza: secretos mejor guardados desde el barco",
  description:
    "Las calitas y rincones de Ibiza poco conocidos desde el barco Salvador: Aguas vírgenes, snorkeling y tranquilidad lejos del gentío.",
  path: "/blog/hidden-coves-ibiza",
  keywords:
    "calas escondidas Ibiza, calas secreta barco, playas aisladas Ibiza snorkeling poca gente norte oeste isla Baleares día charter compartido",
});

export default function HiddenCovesPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          ← Volver al blog
        </Link>

        <div className="relative mb-8 h-[50vh] min-h-[400px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/hidden-cove.webp"
            alt="Calas escondidas Ibiza accesibles en barco Salvador"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500" dateTime="2024-02-25">
            25 de febrero de 2024
          </time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Calas escondidas de Ibiza desde el Salvador
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Cuando uno imagina Ibiza suelen aparecer terrazas junto al mar y calas muy fotografiadas. Pero existe otra
            faceta de la isla, más silvestre y discreta. Con <strong>Salvador Ibiza</strong> accedes a calitas y playas
            donde el coche no llega y el ritmo baja del todo.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              ¿Quieres ver esta faceta de la isla?
            </p>
            <div className="text-center">
              <Link
                href="/boat-trips/day"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Ver excursiones de día
              </Link>
            </div>
          </div>

          <h2>¿Por qué cautivan estas calas?</h2>
          <p>
            Son lugares que no suelen saturar guías genéricos: enclaves donde pinos casi besan el mar y el acantilado da
            sombra al agua. El sonido dominante es la resaca suave.
          </p>

          <p>
            Imagina fondear con el agua tan clara que se ve el fondo desde la cubierta, sin agenda apretada y con el rumor
            suave del mar como banda sonora principal.
          </p>

          <h2>Algunos tesoros que suelen combinarse la ruta</h2>
          <p>Cada día el mar marca plan seguro tripulación; ejemplos frecuentes incluyen combinaciones norte o poniente:</p>

          <ul>
            <li>Entraditas de arena entre roca perfectas para un baño muy íntimo</li>
            <li>Fondeos para snorkel con fondos vivos y cuevas poco profundas</li>
            <li>Cantiles y rocas muy fotográficas para explorar a tu ritmo</li>
            <li>Cuevas marinas accesibles con paddle o kayak si el mar está en calma</li>
            <li>Fondeos silenciosos para tomar sol o desconectar del móvil momento</li>
          </ul>

          <p>
            La tripulación conoce bien la costa y ese día elige combinación según viento oleaje y lo que el grupo quiera
            priorizar descanso ejercicio foto ambos.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              ¿Tu grupo prefiere barco íntegro o salida compartida?
            </p>
            <div className="text-center flex flex-wrap justify-center gap-3">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Charter privado
              </Link>
              <Link
                href="/boat-trips"
                className="inline-block bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Salidas grupales
              </Link>
            </div>
          </div>

          <h2>Experiencia Salvador</h2>
          <p>
            La{" "}
            <Link href="/boat-trips/day-trip" className="text-blue-600 hover:text-blue-800">
              excursión diurna tipo todo incluido
            </Link>{" "}
            suele poder combinar estos rincones cuando meteorología permite; en charters privados la propuesta marítima es
            aún más flexible según tus prioridades ese día siempre seguridad capitán marca rumbo final viable.
          </p>

          <p>Dependiendo modalidad reservada a bordo ofrecemos por ejemplo:</p>
          <ul>
            <li>Bar selección bebidas anunciadas tapas españolas bandeja fruta temporada</li>
            <li>Equipo snorkel tablas paddle kayaks tripulación indica uso correcto chaleco</li>
            <li>Atención profesional tripulación pequeña orientada comodidad grupo internacional</li>
          </ul>

          <p>
            Tú decides si priorizas chapuzón intenso calma foto larga charla cubierta música comedida cercanía otros
            fondeados cercanos respetamos siempre entorno marina local.
          </p>

          <h2>Un viaje menos convencional</h2>
          <p>Muchos huéspedes no conocen esta vertiente menos ruidosa de la isla y la recuerdan como momento auténtico.</p>

          <p>Si te apetece descubrir la Ibiza que se abre desde el mar estaremos encantados de llevarte.</p>

          <p>
            <Link href="/book-now" className="text-blue-600 hover:text-blue-800">
              Reserva tu salida hoy
            </Link>
          </p>

          <div className="not-prose my-8 p-8 bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">La Ibiza más silenciosa</h3>
            <p className="text-teal-100 mb-6">Pocos la conocen como quien navega con Salvador</p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-teal-600 hover:bg-teal-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Reservar aventura calas
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
