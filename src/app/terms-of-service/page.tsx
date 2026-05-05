import { Metadata } from "next";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/terms-of-service",
  title: "Aviso legal y condiciones de uso | Salvador Ibiza",
  description:
    "Condiciones de uso del sitio www.salvadoribiza.es y servicios de Ibicruiser, S.L. (Salvador Ibiza). Propiedad intelectual, responsabilidad y legislación aplicable.",
});

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-cyan-50 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Aviso legal y condiciones de uso
        </h1>

        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
          <p>
            Bienvenido al sitio web <strong>www.salvadoribiza.es</strong> (en adelante, SALVADOR IBIZA).
            El acceso implica la lectura y aceptación de las siguientes condiciones.
          </p>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">1. Titularidad</h2>
            <p>
              El dominio y el contenido están titulados por <strong>Ibicruiser, S.L.</strong>, NIF
              B57527392 e inscripción mercantil: Hoja IB-9135, Tomo 215, Folio 59 – Ibiza, Islas Baleares,
              España.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">2. Objeto del sitio</h2>
            <p>
              El sitio tiene carácter informativo y promocional sobre los servicios de excursiones en
              barco y charter en Ibiza, y permite iniciar procesos de contacto o reserva a través de
              medios externos (widgets, formularios) según se indique en cada apartado.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">3. Formularios y veracidad</h2>
            <p>
              Los envíos mediante formulario no vinculan a SALVADOR IBIZA hasta confirmación contractual
              o presupuesto aceptado. El usuario garantiza que los datos son veraces y responde de los daños que
              pueda causar información inexacta o fraudulenta.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">4. Modificaciones</h2>
            <p>
              SALVADOR IBIZA puede modificar estos textos, la estructura del sitio o los servicios
              descritos sin previo aviso. Conviene revisar periódicamente esta página.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">5. Contenidos y exactitud</h2>
            <p>
              La información se ofrece de buena fe y puede contener erratas o quedar desactualizada
              frente a versiones impresas o comunicaciones directas. Las tarifas y disponibilidad
              definitivas serán las confirmadas en el proceso de reserva.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">6. Propiedad intelectual e industrial</h2>
            <p>
              Textos, marcas, logotipos, diseño, fotografías y demás contenidos del sitio pertenecen a
              SALVADOR IBIZA o a terceros que han autorizado su uso. Queda prohibida la reproducción,
              distribución o transformación sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">7. Disponibilidad del servicio</h2>
            <p>
              SALVADOR IBIZA procura mantener el sitio accesible, pero no garantiza ausencia de
              interrupciones, errores técnicos o ataques. No se responde por daños derivados de fallos
              de red, fuerza mayor o causas ajenas al control razonable del titular.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">8. Uso permitido</h2>
            <p>
              El usuario se compromete a utilizar el sitio de conformidad con la ley, la buena fe y
              estas condiciones, sin introducir virus, realizar ingeniería inversa abusiva, extraer
              datos de forma masiva no autorizada ni vulnerar la seguridad o derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">9. Enlaces a terceros</h2>
            <p>
              Los enlaces a sitios externos se ofrecen a título informativo. SALVADOR IBIZA no controla
              ni asume responsabilidad sobre sus contenidos o políticas.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">10. Obligaciones del usuario</h2>
            <p>Queda prohibido, entre otros usos abusivos:</p>
            <ol>
              <li>Envío masivo de publicidad o comunicaciones comerciales no solicitadas.</li>
              <li>Uso de listas de distribución obtenidas del sitio para fines no consentidos.</li>
              <li>Cualquier actuación que dañe la imagen, sistemas o usuarios de SALVADOR IBIZA.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">11. Enlaces entrantes</h2>
            <p>
              Quien desee enlazar de forma destacada al sitio deberá solicitarlo por escrito a SALVADOR
              IBIZA. No se permite el framing o técnicas que generen confusión sobre el origen del
              servicio o la titularidad de la marca.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">12. Acciones legales</h2>
            <p>
              SALVADOR IBIZA podrá emprender las acciones civiles o penales que correspondan frente a
              incumplimientos de estas condiciones.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">13. Ley aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Las partes, con renuncia
              a fuero que pudiera corresponderles, se someten a los juzgados y tribunales de Ibiza para
              cualquier controversia relacionada con el uso del sitio, salvo normas imperativas en
              materia de consumidores.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">14. Aceptación</h2>
            <p>
              La navegación y el uso continuado del sitio suponen la aceptación de estas condiciones en
              la versión publicada en cada momento.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-6">Última actualización: 5 de mayo de 2026</p>
        </div>
      </div>
    </main>
  );
}
