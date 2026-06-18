"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiDollarSign, FiMusic, FiCompass, FiInfo, FiCamera, FiSun, FiAnchor } from 'react-icons/fi';
import { GiWaterSplash, GiPartyPopper } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Importamos nuestros componentes reutilizables
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { GoogleReview } from '@/services/googlePlaces'; // Import type

// Galería de imágenes para el viaje - Ampliada con fotos aéreas
const images = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Grupo divertido cubierta barco Salvador Ibiza" },
  { src: "/images/boat/parejaensup.webp", alt: "Pareja en paddle surf cerca del Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp", alt: "Salvador Ibiza en Cala Comte con invitados en paddleboard y kayak" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Explorando cuevas en paddle surf Ibiza" },
  { src: "/images/boat/gente-en-suo.webp", alt: "Grupo en paddle surf agua transparente Ibiza" },
  { src: "/images/boat/familiaensup.webp", alt: "Familia disfruta paddle surf juntos" },
  { src: "/images/optimized/salvador-ibiza-cala-comte-drone-sup-kayaks.webp", alt: "Vista aérea con dron del Salvador Ibiza en Cala Comte con paddleboards y kayaks" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Pareja haciendo snorkel mar turquesa" },
  { src: "/images/optimized/salvador-ibiza-cala-comte-clear-water-shadows.webp", alt: "Vista aérea del Salvador Ibiza en Cala Comte con agua turquesa y sombras de paddleboards" },
  { src: "/images/boat/chicasenproamuyfelicdes.webp", alt: "Amigos felices en la proa del barco" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Dos amigas tomando sol en cubierta" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Grupo admirando vistas desde la proa" },
  { src: "/images/boat/chicaensupparada.webp", alt: "Mujer de pie tranquila paddle surf" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Cuatro amigas gran tabla SUP gigante Salvador" },
  { src: "/images/boat/dos-chica-disfrutand.webp", alt: "Risas y brindis a bordo día en barco" },
];

// Aspectos destacados del viaje
const tripHighlights = [
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Rutas inteligentes",
    description:
      "El capitán adapta norte u oeste según mareas y tiempo para seguridad máxima y calas tranquilas ese día.",
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Mar y deporte",
    description: "Paddle surf, kayak, snorkel y chapuzón en pozas vírgenes mediterráneas.",
  },
  {
    icon: <GiPartyPopper className="w-6 h-6 text-orange-500" />,
    title: "Servicio amplio tipo todo incluido",
    description: "Tapeo español, fruta fresca y bar abierto en la modalidad anunciada: sangría, cerveza, vino o cava.",
  },
  {
    icon: <FiMusic className="w-6 h-6 text-purple-600" />,
    title: "Comodidad real",
    description: "Camastros, sombra, bar húmedo, baños cuidados y equipo de sonido claro en cubierta.",
  },
];

// Preguntas frecuentes específicas para este viaje
const tripFAQs = [
  {
    question: "¿A qué hora sale la excursión?",
    answer:
      "La excursión diurna mixta sale a las 14:00 desde el puerto de San Antonio. Llega con al menos 30 minutos de margen. El horario puede variar ligeramente según el mes.",
  },
  {
    question: "¿Qué incluye el precio?",
    answer:
      "Bebidas según la modalidad todo incluido (sangría, cerveza, vino, cava, refrescos y agua), tapas españolas y fruta, tablas paddle y kayaks, equipo de snorkel, camastros, sombra y equipo de sonido en cubierta.",
  },
  {
    question: "¿Precios y edades?",
    answer:
      "Adultos: 80 €. Niños de 6 a 12 años: 45 €. Menores de 6 años: gratis. Todas las edades son bienvenidas; disponemos de chalecos salvavidas en todos los tamaños.",
  },
  {
    question: "¿Qué debo llevar?",
    answer:
      "Bañador, toalla, protección solar alta, gafas de sol y gorra. Una cámara o funda acuática ayuda para las fotos. No está permitido traer comida ni bebida externa a bordo.",
  },
  {
    question: "¿Cuál es la ruta?",
    answer: (
      <>
        Recorremos la costa oeste cerca de puntos como Cala Bassa y Cala Conta, o combinamos con calas del norte —p. ej. Cala Salada y Punta Galera— si el mar lo permite. La elección final cada día la toma el capitán para priorizar seguridad y comodidad del grupo.
        <Link href="/routes" className="text-blue-600 hover:underline font-medium ml-1">
          Más sobre nuestras rutas.
        </Link>
      </>
    ),
  },
];

// Assuming a list/section displaying features exists
const featuresList = [
  "Equipo de snorkel completo",
  "Fruta fresca y snacks incluidos",
];

// Interface for props received from the server component - REMOVED props
interface DayTripClientPageProps {
  // initialReviews: GoogleReview[]; // Removed
  // error: string | null; // Removed
}

export default function DayTripClientPage({}: DayTripClientPageProps) {
  return (
    <div className="bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section - Full height with parallax effect */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp"
            alt="Excursión diurna Salvador Ibiza con invitados en paddleboard en Cala Comte"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: "50% 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 text-white text-center pt-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md">
            Excursión diurna <span className="text-blue-400">en barco Ibiza</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Auténtica atmósfera mediterránea a bordo del barco de madera balear Salvador
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiClock className="mr-2 text-blue-400" />
              <span>3 horas</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiMapPin className="mr-2 text-blue-400" />
              <span>San Antonio</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiDollarSign className="mr-2 text-blue-400" />
              <span>Todo incluido</span>
            </div>
          </div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Ver disponibilidad en vivo
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Tu día mediterráneo en el Salvador
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  Bienvenido a bordo: el Salvador es la referencia local para una{" "}
                  <strong>excursión en barco en Ibiza auténtica</strong>. Nuestro clásico de madera ofrece espacio,
                  sombra y buen rollo para el tour diurno mixto, pensado para cualquier edad.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Costas y calas espectaculares</h3>
                <p>
                  Cada salida es distinta. El <strong>capitán local</strong> lee viento y estado del mar y decide
                  navegar hacia combinaciones como <strong>Cala Salada y Punta Galera</strong> por el norte o{" "}
                  <strong>Cala Bassa y Cala Conta</strong> por el oeste, buscando baños tranquilos y vistas de
                  postal.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Diversión todo incluido</h3>
                <p>
                  Tres horas de{" "}
                  <strong>experiencia mediterránea completa</strong>: ideal solo, en pareja, familia o grupo.
                  Chapuzón, <strong>paddle, kayak y snorkel</strong>, o simplemente tumbarse con el{" "}
                  <strong>servicio de bar y tapas</strong> pensado para pasarlo bien sin estrés de organización extra.
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
              <TripGallery images={images} title="Momentos destacados día en barco" />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Detalles rápidos</h3>
                <p className="opacity-90">Aventura diurna amplia tipo todo incluido</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duración</h4>
                    <p className="text-gray-600">3 horas (14:00 – 17:00)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Embarque</h4>
                    <p className="text-gray-600">Puerto de Sant Antoni de Portmany, Ibiza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Aforo</h4>
                    <p className="text-gray-600">Hasta 35 pasajeros</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiPartyPopper className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Temporada</h4>
                    <p className="text-gray-600">Mayo a octubre</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-sm text-gray-500">Precio por persona</span>
                      <span className="text-3xl font-bold text-gray-900">€80</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-gray-500">Niños (6–12)</span>
                      <span className="text-xl font-semibold text-gray-700">€45</span>
                    </div>
                  </div>
                  <Link href="#booking-widget" className="block w-full">
                    <span className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Reservar esta excursión
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Plazas limitadas cada día
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="Qué hace especial esta salida" />
        </div>

       
        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Preguntas frecuentes excursión diurna" />
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
              Reserva tu <span className="text-blue-600">excursión diurna</span>
            </motion.h2>
            
            {/* Booking Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Garantías de reserva</h3>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "Reserva online sencilla",
                      "Confirmación inmediata",
                      "Condiciones de cancelación flexibles",
                      "Experiencia amplia tipo todo incluido",
                      "Tripulación experta y atención cercana",
                      "Señal online de 20 € por persona; el resto en efectivo a bordo el día de la salida.",
                    ].map((item, index) => (
                      <motion.li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Formas de pago</h3>
                  <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
                    <p className="font-medium mb-1">
                      Pago seguro con tarjetas principales, Apple Pay y Google Pay.
                    </p>
                    <p>Los cobros online los procesa Stripe de forma cifrada.</p>
                    <div className="mt-3 flex justify-center">
                      <Image src="/images/cards.webp" alt="Métodos de pago aceptados" width={280} height={40} className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="booking-widget"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-3 sm:p-6 md:p-8 border border-gray-100"
            >
              {/* Age Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Edades y precios</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
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
                id="turbnb-booking-2"
                companyId={2}
                productId={2}
                billingTermIds={[20]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: "Personas",
                  titleVariant: "Modern",
                  bookNow: "RESERVAR EXCURSIÓN DÍA",
                  selectExperienceLabel: "Experiencia diurna",
                  addonsLabel: "Extras",
                  childrenAge: "6 a 12 años",
                  infantAge: "0 a 6 años",
                  depositObservation:
                    "Tras reservar recibirás un voucher con punto de encuentro y hora. Revisa que tu teléfono y email sean correctos por si debemos contactarte. Se requiere una señal de 20 € por persona; el saldo restante se abona en efectivo a bordo.",
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg shadow-sm"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiInfo className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm md:text-base text-yellow-800">
                    <span className="font-medium">¿Una tarde mágica frente al mar?</span> Echa un vistazo a nuestra{" "}
                    <Link href="/boat-trips/sunset-trip" className="font-bold underline text-yellow-900 hover:text-yellow-600 transition-colors">
                      excursión al atardecer
                    </Link>{" "}
                    — el ocaso de Ibiza con bar y tapas en la misma filosofía Salvador.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
   {/* Reviews Section */}
   <div className="mb-20">
          <ReviewsSection />
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl overflow-hidden shadow-xl my-12">
          <div className="relative px-6 py-16 md:p-12 text-white text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para un día inolvidable?</h2>
              <p className="text-blue-100 text-lg">
                Asegura tu plaza y vive Ibiza desde el mar con el Salvador.
              </p>
            </div>
            <Link href="#booking-widget">
              <span className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Reservar aventura
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Related Boat Trips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Más <span className="text-blue-600">planes en barco</span> Ibiza
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Otras experiencias Salvador para combinar tu estancia en la isla
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/boat-trips/sunset-trip"
                className="block bg-gradient-to-br from-orange-500 to-pink-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiSun className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Excursión al atardecer</h3>
                </div>
                <p className="mb-4 opacity-90">El ocaso de Ibiza desde el mar, con música y ambientazo premium.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Mismo precio: 80 €</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/private-boat-trips"
                className="block bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiAnchor className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Charter privado</h3>
                </div>
                <p className="mb-4 opacity-90">Barco íntegro solo para tu grupo con ruta flexible.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Desde 1.350 €</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/boat-trips/family"
                className="block bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiUsers className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Familia</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Rutas tranquilas pensadas para familias: tiempo en cala, equipo de snorkel y seguridad ante todo.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Tarifas niños</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/boat-trips"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Ver todas las excursiones
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 