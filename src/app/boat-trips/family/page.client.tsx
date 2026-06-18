"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TurbnbWidget from "@/components/booking/TurbnbWidget";
import FAQ from "@/components/trips/FAQ";
import BoatTripComparisonTable from "@/components/trips/BoatTripComparisonTable";
import TestimonialSlider from "@/components/trips/TestimonialSlider";
import { familyBoatTripComparison } from "@/lib/boat-trip-comparison";
import { familyBoatTripFaqs } from "@/lib/topic-faqs";
import { familyReviews } from "@/lib/topic-reviews";
import { businessContact } from "@/config/site";

const familyFaqItems = familyBoatTripFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FamilyBoatTripsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Excursiones en barco para familias{" "}
            <span className="text-green-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            ¿Buscas la <strong>mejor excursión en barco para familias en Ibiza</strong>? Salvador Ibiza
            ofrece aventuras todo incluido de 3 horas en un barco de madera tradicional — perfectas para
            niños, padres y abuelos.
          </p>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src="/images/boat/chicaspasandolomuybien.webp"
              alt="Familias disfrutando de una excursión relajada en barco en Ibiza con Salvador"
              fill
              className="object-cover"
              priority
            />
          </div>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Por qué Salvador Ibiza es una de las mejores excursiones en familia en Ibiza
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ibiza es famosa por los barcos fiesta y los cruceros de discoteca — pero eso no es lo que
                buscan la mayoría de familias. Las mejores <strong>excursiones en barco para familias en
                Ibiza</strong> ofrecen paradas de baño en calas resguardadas, chalecos para todas las edades,
                comida apta para niños y un ambiente relajado donde los pequeños se sienten seguros y los
                padres pueden desconectar de verdad.
              </p>
              <p>
                Salvador Ibiza ofrece exactamente eso en nuestra{" "}
                <Link href="/boat-trips/day-trip" className="text-green-600 hover:underline font-medium">
                  excursión diurna de 3 horas
                </Link>
                . Navegamos en un precioso barco de madera tradicional desde Sant Antoni, explorando la
                costa oeste hacia Cala Comte o la costa norte hacia Es Vedrà. Cada salida es todo incluido:
                capitán y tripulación, bar abierto, tapas españolas, fruta fresca, 15 tablas de paddle, 2
                kayaks y equipo completo de snorkel.
              </p>
              <p>
                A diferencia de los barcos fiesta, no ponemos música de discoteca ni restringimos la entrada
                de niños. Nuestra tripulación da la bienvenida a familias cada día y elige las calas más
                tranquilas para nadar según las condiciones. Con una valoración de {businessContact.aggregateRating.ratingValue}/5 y más de {businessContact.aggregateRating.reviewCount} reseñas en Google, Salvador Ibiza es la opción de confianza para familias de toda Europa.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              ¿Es Salvador Ibiza adecuado para niños?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sí.</strong> Salvador Ibiza está pensado para familias y niños. Proporcionamos chalecos
              en todas las tallas, damos una charla de seguridad antes de zarpar y nuestra tripulación tiene
              experiencia ayudando a familias con nadadores principiantes. El barco tiene sombra bajo el
              toldo, aseo marino (WC) y un ambiente relajado que encanta a los niños.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Muchas de nuestras mejores reseñas vienen de familias que dicen que las paradas de baño —
              saltar al agua cristalina, ver peces haciendo snorkel y probar el paddle — fueron lo mejor de
              sus vacaciones en Ibiza.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Qué edad es adecuada?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Bebés (0–5 años)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Viajan <strong>gratis</strong>. Trae protección solar y quédate bajo el toldo. Supervisión
                  parental en todo momento.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Niños (6–12 años)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tarifa reducida de <strong>45 €</strong>. Les encanta el snorkel, el paddle y las paradas de
                  baño. Chalecos incluidos.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Adolescentes (13+)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tarifa adulto de <strong>80 €</strong>. Disfrutan snorkel, kayak, paddle y bar abierto
                  (refrescos incluidos para todas las edades).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Lo que más disfrutan los niños a bordo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🏊", title: "Saltar al agua clara", desc: "Calas resguardadas y tranquilas, perfectas para nadar y chapuzar." },
                { icon: "🐠", title: "Snorkel con peces", desc: "Máscaras, tubos y aletas incluidos para cada pasajero." },
                { icon: "🏄", title: "Paddle y kayaks", desc: "15 tablas de paddle y 2 kayaks — a los niños les encanta explorar las calas." },
                { icon: "🍎", title: "Fruta fresca y tapas", desc: "Snacks aptos para niños y refrescos ilimitados a bordo." },
                { icon: "🏝️", title: "Calas y cuevas escondidas", desc: "Rutas por la costa oeste y norte revelan rincones secretos." },
                { icon: "📸", title: "Fotos de aventura", desc: "Un barco de madera tradicional crea recuerdos inolvidables en familia." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <BoatTripComparisonTable
              rows={familyBoatTripComparison}
              title="Excursión familiar vs barco fiesta vs catamarán"
            />
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Por qué las familias eligen Salvador Ibiza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "👨‍👩‍👧‍👦", title: "Ambiente acogedor", desc: "Entorno seguro y familiar donde niños y adultos disfrutan juntos." },
                { icon: "🏊", title: "Zonas de baño seguras", desc: "Calas tranquilas elegidas cada día por el capitán para nadar en familia." },
                { icon: "🐠", title: "Experiencia educativa", desc: "Descubre fauna marina, cultura local y el entorno natural de Ibiza." },
                { icon: "🍎", title: "Comida para niños", desc: "Fruta fresca, tapas y refrescos sin alcohol para los más pequeños." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="font-bold text-green-800 mb-2">Seguridad ante todo</h3>
              <p className="text-green-700">
                Todos los niños reciben chalecos salvavidas y charla de seguridad. Nuestra tripulación está
                formada en protocolos de seguridad familiar.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <FAQ items={familyFaqItems} title="Preguntas frecuentes — excursiones en familia" />
          </section>

          <section className="mb-12 py-8">
            <TestimonialSlider
              testimonials={familyReviews}
              title="Lo que dicen las familias sobre Salvador Ibiza"
            />
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Reserva tu excursión en familia
            </h2>
            <p className="text-center text-gray-600 mb-6">
              80 € por adulto · Niños 6–12: 45 € · Bebés 0–5: gratis
            </p>
            <TurbnbWidget
              companyId={2}
              productId={2}
              billingTermIds={[]}
              channelId={11}
              customProperties={{
                displayBillingTerm: true,
                showQuantity: true,
                titleVariant: "Modern",
                bookNow: "RESERVAR EN FAMILIA",
                selectExperienceLabel: "Experiencia familiar",
                addonsLabel: "Extras",
                childrenAge: "6 a 12 años",
                infantAge: "0 a 5 años",
              }}
            />
          </section>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Más opciones para familias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/private-boat-trips"
                className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Charter privado en familia</h4>
                <p>El barco solo para vuestra familia, con ruta y horario a medida</p>
              </Link>
              <Link
                href="/boat-trips"
                className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Todas las excursiones</h4>
                <p>Explora todas nuestras opciones en barco</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
