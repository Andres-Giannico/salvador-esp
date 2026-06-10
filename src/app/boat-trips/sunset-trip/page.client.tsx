"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiSunset, FiDollarSign, FiAnchor, FiCompass, FiInfo } from 'react-icons/fi';
import { GiWaterSplash, GiSparklingSabre } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Import our reusable components
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';

// Trip image gallery - Extended
const images = [
  { src: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp", alt: "Atardecer icónico desde el barco Salvador Ibiza" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Dos amigas en paddle surf al atardecer" },
  { src: "/images/boat/parejafeliz.webp", alt: "Pareja disfrutando del crucero al atardecer" },
  { src: "/images/optimized/salvador-ibiza-cala-comte-bow-lounge-aerial.webp", alt: "Vista aérea de la zona lounge de proa del Salvador Ibiza en Cala Comte" },
  { src: "/images/boat/chicasmuyfelices.webp", alt: "Grupo de amigos celebrando el atardecer en el barco" },
  { src: "/images/boat/chicassentadasdisfrutando.webp", alt: "Relax en cubierta contemplando el atardecer" },
  { src: "/images/boat/luigienproconchcas.webp", alt: "Capitán Luigi con invitados al atardecer" },
  { src: "/images/boat/chicassentadassup.webp", alt: "Sentadas en tablas paddle viendo el ocaso" },
  { src: "/images/optimized/salvador-ibiza-cala-comte-aerial-stern-sup.webp", alt: "Vista cenital del Salvador Ibiza en Cala Comte con invitado en paddleboard junto a la popa" },
  { src: "/images/boat/barcointerior.webp", alt: "Interior acogedor del Salvador al atardecer" },
  { src: "/images/boat/consolabarco.webp", alt: "Consola de gobierno del barco al atardecer" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Bebidas junto a cueva marina al atardecer" },
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Siluetas frente al cielo al atardecer" },
];

// Trip highlights - Removed Optional Photographer
const tripHighlights = [
  {
    icon: <FiSunset className="w-6 h-6 text-orange-600" />,
    title: "Crucero icónico al atardecer",
    description:
      "El atardecer de Ibiza desde el mar, posicionados frente a Café Mambo y Café del Mar.",
  },
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Rutas flexibles",
    description:
      "El capitán elige norte u oeste según el tiempo para las mejores vistas al ocaso.",
  },
  {
    icon: <GiSparklingSabre className="w-6 h-6 text-yellow-600" />,
    title: "Servicio tipo premium",
    description: "Bebidas ilimitadas (¡cava incluida!), tapas, fruta fresca y buena música.",
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Parada baño opcional",
    description: "Si el tiempo lo permite: baño, snorkel o paddle antes del momento dorado.",
  },
];

// Trip-specific FAQs
const tripFAQs = [
  {
    question: "¿A qué hora sale la excursión al atardecer?",
    answer:
      "La salida suele estar entre las 17:00 y las 18:30, según el mes, para coincidir con el mejor ocaso. La hora exacta se confirma al reservar. Llega con 30 minutos de margen.",
  },
  {
    question: "¿Cuál es la ruta?",
    answer: (
      <>
        El capitán elige la mejor ruta según el mar y el tiempo (norte: Cala Salada, Punta Galera; o oeste: Cala Bassa, Cala Conta). Siempre buscamos una buena posición frente a Café Mambo y Café del Mar para el atardecer.
        <Link href="/routes" className="text-blue-600 hover:underline font-medium ml-1">
          Más sobre nuestras rutas.
        </Link>
      </>
    ),
  },
  {
    question: "¿Qué comida y bebida incluye?",
    answer:
      "Bebidas ilimitadas (cerveza, vino, cava, sangría, refrescos, agua) y tapas al estilo español con fruta fresca.",
  },
  {
    question: "¿Hay actividades en el agua?",
    answer:
      "Sí, si el tiempo y el calendario lo permiten, paramos para baño, snorkel, paddle o kayak antes del momento del sol.",
  },
  {
    question: "¿Qué debo llevar?",
    answer:
      "Ropa cómoda, bañador (opcional), toalla, gafas de sol y algo de abrigo ligero: después del atardecer suele refrescar. No se permite comida ni bebida externa.",
  },
];

