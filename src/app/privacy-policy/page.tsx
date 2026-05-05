import { Metadata } from "next";
import { getContactEmail } from "@/config/site";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/privacy-policy",
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales por Ibicruiser, S.L. (Salvador Ibiza) conforme al RGPD y normativa aplicable.",
});

export default function PrivacyPolicyPage() {
  const email = getContactEmail();
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Política de privacidad
        </h1>

        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <p className="text-sm text-gray-500 mb-6">Última actualización: 5 de mayo de 2026</p>

          <p>
            Esta política describe cómo <strong>SALVADOR IBIZA (Ibicruiser, S.L.)</strong> trata los
            datos personales cuando utilizas el sitio web <strong>www.salvadoribiza.es</strong> y los
            servicios asociados (reservas, formularios de contacto, newsletter, etc.).
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">1. Responsable del tratamiento</h2>
          <ul>
            <li>
              <strong>Entidad:</strong> Ibicruiser, S.L.
            </li>
            <li>
              <strong>NIF:</strong> B57527392
            </li>
            <li>
              <strong>Domicilio social:</strong> Puerto de San Antonio, Baleares, España (detalle en
              facturación y comunicaciones contractuales).
            </li>
            <li>
              <strong>Registro Mercantil:</strong> Hoja IB-9135, Tomo 215, Folio 59 – Ibiza.
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                {email}
              </a>
            </li>
            <li>
              <strong>Teléfono:</strong> +34 871 181 393 / +34 681 611 598
            </li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">2. Datos que recabamos</h2>
          <p>
            Podemos tratar identificativos, datos de contacto, datos de la reserva (fechas, número
            de personas) y, en su caso, preferencias comunicadas voluntariamente. Asimismo, datos de
            navegación mediante cookies cuando das tu consentimiento (véase banner de cookies y
            configuración del navegador).
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">3. Finalidades y base legal</h2>
          <ul>
            <li>
              Gestión contractual y prestación del servicio de excursiones/chárter (
              <em>ejecución de contrato</em>).
            </li>
            <li>
              Atender solicitudes realizadas mediante formulario o correo (
              <em>interés legítimo</em> / solicitud previa).
            </li>
            <li>
              Cumplir obligaciones legales aplicables (<em>obligación legal</em>), como facturación
              o seguridad marítima si procede.
            </li>
            <li>
              Comunicaciones comerciales solo si has dado consentimiento expreso (
              <em>consentimiento</em>), salvo las excepciones legalmente admitidas para clientes de
              productos similares.
            </li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">4. Conservación</h2>
          <p>
            Conservamos los datos el tiempo necesario para las finalidades indicadas y para atender
            posibles reclamaciones en los plazos legales. Los plazos concretos dependen del tipo de
            dato y de la obligación legal (ej. tributaria).
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">5. Cesiones y encargados</h2>
          <p>
            No vendemos tus datos personales. Podemos comunicarlos a encargados de tratamiento (
            <em>e.g.</em>
            pasarelas de pago, plataforma de reservas, hosting, soporte técnico) con contrato tipo
            art. 28 RGPD. También cuando exista obligación legal o requerimiento de autoridades.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">6. Derechos RGPD</h2>
          <p>
            Puedes ejercer derechos de acceso, rectificación, supresión, limitación, portabilidad y
            oposición cuando corresponda, así como retirar el consentimiento cuando la base fuera ese.
            También tienes derecho a reclamar ante la Agencia Española de Protección de Datos (
            <a href="https://www.aepd.es" className="text-blue-600 hover:underline">
              www.aepd.es
            </a>
            ). Para cualquier ejercicio de derechos, escribe a&nbsp;
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
              {email}
            </a>
            indicando tu petición concreta y un medio para verificar tu identidad.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">7. Sitios enlazados</h2>
          <p>
            Enlaces externos (redes sociales, partners, Tripadvisor) tienen políticas propias; te
            recomendamos leerlas antes de facilitar datos.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">8. Actualizaciones</h2>
          <p>
            Podemos modificar esta política; la versión vigente estará siempre publicada en esta página
            con fecha de última revisión.
          </p>
        </div>
      </div>
    </main>
  );
}
