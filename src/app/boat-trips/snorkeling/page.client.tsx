"use client";

import Image from "next/image";
import Link from "next/link";
import TurbnbWidget from "@/components/booking/TurbnbWidget";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/trips/FAQ";
import BoatTripComparisonTable from "@/components/trips/BoatTripComparisonTable";
import TestimonialSlider from "@/components/trips/TestimonialSlider";
import { generalBoatTripComparison } from "@/lib/boat-trip-comparison";
import { snorkelingBoatTripFaqs } from "@/lib/topic-faqs";
import { snorkelingReviews } from "@/lib/topic-reviews";

const snorkelingFaqItems = snorkelingBoatTripFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function SnorkelingBoatTripsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Excursiones snorkel en barco{" "}
            <span className="text-cyan-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            ¿Buscas la <strong>mejor excursión en barco con snorkel en Ibiza</strong>? Salvador Ibiza visita
            calas de agua cristalina en excursiones todo incluido de 3 horas con equipo profesional para cada
            pasajero.
          </p>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Por qué Salvador Ibiza es una de las mejores excursiones de snorkel en Ibiza
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Muchas excursiones en barco en Ibiza ofrecen una parada rápida para nadar — pero las mejores{" "}
                <strong>excursiones de snorkel</strong> visitan varias calas resguardadas con visibilidad
                excepcional, incluyen equipo de calidad para todos y combinan el snorkel con una jornada
                completa en el mar.
              </p>
              <p>
                En cada excursión de Salvador Ibiza recibes equipo completo de snorkel (máscaras, tubos,
                aletas), 2–3 paradas de baño en calas elegidas por el capitán a lo largo de la costa oeste
                (zona Cala Comte, Cala Salada) o costa norte (Sa Foradada), además de 15 tablas de paddle, 2
                kayaks, bar abierto y tapas — todo incluido desde 80 € por adulto.
              </p>
              <p>
                Tanto si es tu primera vez con snorkel, si viajas en familia con niños o si ya tienes
                experiencia, nuestra tripulación recomienda los mejores puntos según condiciones y nivel.
              </p>
            </div>
          </section>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tu aventura bajo el agua</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "🤿", title: "Equipo profesional incluido", desc: "Máscaras, tubos y aletas de calidad para todos — revisados e higienizados." },
                { icon: "🐠", title: "Fauna marina mediterránea", desc: "Explora peces, praderas de posidonia y roqueríos en su hábitat natural." },
                { icon: "💎", title: "Aguas cristalinas", desc: "Acceso a calas escondidas con visibilidad submarina excepcional." },
                { icon: "👨‍🏫", title: "Orientación experta", desc: "Charla de seguridad y consejos de snorkel para principiantes y expertos." },
                { icon: "🏝️", title: "Varios puntos de snorkel", desc: "2–3 ubicaciones distintas durante tu aventura de 3 horas." },
                { icon: "🍹", title: "Todo incluido", desc: "Bebidas premium, tapas españolas y fruta fresca entre paradas de baño." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Para todos los niveles</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Principiantes</strong> — charla de seguridad y zonas poco profundas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Con experiencia</strong> — explora roqueríos más profundos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Quienes no nadan</strong> — disfrutan desde el barco o en agua poco profunda
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Familias</strong> — equipo infantil y supervisión en paradas de baño
                </li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Dónde hacer snorkel en Ibiza en barco
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lo mejor del snorkel en Ibiza se alcanza en barco. Nuestras rutas desde Sant Antoni visitan calas
              resguardadas donde el agua está en calma y la visibilidad es mayor — lejos de playas masificadas.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>
                <strong>Costa oeste (zona Cala Comte / Cala Salada):</strong> agua turquesa y fondos rocosos
                llenos de peces — nuestra ruta diurna más popular.
              </li>
              <li>
                <strong>Costa norte (Sa Foradada / Es Vedrà):</strong> acantilados dramáticos y agua clara, a
                menudo elegida para excursiones al atardecer.
              </li>
              <li>
                <strong>Calas escondidas:</strong> el capitán elige los mejores puntos cada día según viento y
                visibilidad — llegas a lugares inaccesibles desde tierra.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <BoatTripComparisonTable
              rows={generalBoatTripComparison}
              title="Snorkel en barco: cómo se compara Salvador Ibiza"
            />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/boat/parejasnorkeling.webp"
                alt="Pareja haciendo snorkel durante excursión en barco en Ibiza"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/optimized/crystal-clear-waters-ibiza.webp"
                alt="Aguas cristalinas ideales para snorkel en Ibiza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <FAQ items={snorkelingFaqItems} title="Preguntas frecuentes — snorkel en barco" />
          </section>

          <section className="mb-12 py-4">
            <TestimonialSlider
              testimonials={snorkelingReviews}
              title="Lo que dicen quienes hacen snorkel con Salvador Ibiza"
            />
          </section>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Reserva tu aventura de snorkel
            </h2>
            <TurbnbWidget
              companyId={2}
              productId={2}
              billingTermIds={[]}
              channelId={11}
              customProperties={{
                displayBillingTerm: true,
                showQuantity: true,
                quantity: "Personas",
                titleVariant: "Modern",
                bookNow: "RESERVAR SNORKEL",
                selectExperienceLabel: "Experiencia snorkel",
                addonsLabel: "Extras",
                childrenAge: "6 a 12 años",
                infantAge: "0 a 5 años",
                depositObservation:
                  "Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).",
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
                href="/boat-trips/family"
                className="block bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Excursiones en familia</h4>
                <p>Snorkel y diversión para toda la familia</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