// Animation variants for staggering badges
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each badge appearing
      delayChildren: 0.5 // Wait a bit after title/subtitle before starting badges
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SunsetTripClientPage() {
  return (
    <div className="bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section - Revised */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/ibiza-sunset-boat-trip-salvador.webp"
            alt="Atardecer espectacular en Ibiza desde el barco Salvador"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 text-white text-center pt-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 text-shadow-[0_3px_5px_rgba(0,0,0,0.6)]"
          >
            Excursión mixta al <span className="text-orange-400">atardecer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Vive la magia del ocaso de Ibiza desde el mar, en nuestro barco de madera tradicional.
          </motion.p>
          {/* Feature Badges with Stagger Animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10" // Increased bottom margin
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiSunset className="mr-2 text-orange-400" />
              <span>Vistas de atardecer icónicas</span>
            </motion.div>
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiMapPin className="mr-2 text-orange-400" />
              <span>Frente a Café Mambo</span>
            </motion.div>
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiDollarSign className="mr-2 text-orange-400" />
              <span>Bebidas y tapas incluidas</span>
            </motion.div>
          </motion.div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(234, 88, 12, 0.4)" }} // Enhanced hover
              whileTap={{ scale: 0.95 }}
              // Larger button with icon
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Reserva experiencia al atardecer <FiAnchor className="ml-1 w-5 h-5"/>
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Trip overview grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main content column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">El estilo de vida ibicenco, al atardecer</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  Súbete al Salvador Ibiza para una <strong>tarde mágica en el mar</strong>. Nuestra excursión mixta al atardecer es una de las formas más emblemáticas de ver el sol caer sobre el agua, con buen rollo y paisajes espectaculares.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Una experiencia de atardecer inolvidable</h3>
                <p>
                  Según las condiciones del día, el capitán traza el mejor recorrido por la costa de Ibiza. Nos colocamos con buen criterio frente a los míticos <strong>Café Mambo y Café del Mar</strong> para el broche final. Brinda con cava mientras el sol toca el horizonte y el cielo se tiñe de color.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Más que un paseo en barco</h3>
                <p>
                  No es solo una salida: es un <strong>homenaje al Ibiza auténtico</strong>. Ideal para parejas, amigos y quien viaja solo; conecta, relájate y siente la isla blanca con música, ambiente y nuestro conocido <strong>open bar tipo todo incluido</strong>.
                </p>
              </div>
            </motion.div>

            {/* Trip Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <TripGallery images={images} title="Galería — momentos al atardecer" />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Detalles del tour</h3>
                <p className="opacity-90">Atardecer auténtico en el mar</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Horario</h4>
                    <p className="text-gray-600">Unas 3 horas (tarde)</p>
                    <p className="text-xs text-gray-500">Salida 17:00–18:30 (según temporada)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Salida</h4>
                    <p className="text-gray-600">Puerto de Sant Antoni, Ibiza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Aforo</h4>
                    <p className="text-gray-600">Hasta 35 pasajeros</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiSparklingSabre className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Incluye</h4>
                    <p className="text-gray-600">Bebidas, tapas, música, actividades*</p>
                    <p className="text-xs text-gray-500">*Actividades náuticas según mar y tiempo</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-sm text-gray-500">Precio por persona</span>
                      <span className="text-3xl font-bold text-gray-900">80 €</span>
                    </div>
                  </div>
                  <Link href="#booking-widget" className="block w-full">
                    <span className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Reservar esta experiencia
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">¡Siente la magia real de Ibiza!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="Por qué esta tarde es especial" />
        </div>

        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Preguntas frecuentes — atardecer" />
        </div>

        {/* Direct Booking Section */}
        <div className="my-20" id="booking-widget">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
            >
              Reserve ya tu <span className="text-orange-600">tour al atardecer</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-white rounded-xl p-6 border border-gray-100 shadow-md"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-3/4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Reserva rápida y sencilla.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Confirmación al instante.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Política de cancelación flexible.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Experiencia tipo todo incluido.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Tripulación experta y trato cercano.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">
                        <strong className="font-semibold">Pago online parcial</strong>
                        <span className="text-sm text-gray-500 ml-1">
                          (20 € por persona para reservar); el resto se abona a bordo el día de la salida.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 w-full lg:w-1/4">
                  <p className="font-medium mb-1">
                    Pago seguro con tarjetas principales, Apple Pay y Google Pay.
                  </p>
                  <p>Transacciones procesadas de forma segura con Stripe.</p>
                  <div className="mt-3 flex justify-center">
                    <Image src="/images/cards.webp" alt="Métodos de pago aceptados" width={280} height={40} className="object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-3 sm:p-6 md:p-8 border border-gray-100"
            >
              {/* Age Information */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Edades y tarifas</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span><strong>Adultos:</strong> 80 € / persona</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span><strong>Niños (6–12 años):</strong> 45 €</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span><strong>Bebés (0–5 años):</strong> gratis</span>
                  </div>
                </div>
              </div>

              {/* Turbnb Booking Widget */}
              <TurbnbWidget 
                companyId={2}
                productId={2}
                channelId={11}
                billingTermIds={[21]}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  titleVariant: "Modern",
                  bookNow: "RESERVAR ATARDECER",
                  confirmReservationAndPay: "CONFIRMAR Y PAGAR",
                  selectTimeLabel: "Hora del atardecer",
                  selectExperienceLabel: "Experiencia atardecer",
                  addonsLabel: "Extras",
                  childrenAge: "6 a 12 años",
                  infantAge: "0 a 5 años",
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg shadow-sm"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiInfo className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm md:text-base text-blue-800">
                    <span className="font-medium">¿Prefieres el día?</span> Echa un vistazo a nuestra popular{' '}
                    <Link href="/boat-trips/day-trip" className="font-bold underline text-blue-900 hover:text-blue-600 transition-colors">
                      excursión mixta de día
                    </Link>
                    : calas, baños y actividades con bebidas y tapas ilimitadas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
          {/* Reviews Section */}
          <div className="my-16">
          <ReviewsSection />
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-pink-500 rounded-2xl overflow-hidden shadow-xl my-12">
          <div className="relative px-6 py-16 md:p-12 text-white text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Una tarde mágica en el mar?</h2>
              <p className="text-orange-100 text-lg">
                No te pierdas el atardecer más espectacular de Ibiza. ¡Reserva tu plaza!
              </p>
            </div>
            <Link href="#booking-widget">
              <span className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Reserva experiencia al atardecer
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 