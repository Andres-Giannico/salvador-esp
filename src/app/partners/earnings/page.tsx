import type { Metadata } from "next";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/partners/earnings",
  title: "Programa de comisiones para partners",
  description:
    "Información próxima para agencias y colaboradores: comisiones, reporting y proceso de alta en el programa de partners Salvador Ibiza.",
});

export default function PartnerEarningsPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Comisiones para partners</h1>
      <p className="text-center mb-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Esta sección está en preparación: publicaremos aquí tarifas, porcentajes, calendarios de liquidación y criterios de elegibilidad
        para revendedores e integradores TurBookings.
      </p>
      <p className="text-center text-gray-500">
        Mientras tanto, escribe a{' '}
        <a href="mailto:partners@salvadoribiza.es" className="text-blue-600 hover:underline">
          partners@salvadoribiza.es
        </a>
        .
      </p>
    </div>
  );
}
