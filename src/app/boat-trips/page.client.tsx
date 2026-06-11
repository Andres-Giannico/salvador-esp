'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMapPin, FiUsers, FiGift, FiAnchor } from 'react-icons/fi';
import { Anchor, Coffee, Music, Camera } from 'lucide-react';
import TripCard from '@/components/ui/TripCard';
import ImageGallery from '@/components/gallery/ImageGallery';
import CallToActionSection from '@/components/CallToActionSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/trips/FAQ';
import BoatTripComparisonTable from '@/components/trips/BoatTripComparisonTable';
import { generalBoatTripComparison } from '@/lib/boat-trip-comparison';
import { generalBoatTripFaqs } from '@/lib/topic-faqs';

const generalFaqItems = generalBoatTripFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

// Updated trip data to match FeaturedTripsSection
const middayTrip = {
  imageUrl: "/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp",
  imageAlt: "Excursión diurna Salvador Ibiza",
  title: "Experiencia diurna",
  description: "Sol, mar y aventura en 3 horas.",
  isPopular: true,
  badgeText: "14:00 – 17:00",
  badgeBgColor: "bg-blue-500",
  features: [
    "15 tablas SUP y 2 kayaks",
    "Snorkel completo para todos",
    "Baños en aguas cristalinas",
    "Bar premium y sangría fresca",
    "Tapas españolas y fruta",
    "Sistema de sonido premium",
  ],
  price: "80 € / adulto",
  priceSubtext: "Niños 6–12: 45 € | Menores de 6: gratis",
  priceColor: "text-blue-600",
  ctaHref: "/boat-trips/day-trip#booking-widget",
  ctaBgColor: "bg-blue-600",
  ctaHoverBgColor: "hover:bg-blue-700",
  detailsHref: "/boat-trips/day-trip",
  detailsText: "Ver detalle",
};

const sunsetTrip = {
  imageUrl: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp",
  imageAlt: "Excursión al atardecer Salvador Ibiza",
  title: "Ruta al atardecer",
  description: "La puesta de sol de Ibiza desde el mejor escenario.",
  badgeText: "18:30 – 21:30",
  badgeBgColor: "bg-orange-500",
  features: [
    "Baño al ocaso en calas escondidas",
    "15 SUP y 2 kayaks",
    "Equipo snorkel",
    "Cava abierta y cóctel bar",
    "Selección tapas españolas",
    "Vistas premium del horizonte",
  ],
  price: "80 € / adulto",
  priceSubtext: "Niños 6–12: 45 € | Menores de 6: gratis",
  priceColor: "text-orange-600",
  ctaHref: "/boat-trips/sunset-trip#booking-widget",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip",
  detailsText: "Ver detalle",
};

const includedFeatures = [
  {
    icon: Anchor,
    title: "Capitán y tripulación",
    description:
      "Tripulación local que prioriza la seguridad y cuenta historias sobre cada rincón náutico.",
  },
  {
    icon: Coffee,
    title: "Bar y tapeo inspirado en España",
    description:
      "Bar abierto en la modalidad elegida más tapas, fruta fresca de temporada y bebidas sin alcohol disponibles durante la travesía.",
  },
  {
    icon: Music,
    title: "Música en cubierta",
    description:
      "Bluetooth para que pongas tus listas siempre dentro de niveles cómodos y respetuosos junto al puerto y las calas.",
  },
  {
    icon: Camera,
    title: "Vistas icónicas",
    description:
      "Paradas para fotografiar los acantilados y tonalidades características costa Poniente norte Ibiza.",
  },
];

const galleryImages = [
  {
    src: "/images/boat/chicaspasandolomuybien.webp",
    alt: "Grupo brindando en cubierta excursión Salvador Ibiza",
  },
  {
    src: "/images/boat/chicosdisfrutandoenproa.webp",
    alt: "Amigos en la proa del Salvador Ibiza navegando",
  },
  {
    src: "/images/boat/chicasensupencueva.webp",
    alt: "Exploración en paddle surf cerca de cuevas Ibiza",
  },
  {
    src: "/images/boat/doschicasfelicesenproa.webp",
    alt: "Dos personas disfrutan del sol en la proa",
  },
  {
    src: "/images/boat/parejasnorkeling.webp",
    alt: "Snorkel en pareja aguas cristalinas",
  },
  {
    src: "/images/optimized/toasting-drinks-ibiza-boat.webp",
    alt: "Brindis en la barra popa Ibiza",
  },
  {
    src: "/images/optimized/salvador-ibiza-cala-comte-red-deck-aerial.webp",
    alt: "Vista aérea con dron del Salvador Ibiza en las aguas turquesas de Cala Comte",
  },
  {
    src: "/images/boat/4chicasparadasentablaxxl.webp",
    alt: "Cuatro personas en tabla paddle gigante junto Salvador",
  },
];

