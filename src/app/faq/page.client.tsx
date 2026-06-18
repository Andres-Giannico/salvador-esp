"use client";

import Link from "next/link";
import { FiHelpCircle, FiAnchor, FiDollarSign, FiCompass } from "react-icons/fi";
import { GiWaveSurfer, GiSailboat } from "react-icons/gi";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/trips/FAQ";
import { discoverabilityFaqs } from "@/lib/discoverability-faqs";
import {
  familyBoatTripFaqs,
  sunsetBoatTripFaqs,
  snorkelingBoatTripFaqs,
} from "@/lib/topic-faqs";

const topicGuideFaqs = [
  ...familyBoatTripFaqs.slice(0, 4),
  ...sunsetBoatTripFaqs.slice(0, 3),
  ...snorkelingBoatTripFaqs.slice(0, 3),
];

const planningFaqs = discoverabilityFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

const generalFaqs = [
  {
    question: "¿Qué excursiones en barco ofrecéis?",
    answer: (
      <>
        Ofrecemos salidas compartidas como la{" "}
        <Link href="/boat-trips/day-trip" className="text-cyan-600 hover:underline font-medium">
          excursión diurna mixta
        </Link>{" "}
        y la mágica{" "}
        <Link href="/boat-trips/sunset-trip" className="text-orange-600 hover:underline font-medium">
          excursión al atardecer
        </Link>
        . También charters{" "}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          privados totalmente personalizables
        </Link>
        .
      </>
    ),
  },
  {
    question: "¿Cuánto duran las salidas?",
    answer:
      "Las excursiones diurnas y al atardecer suelen durar unas tres horas. Los charters privados se pueden adaptar a tu agenda (habitualmente mínimo 3 horas).",
  },
  {
    question: "¿Qué rutas recorréis normalmente?",
    answer: (
      <>
        Según el día, la costa oeste (zona Cala Comte/Cala Conta) o norte (Sa Foradada), con baños en calas como Cala Gració o vistas a Cala Salada. Consulta también nuestra página de{" "}
        <Link href="/routes" className="text-blue-600 hover:underline font-medium">
          rutas
        </Link>
        . En el{" "}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          charter privado
        </Link>{" "}
        el itinerario es flexible dentro de la zona náutica operativa.",
      </>
    ),
  },
  {
    question: "¿Dónde es el punto de encuentro?",
    answer: (
      <>
        Puerto de Sant Antoni. Ubicación y mapa detallados en{" "}
        <Link href="/contact" className="text-blue-600 hover:underline font-medium">
          contacto
        </Link>
        . Confirmamos hora exacta embarque al tener la reserva cerrada.",
      </>
    ),
  },
];

const pricingFaqs = [
  {
    question: "¿Qué incluye el precio?",
    answer: (
      <>
        Excursiones compartidas: capitán, tripulación, combustible, bar abierto tipo estándar
        (refrescos, cerveza, vino blanco/tinto espumoso, sangría agua/fruta/roja/blanca si aplica según temporada), tapas y fruta fresca,
        equipo de snorkel y material paddle/kayaks según página de la experiencia.
        Las{" "}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          privadas
        </Link>{" "}
        admiten mejoras gastronómicas o marcas superiores bajo solicitud.",
      </>
    ),
  },
  {
    question: "¿Podemos traer comida o bebida propia?",
    answer: (
      <>
        Comida de fuera sí, muy habitual en charters privados.{" "}
        <strong>Las consumiciones alcohólicas o refrescos externos no están permitidas</strong> porque
        ya ofrecemos bar abierto generoso durante la excursión. Tartas especiales u opciones veggie se
        comentan al reservar.",
      </>
    ),
  },
  {
    question: "¿Cómo puedo reservar?",
    answer: (
      <>
        Ideal{" "}
        <Link href="/book-now" className="text-blue-600 hover:underline font-medium">
          reservar online
        </Link>{" "}
        con widgets seguros disponibles para{" "}
        <Link href="/boat-trips/day-trip" className="text-cyan-600 hover:underline font-medium">
          día
        </Link>
        ,{" "}
        <Link href="/boat-trips/sunset-trip" className="text-orange-600 hover:underline font-medium">
          atardecer
        </Link>{" "}
        y{" "}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          charters privados
        </Link>
        . Recibirás voucher confirmando punto y horarios.",
      </>
    ),
  },
  {
    question: "¿Política de cancelación?",
    answer:
      "Según tipo de entrada y tiempo de antelación podrá aplicarse cancelación gratuita total o parcial. Revisa también el bloque contractual del proveedor booking o pregútanos antes de pagar.",
  },
];

const onboardFaqs = [
  {
    question: "¿Cuál es la capacidad máxima?",
    answer: (
      <>
        Depende del producto contratado. Consulta{" "}
        <Link href="/boat-trips" className="text-blue-600 hover:underline font-medium">
          excursiones
        </Link>{" "}
        o{" "}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          charters privados
        </Link>{" "}
        donde indicamos ocupación recomendada y legal.",
      </>
    ),
  },
  {
    question: "¿Hay baños a bordo?",
    answer: "Sí — servicio sanitario marinizado para comodidad de todos durante la navegación.",
  },
  {
    question: "¿Hay sombras en cubierta?",
    answer:
      "Sí, todas las configuraciones llevan zonas cubiertas tipo biminí para refrescarse del sol mediterráneo.",
  },
  {
    question: "¿Hay música?",
    answer:
      "Equipo multimedia con bluetooth para llevar tus listas desde el teléfono respetando límites de volumen prudentes puerto-mar.",
  },
];

