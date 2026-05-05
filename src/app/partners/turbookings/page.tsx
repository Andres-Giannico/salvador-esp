import { Metadata } from "next";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/partners/turbookings",
  title: "Integración TurBookings | Salvador Ibiza",
  description:
    "Cómo funciona la pasarela TurBookings con Salvador Ibiza: reservas seguras para clientes y herramientas para agencias colaboradoras.",
});

export default function TurbookingsPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">TurBookings</h1>
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Trabajamos con TurBookings como plataforma de reserva para garantizar disponibilidad en tiempo
          real, pagos seguros y confirmaciones inmediatas de tus excursiones con Salvador Ibiza.
        </p>
        <h2 className="text-xl font-semibold text-gray-900">Ventajas para huéspedes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Elegibilidad en vivo sin llamadas espera.</li>
          <li>Pago protegido y comprobantes por correo.</li>
          <li>Gestión sencilla de cambios dentro de políticas publicadas temporada.</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-900">Ventajas para agencias</h2>
        <p>
          Paneles para agencias afiliadas con visibilidad sobre cupos, tarifas pactadas y soporte
          comercial. Actualizaremos pronto el detalle económico en la página de{" "}
          <a href="/partners/earnings" className="text-blue-600 hover:underline">
            comisiones partners
          </a>
          .
        </p>
      </section>
    </main>
  );
}