export default function BoatTripsClientPage() {
  const scrollToTrip = (tripId: string) => {
    const element = document.getElementById(tripId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50/30 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 18,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <section className="relative h-[65vh] min-h-[450px] md:h-[75vh] md:min-h-[550px] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/optimized/salvador-ibiza-boat-drone-view.webp"
            alt="Barco Salvador Ibiza navegación preparado excursión Costa Poniente día"
            fill
            priority
            className="object-cover object-center brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
            Tu excursión ideal en <span className="text-cyan-400">barco Ibiza</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            Elige la experiencia{" "}
            <span className="font-semibold text-cyan-300">diurna tres horas todo incluido</span>{" "}
            o la mágica{" "}
            <span className="font-semibold text-cyan-300">ruta al atardecer</span> con Salvador Ibiza.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => scrollToTrip('day-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiSun className="text-orange-300" />
              <span>Experiencia diurna</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToTrip('sunset-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiMoon className="text-indigo-300" />
              <span>Ruta atardecer</span>
            </motion.button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg className="w-full h-16 md:h-24 fill-[#f8fafc]" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,37.1L48,34.4C96,31.7,192,26.2,288,31.7C384,37.1,480,53.4,576,55.2C672,57.1,768,44.4,864,37.1C960,29.9,1056,29.9,1152,31.7C1248,33.5,1344,37.1,1392,39L1440,40.8L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" />
          </svg>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Las dos grandes salidas Salvador: día o atardecer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La excursión <strong>Ibiza en barco Salvador</strong> se resume en dos formatos muy completos —
              mismo espíritu todo incluido, tripulación fija conocida temporada — eliges si prefieres
              chapuzón pleno sol mediodía o brindis cálido frente poniente tardío.
            </p>
            <p className="text-md text-gray-600">
              Navegamos hacia calas menos masificadas, con música a tu gusto, gastronomía balear a bordo y
              actividades acuáticas para todos los niveles. La tripulación adapta la ruta al mar y al grupo
              para que el día sea seguro, relajado y memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            <motion.div
              id="day-trip-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TripCard {...middayTrip} delay={0.1} />
            </motion.div>

            <motion.div
              id="sunset-trip-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TripCard {...sunsetTrip} delay={0.3} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿Cuál es la mejor excursión en barco en Ibiza?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Depende de tu grupo. Salvador Ibiza es ideal si buscas una experiencia{" "}
              <strong>todo incluido</strong> y relajada en un <strong>barco de madera tradicional</strong> con
              snorkel, paddle, kayaks, tapas y bar abierto — sin el ambiente de barco fiesta. Elige la excursión
              diurna para familias y aventura, o la de atardecer para la hora dorada.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 mb-12"
          >
            <BoatTripComparisonTable
              rows={generalBoatTripComparison}
              title="Salvador Ibiza vs barcos fiesta vs catamaranes"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FAQ items={generalFaqItems} title="Cómo elegir tu excursión en barco en Ibiza" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
          >
            <Link href="/boat-trips/family" className="p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors">
              <span className="font-semibold text-green-800">Excursiones en familia →</span>
            </Link>
            <Link href="/boat-trips/sunset" className="p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors">
              <span className="font-semibold text-orange-800">Excursiones al atardecer →</span>
            </Link>
            <Link href="/boat-trips/snorkeling" className="p-4 rounded-xl bg-cyan-50 border border-cyan-100 hover:bg-cyan-100 transition-colors">
              <span className="font-semibold text-cyan-800">Snorkel en barco →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Momentos a bordo del Salvador
            </h2>
            <p className="text-lg text-gray-700">
              Imágenes reales de nuestras salidas diurnas y al atardecer.
            </p>
          </motion.div>
          <ImageGallery images={galleryImages} className="max-w-6xl mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Incluido en cada excursión
            </h2>
            <p className="text-lg text-gray-600">
              Tú disfrutas; nosotros cuidamos del resto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-100/80 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5 text-blue-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Options - Parent to Child Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Otras <span className="text-blue-600">experiencias en barco</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encuentra la salida que mejor encaje contigo: atardeceres íntimos, familia, salidas desde San
              Antonio o la exclusividad de un charter privado.
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
                href="/boat-trips/sunset"
                className="block bg-gradient-to-br from-orange-500 to-pink-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiSun className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Atardeceres en barco</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Vive el ocaso más famoso de Ibiza desde el mar, con música suave y brindis al anochecer.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Ver página</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/boat-trips/san-antonio"
                className="block bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiMapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Salidas desde San Antonio</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Embarque cómodo en la bahía y acceso rápido a la costa oeste y sus calas icónicas.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Ver página</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/boat-trips/day"
                className="block bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiSun className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Excursiones de día</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Aventuras de sol alto con baños, snorkel y deportes acuáticos incluidos.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Ver página</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/boat-trips/family"
                className="block bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiUsers className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Viajes en familia</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Rutas pensadas para niños y adultos: seguridad, juegos y tiempo en cala para todos.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Ver página</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/boat-trips/all-inclusive"
                className="block bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiGift className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Todo incluido</h3>
                </div>
                <p className="mb-4 opacity-90">
                  Bebidas, comida, equipo y animación en un solo precio para no preocuparte de nada.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Ver página</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/private-boat-trips"
                className="block bg-gradient-to-br from-gray-700 to-gray-900 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiAnchor className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Charters privados</h3>
                </div>
                <p className="mb-4 opacity-90">
                  El barco solo para tu grupo: horarios flexibles y servicio personalizado.
                </p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Ver página</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
} 