const safetyFaqs = [
  {
    question: "¿Hay que tener experiencia náutica?",
    answer:
      "No. Nosotros llevamos el timón; tú sólo ocupate de divertirte y aplicar recomendaciones básicas de seguridad marcadas.",
  },
  {
    question: "¿Es seguro para niños?",
    answer:
      "Sí — chalecos disponibles tallas infantiles si nos avisan edades con antelación. Tripulación atenta especialmente zona baños libres.",
  },
  {
    question: "¿Qué llevar?",
    answer:
      "Bañador, toalla alta protección solar, gorra, gafas y cámara resistente al agua. Si padecés mareos leves: medicación preventiva previa mejor que durante la mar.",
  },
  {
    question: "¿Temporal adverso?",
    answer:
      "Por seguridad el capitán decide posponer. Intentamos fecha alternativa gratuita dentro stock disponible temporada; donde no aplique reposición devoluciones según política contratación.",
  },
];

const activityFaqs = [
  {
    question: "¿Incluye actividades náuticas?",
    answer:
      "Sí: material paddle surf (conjunto suficientemente amplio temporada alta), kyaks dobles y equipo snorkel tamaños variados están incluidos en paradas vigiladas nadando.",
  },
  {
    question: "¿Mascotas permitidas?",
    answer: (
      <>
        Salidas compartidas día/atardecer habitualmente exclusivas personas. Animales muy estudiados sólo charters{" "}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          privados
        </Link>{" "}
        solicitando antes según tamaño comportamiento otros pasajeros abordo.",
      </>
    ),
  },
  {
    question: "¿Qué idiomas habla la tripulación?",
    answer:
      "Trabajamos principalmente en español e inglés; muchas personas del equipo también se defienden en italiano u otros idiomas cuando la temporada multicultural lo pide.",
  },
  {
    question: "¿Qué diferencia real a Salvador Ibiza?",
    answer: (
      <>
        Por el barco de madera con carácter, las rutas cuidadas, las inclusiones muy completas en bebidas y gastronomía, y sobre todo un equipo que vive Ibiza desde el puerto cada verano —{" "}
        <Link href="/about" className="text-blue-600 hover:underline font-medium">
          conócenos mejor aquí
        </Link>
        .
      </>
    ),
  },
];

function CategoryIcon({
  icon,
  title,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-col items-center text-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
        {title}
      </h3>
    </div>
  );
}

export default function FAQClientPage() {
  const heroAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const categoriesAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const iconAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-blue-50">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-b from-white via-sky-50/50 to-transparent"></div>
          <div className="absolute w-[50vw] h-[50vh] rounded-full bg-cyan-200/20 -top-1/4 -left-1/4 blur-3xl opacity-70"></div>
          <div className="absolute w-[40vw] h-[40vh] rounded-full bg-blue-200/20 -bottom-1/4 -right-1/4 blur-3xl opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={heroAnimation} initial="initial" animate="animate" className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5">
              <span className="text-gray-900">Preguntas</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                frecuentes
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Dudas rápidas sobre reservas, horarios incluidos y seguridad antes de zarpar contigo Salvador Ibiza.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={categoriesAnimation}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20 max-w-5xl mx-auto"
          >
            <motion.div variants={iconAnimation}>
              <CategoryIcon icon={<GiSailboat className="w-8 h-8 text-blue-600" />} title="General" />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon icon={<FiDollarSign className="w-7 h-7 text-green-600" />} title="Precios" />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon icon={<FiAnchor className="w-7 h-7 text-cyan-600" />} title="A bordo" />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon icon={<FiHelpCircle className="w-7 h-7 text-orange-600" />} title="Seguridad" />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon icon={<GiWaveSurfer className="w-8 h-8 text-purple-600" />} title="Actividades" />
            </motion.div>
          </motion.div>

          <div className="space-y-16 max-w-4xl mx-auto">
            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiCompass className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Mejores excursiones por tema
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Respuestas rápidas — consulta las guías completas en nuestras páginas de{" "}
                <Link href="/boat-trips/family" className="text-green-600 hover:underline">
                  familias
                </Link>
                ,{" "}
                <Link href="/boat-trips/sunset-trip" className="text-orange-600 hover:underline">
                  atardecer
                </Link>{" "}
                y{" "}
                <Link href="/boat-trips/snorkeling" className="text-cyan-600 hover:underline">
                  snorkel
                </Link>
                .
              </p>
              <FAQ items={topicGuideFaqs} title="" />
            </motion.section>

            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiCompass className="w-6 h-6 text-violet-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Cómo elegir una excursión en barco en Ibiza
                </h2>
              </div>
              <FAQ items={planningFaqs} title="" />
            </motion.section>

            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <GiSailboat className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">General</h2>
              </div>
              <FAQ items={generalFaqs} title="" />
            </motion.section>

            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiDollarSign className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Precios y reservas</h2>
              </div>
              <FAQ items={pricingFaqs} title="" />
            </motion.section>

            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiAnchor className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Experiencia a bordo</h2>
              </div>
              <FAQ items={onboardFaqs} title="" />
            </motion.section>

            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiHelpCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Seguridad y preparativos</h2>
              </div>
              <FAQ items={safetyFaqs} title="" />
            </motion.section>

            <motion.section
              variants={sectionAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <GiWaveSurfer className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Actividades y más</h2>
              </div>
              <FAQ items={activityFaqs} title="" />
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-20 md:mt-28 max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden shadow-lg p-8 md:p-12">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M0 0h10v10H0V0zm10 10h10v10H10V10z'/%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="relative z-10 text-center md:flex items-center justify-between">
                <div className="md:max-w-lg mb-6 md:mb-0 md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">¿Seguimos charlando?</h2>
                  <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                    Escríbenos desde la página contacto si tu grupo tiene requisitos particulares o logística empresa.
                  </p>
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                    Ir a contacto
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
