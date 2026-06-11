'use client';

import { motion } from 'framer-motion';
import TripCard from './ui/TripCard';

const tripData = {
  middayTrip: {
    imageUrl: '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
    imageAlt: 'Excursión diurna Salvador Ibiza',
    title: 'Experiencia diurna',
    description: 'Sol, mar y diversión garantizados.',
    isPopular: true,
    badgeText: '14:00 – 17:00',
    badgeBgColor: 'bg-blue-700',
    features: [
      '15 tablas SUP y 2 kayaks premium',
      'Equipo de snorkel para todos',
      'Baños en aguas cristalinas',
      'Bar premium con sangría fresca',
      'Tapas españolas y fruta fresca',
      'Sistema de sonido premium',
    ],
    price: '80 € / adulto',
    priceSubtext: 'Niños 6–12: 45 € | Menores de 6: gratis',
    priceColor: 'text-blue-600',
    ctaHref: '/boat-trips/day-trip#booking-widget',
    ctaBgColor: 'bg-blue-600',
    ctaHoverBgColor: 'hover:bg-blue-700',
    detailsHref: '/boat-trips/day-trip',
    detailsText: 'Ver detalle',
    ctaText: 'Reservar excursión día — 80 €',
  },
  sunsetTrip: {
    imageUrl: '/images/optimized/ibiza-sunset-heart-gesture-salvador.webp',
    imageAlt: 'Excursión al atardecer Salvador Ibiza',
    title: 'Ruta al atardecer',
    description: 'El atardecer de Ibiza desde el mejor escenario.',
    badgeText: '18:30 – 21:30',
    badgeBgColor: 'bg-orange-700',
    features: [
      'Baño al atardecer en calas escondidas',
      '15 tablas SUP y 2 kayaks',
      'Snorkel',
      'Bar abierto con cava ilimitada',
      'Selección de tapas españolas',
      'Ambientación hasta la puesta del sol',
    ],
    price: '80 € / adulto',
    priceSubtext: 'Niños 6–12: 45 € | Menores de 6: gratis',
    priceColor: 'text-orange-700',
    ctaHref: '/boat-trips/sunset-trip#booking-widget',
    ctaBgColor: 'bg-orange-700',
    ctaHoverBgColor: 'hover:bg-orange-800',
    detailsHref: '/boat-trips/sunset-trip',
    detailsText: 'Ver detalle',
    ctaText: 'Reservar atardecer — 80 €',
  },
  privateCharter: {
    imageUrl: '/images/optimized/salvador-ibiza-cala-comte-wide-aerial-view.webp',
    imageAlt: 'Charter privado Salvador Ibiza',
    title: 'Experiencia privada',
    description: 'Tu aventura a medida.',
    badgeText: '4 horas base',
    badgeBgColor: 'bg-teal-700',
    features: [
      'Material completo deportes náuticos',
      'Baños exclusivos según itinerario',
      'Ruta y actividades personalizadas',
      'Bar abierto premium',
      'Opciones de catering exclusivas',
      'Hasta 35 invitados',
    ],
    price: 'Desde 1.350 €',
    priceSubtext: 'Invitados adicionales: 30 € / persona',
    priceColor: 'text-teal-700',
    ctaHref: '/private-boat-trips#turbnb-booking-3',
    ctaBgColor: 'bg-teal-700',
    ctaHoverBgColor: 'hover:bg-teal-800',
    detailsHref: '/private-boat-trips',
    detailsText: 'Solicitar información',
    ctaText: 'Solicitar charter privado',
  },
};

export default function FeaturedTripsSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white via-blue-50/10 to-transparent relative z-10">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">NUESTRAS EXPERIENCIAS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">Elige tu experiencia en barco en Ibiza</h2>
          <p className="text-lg text-gray-600">Excursiones compartidas todo incluido desde 80 € por adulto, o charters privados desde 1.350 €.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <TripCard
            {...tripData.middayTrip}
            delay={0.1}
            isPopular={tripData.middayTrip.isPopular}
            description={tripData.middayTrip.description}
          />
          <TripCard {...tripData.sunsetTrip} delay={0.2} description={tripData.sunsetTrip.description} />
          <TripCard
            {...tripData.privateCharter}
            delay={0.3}
            description={tripData.privateCharter.description}
            imageUnoptimized
          />
        </div>
      </motion.div>
    </section>
  );
}
