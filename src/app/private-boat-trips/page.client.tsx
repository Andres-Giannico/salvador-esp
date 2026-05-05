'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiUsers, FiMap, FiGift, FiClock, FiDollarSign } from 'react-icons/fi';
import { motion, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';

// Componentes reutilizables
import BookingModal from '@/components/booking/BookingModal';
import TripGallery from '@/components/trips/TripGallery';
import FAQ from '@/components/trips/FAQ';
import WhatsIncluded from '@/components/trips/WhatsIncluded';
// import CharterDetailsCard from '@/components/trips/CharterDetailsCard'; // Removed unused import
import PerfectForCard from '@/components/trips/PerfectForCard';
import WhyChooseUsCard from '@/components/trips/WhyChooseUsCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { TURBNB_WIDGET_CSS, TURBNB_WIDGET_JS } from '@/lib/turbnb-widget-assets';

// --- Define Type for PerfectFor Items ---
type PerfectForItem = {
  icon: string; // Icon name as string
  title: string;
  description: string;
  color: string;
};

// --- Define Props Interface for the Client Page ---
interface PrivateBoatTripsClientPageProps {
  perfectFor: PerfectForItem[]; // Expecting the array passed from page.tsx
}

// --- Datos Específicos del Charter Privado ---

// Combinar imágenes originales y nuevas de la carpeta /images/boat/ y /images/boat/private-new/
const galleryImages = [
  { src: "/images/optimized/salvador-ibiza-boat-aerial-view.webp", alt: "Charter privado de lujo / grupo relajado en cubierta" },
  { src: "/images/optimized/salvador-ibiza-luxury-boat.webp", alt: "Vista desde el barco Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-drone.webp", alt: "Vista aérea del barco Salvador Ibiza" },
  { src: "/images/optimized/es-vedra-island-ibiza-background.webp", alt: "Atardecer cerca de Es Vedrà" },
  { src: "/images/optimized/salvador-ibiza-boat-deck.webp", alt: "Bebidas servidas en charter Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-cave-exploration.webp", alt: "Vista desde el interior de una cueva marina en Salvador Ibiza" },
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Grupo disfrutando del atardecer en Salvador Ibiza" },
  { src: "/images/boat/chicasentablasup.png", alt: "Paddle surf junto a acantilados desde Salvador Ibiza" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Copa de cava en crucero al atardecer en Salvador Ibiza" },
  { src: "/images/optimized/happy-friends-boat-stern-ibiza.webp", alt: "Grupo feliz en la popa del Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-tapas-service.webp", alt: "Detalle de tapas servidas en Salvador Ibiza" },
  { src: "/images/optimized/toasting-drinks-ibiza-boat.webp", alt: "Brindis en la barra del barco Salvador Ibiza" },
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Tapas y cava en la popa del barco" },
  { src: "/images/boat/private-new/tapasenbarco_1.webp", alt: "Selección de tapas a bordo" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Sushi y cava en la popa" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Interior del barco Salvador" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Fruta fresca en la barra del barco" },
  { src: "/images/boat/private-new/retretebarcoomg_1.webp", alt: "Aseo moderno a bordo" },
  { src: "/images/boat/private-new/tapasyfrutasenbarco_1.webp", alt: "Tapas y fruta en la barra" },
  { src: "/images/boat/private-new/retretebarco_1.webp", alt: "Baño limpio y moderno del barco" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Popa del Salvador con aro salvavidas" },
  { src: "/images/boat/private-new/barcosalvadorinterior_1.webp", alt: "Interior del barco con banquetas" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Botella de cava y copas en cubierta" },
  { src: "/images/boat/private-new/interiorbarcocubierta_1.webp", alt: "Zona de cubierta cubierta del barco" },
];

const faqs = [
  {
    question: "¿Cuál es el aforo máximo?",
    answer:
      "El Salvador está homologado para hasta 35 invitados más tripulación, con espacio holgado para tu grupo.",
  },
  {
    question: "¿Cómo funcionan las rutas?",
    answer:
      "La ruta es flexible. Suelen cubrirse la costa oeste (p. ej. Cala Bassa, Cala Conta) o el norte (p. ej. Cala Salada, Punta Galera). Puedes indicar preferencias; la decisión final depende del tiempo y el mar. El capitán elige siempre la opción más segura y agradable.",
  },
  {
    question: "¿Qué incluye exactamente?",
    answer:
      "Uso exclusivo del barco, capitán y tripulación, combustible estándar, bebidas (cerveza, vino, cava, sangría, refrescos, agua), snack, fruta, paddle surf, kayak y equipo de snorkel.",
  },
  {
    question: "¿Duración y precios?",
    answer:
      "El charter estándar son 4 horas (media jornada). Precio base desde 1.350 € (mayo/octubre) o 1.650 € (junio–septiembre), más 30 € por persona en barra. Se pueden sumar hasta 2 horas extra (500 €/hora según disponibilidad) en la reserva. No incluye IVA 21 %.",
  },
  {
    question: "¿Qué horarios hay?",
    answer:
      "El bloque de 4 horas se ofrece en franja diurna o atardecer, elegibles al reservar. Las horas extra se añaden en el proceso. Para salidas matutinas específicas, escríbenos: requieren coordinación.",
  },
  {
    question: "¿Podemos llevar comida o contratar catering?",
    answer:
      "Puedes traer tu comida. Las bebidas externas no están permitidas: ofrecemos open bar estándar. Para subir de nivel, menú premium de tapas 35 €/pax (+ IVA) u otras opciones de catering: consúltanos.",
  },
];

// Data for WhatsIncluded, using simple IncludedItem format
const includedItems = [
  { name: "Barco en exclusiva (4 h)", description: "Salvador Ibiza solo para tu grupo" },
  { name: "Capitán y tripulación", description: "Servicio profesional y cercano" },
  { name: "Open bar estándar", description: "Cerveza, vino, cava, sangría, refrescos, agua" },
  { name: "Tapas ligeras y fruta", description: "Snack español y fruta fresca incluidos" },
  { name: "Equipo deportes náuticos", description: "Paddle surf, kayak, snorkel" },
  { name: "Equipo de sonido", description: "Conexión Bluetooth" },
  { name: "Combustible incluido", description: "Rutas estándar cubiertas" },
  { name: "Seguridad y seguros", description: "Equipo y coberturas para todos a bordo" },
  {
    name: "Fotógrafo a bordo (opcional)",
    description: "Inmortaliza el día; fotos disponibles contra pago opcional después.",
  },
];

const charterWidgetStrings = {
  bookNow: "RESERVAR AHORA",
  confirmReservationAndPay: "CONFIRMAR Y PAGAR DEPÓSITO ",
  selectTimeLabel: "Horario preferido",
  selectExperienceLabel: "Opción de charter",
  addonsLabel: "Extras opcionales (p. ej. horas extra)",
  depositObservation:
    "Asegúrate de indicar el número correcto de invitados: el precio se calcula por persona. Tras la reserva recibirás el voucher con ubicación y detalles.",
} as const;

// --- Componente Principal de la Página Cliente ---
export default function PrivateBoatTripsClientPage({ perfectFor }: PrivateBoatTripsClientPageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDirectWidget, setShowDirectWidget] = useState(false);
  
  // Carga dinámica del CSS del widget
  useEffect(() => {
    const linkId = 'turbnb-widget-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = TURBNB_WIDGET_CSS;
      document.head.appendChild(link);
      console.log('Turbnb CSS link added to head');
    }
  }, []);

  // Scroll effect for manual tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Create a motion value for scroll
  const y = useMotionValue(0);
  useEffect(() => {
    y.set(scrollY);
  }, [scrollY, y]);

  // --- NEW: Handler function for booking buttons ---
  const handleBookButtonClick = () => {
    setShowDirectWidget(true);
    // Ensure the element exists and scroll to it
    // Use requestAnimationFrame or setTimeout to wait for potential DOM update
    requestAnimationFrame(() => {
       const widgetSection = document.getElementById('direct-booking-section');
        if (widgetSection) {
          widgetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback if element not found immediately (e.g., first click)
          setTimeout(() => {
            const widgetSectionRetry = document.getElementById('direct-booking-section');
            if (widgetSectionRetry) {
               widgetSectionRetry.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150); // Slightly longer delay for fallback
        }
    });
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  // Parallax effect values using y motion value
  const heroScale = useTransform(y, [0, 300], [1, 1.15]);
  const heroYTransform = useTransform(y, [0, 300], [0, 150]);
  const heroOpacity = useTransform(y, [0, 300], [1, 0.5]);

  // Floating animation variants with correct TypeScript types
  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: { 
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 3,
        ease: "easeInOut" as const
      }
    }
  };

  // Update widget initialization
  useEffect(() => {
    if (typeof window === 'undefined' || !showDirectWidget) return;
    
    const initializeWidget = () => {
      const widgetElement = document.getElementById('turbnb-booking-3'); 
      if (typeof window.TurboBooking !== 'undefined' && widgetElement) {
        try {
          widgetElement.innerHTML = ''; 
          const turbo3 = new window.TurboBooking();
          turbo3.run(widgetElement, {
            companyId: 2,
            productId: 3,
            channelId: 11,
            customProperties: {
              "displayBillingTerm": true, 
              "showQuantity": false, 
              "titleVariant": "Modern",
              ...charterWidgetStrings,
            }
          });
          console.log('Direct Charter Widget Initialized');
        } catch (error) {
          console.error("Error initializing direct charter widget:", error);
        }
      }
    };

    // Initialize widget after a short delay (maybe link it to script load?)
    const scriptLoadTimeout = setTimeout(initializeWidget, 500); // Adjusted delay
    
    return () => clearTimeout(scriptLoadTimeout);
    
  }, [showDirectWidget]);

  return (
    <>
      {/* Script ahora maneja la carga y podemos usar onLoad para inicializar */}
      <Script 
        src={TURBNB_WIDGET_JS}
        strategy="afterInteractive"
        onLoad={() => {
           console.log('TurboBooking script loaded via Next Script');
           // Intentar inicializar el widget si debe ser visible
           if (showDirectWidget) {
              const widgetElement = document.getElementById('turbnb-booking-3');
              if (typeof window.TurboBooking !== 'undefined' && widgetElement) {
                 try {
                   widgetElement.innerHTML = ''; 
                   const turbo3 = new window.TurboBooking();
                   turbo3.run(widgetElement, {
                     companyId: 2,
                     productId: 3,
                     channelId: 11,
                     customProperties: {
                      "displayBillingTerm": true,
                      "showQuantity": false,
                      "titleVariant": "Modern",
                      ...charterWidgetStrings,
                    }
                   });
                   console.log('TurboBooking widget initialized directly in page on script load');
                 } catch (error) {
                   console.error('Error initializing TurboBooking widget on script load:', error);
                 }
              } else {
                 console.warn('Widget container not ready on script load, useEffect will retry.');
              }
           }
        }}
        onError={(e) => {
            console.error('Error loading TurboBooking script:', e);
        }}
      />

      <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 relative">
        {/* Decorative Elements */}
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
            className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"
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
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-bl from-amber-100 to-yellow-200 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20,
              delay: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ 
              scale: heroScale,
              y: heroYTransform,
              opacity: heroOpacity
            }}
          >
            <Image
              src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
              alt="Charter privado en Ibiza a bordo del Salvador"
              fill
              priority
              className="object-cover object-center filter brightness-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </motion.div>
          
          <motion.div
            className="relative z-10 container mx-auto px-4 text-center pt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="inline-block text-cyan-300 uppercase tracking-widest font-medium text-sm md:text-base border border-cyan-300/30 bg-cyan-900/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Experiencia premium
            </motion.span>
            
            <motion.h1 
              className="relative text-4xl md:text-5xl lg:text-7xl font-extrabold mb-5 drop-shadow-xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* SVG Background Pattern */}
              <motion.div 
                className="absolute -inset-4 -inset-y-2 z-[-1] overflow-hidden opacity-15"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <path d="M0,10 C30,10 30,30 0,30 C-30,30 -30,10 0,10 Z" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                </svg>
              </motion.div>
              
              <span className="relative z-10"> 
                Tu charter privado<br className="hidden md:block" /> 
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  en Ibiza, en exclusiva
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-lg font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Momentos únicos, libertad total y un día a medida en el Mediterráneo.
            </motion.p>
            
            {/* Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <motion.div 
                className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <FiUsers className="mr-2 text-cyan-300" />
                <span>Hasta 35 invitados</span>
              </motion.div>
              <motion.div 
                className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <FiMap className="mr-2 text-cyan-300" />
                <span>Rutas seleccionadas</span>
              </motion.div>
              <motion.div 
                className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <FiGift className="mr-2 text-cyan-300" />
                <span>Ideal grupos y eventos</span>
              </motion.div>
            </motion.div>
            
            {/* Botones - Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                id="hero-book-button"
                onClick={handleBookButtonClick}
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] transition duration-300 text-lg"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px -5px rgba(59,130,246,0.6)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                Reserva charter ahora
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
            <svg className="w-full h-16 md:h-24 fill-white dark:fill-gray-900" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
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

        {/* Direct Booking Widget Section - ADD ID HERE */}
        {showDirectWidget && (
          <motion.section
            id="direct-booking-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 bg-white py-12 border-t border-b border-gray-200 shadow-inner"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Reserva charter privado</h2>
                  <button 
                    onClick={() => setShowDirectWidget(false)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Cerrar widget de reserva"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Mensaje aclaratorio para visitantes */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-800">
                        <span className="font-medium">Importante:</span> estás contratando un{" "}
                        <strong>charter privado (todo el grupo)</strong>.
                        Para plazas en excursiones compartidas visita{" "}
                        <Link href="/boat-trips" className="font-medium underline ml-1 hover:text-blue-600">
                          excursiones Salvador
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* This is the widget container */}
                <div id="turbnb-booking-3" className="min-h-[400px] w-full bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"></div>

                {/* Premium Upgrade Note - NUEVA UBICACIÓN */}
                <motion.div
                  className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg max-w-4xl mx-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }} // Pequeño delay para que aparezca después del widget
                >
                  <p className="text-sm text-blue-800">
                    <strong>Extras:</strong> puedes sumar el menú premium de tapas (35 €/pax + IVA) o botellas de destilados (55 €/botella + IVA, incluye mezcladores). ¡Consúltanos!
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.section>
        )}

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Columna Principal (2/3) */}
            <motion.div 
              className="lg:col-span-2 space-y-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Sección de Descripción */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute -top-10 -left-10 w-20 h-20 text-blue-100 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z" />
                    </svg>
                  </motion.div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
                  Tu oasis privado <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">en el mar</span>
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="leading-relaxed">
                    Sal de la rutina y sube el listón de tus vacaciones en Ibiza con libertad y comodidad de verdad. Un charter privado en el histórico Salvador es la puerta a calas escondidas, aguas turquesas y momentos que solo compartes con quien tú elijas: el barco entero para tu grupo.
                  </p>
                  <p className="leading-relaxed">
                    Cumpleaños, familia, clientes o un día redondo en el mar: el charter privado es una de las formas más completas de vivir la magia de Ibiza. Nosotros cuidamos la logística; tú te quedas con el Mediterráneo.
                  </p>
                </div>
              </motion.section>

              {/* What's Included Section - Use simplified format */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <WhatsIncluded 
                  items={includedItems} // Use the simplified data format
                  title="Qué incluye tu charter privado"
                  // Pass specific styling props if needed, otherwise defaults will be used
                  bgColor="bg-teal-50"
                  textColor="text-teal-900"
                  borderColor="border-teal-200"
                  iconColor="text-teal-600"
                  gridCols="sm:grid-cols-2" // Adjusted grid cols
                />
              </motion.section>

              {/* Galería */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                 <TripGallery images={galleryImages} title="Galería del charter privado" />
              </motion.section>

              {/* FAQs */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <FAQ items={faqs} title="Preguntas frecuentes — charter privado" />
              </motion.section>
            </motion.div>

            {/* Sidebar (1/3 - Sticky) */}
            <aside className="lg:col-span-1">
              <motion.div 
                className="sticky top-28 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Charter Details Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-6 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">Detalles y reserva del charter</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                            <FiClock className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Duración:</span>
                        </div>
                        <span className="text-gray-900">4 h (+ hasta 2 extra)</span>
                      </div>
                      
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
                            <FiUsers className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Capacidad:</span>
                        </div>
                        <span className="text-gray-900">Hasta 35 invitados</span>
                      </div>

                      <div className="pt-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                            <FiDollarSign className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Precios (4 h):</span>
                        </div>
                        <ul className="space-y-2 ml-11">
                          <li className="flex justify-between text-gray-600">
                            <span>Temporada baja:</span>
                            <span className="font-medium">1.350 € + 30 €/pax barra</span>
                          </li>
                          <li className="flex justify-between text-gray-600">
                            <span>Temporada alta:</span>
                            <span className="font-medium">1.650 € + 30 €/pax barra</span>
                          </li>
                          <li className="flex justify-between text-gray-600">
                            <span>Hora extra:</span>
                            <span className="font-medium">500 €</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ADD ID HERE */}
                    <button
                      id="sidebar-book-button"
                      onClick={handleBookButtonClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Reserva charter ahora
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      Precios sin IVA 21 %. Jornada completa y presupuestos a medida:{' '}
                      <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                        escríbenos
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Componente Why Choose Us Card */}
                <WhyChooseUsCard />
                
                {/* Componente Perfect For Card */}
                <PerfectForCard title="Ideal para…" items={perfectFor} />

              </motion.div>
            </aside>
          </div>
        </div>
        
        {/* Final call to action - ADD ID HERE */}
        <motion.section 
          className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-500 mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#wave-pattern)" />
              <defs>
                <pattern id="wave-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
                  <path d="M0,10 C30,10 30,30 0,30 C-30,30 -30,10 0,10 Z" fill="white" opacity="0.3" />
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tu día perfecto en Ibiza empieza en el mar?</h2>
              <p className="text-lg opacity-90 mb-8">
                Charter del elegante Salvador: recuerdos inolvidables con tu grupo
              </p>
              <motion.button
                id="cta-book-button"
                onClick={handleBookButtonClick}
                className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 text-lg hover:bg-opacity-95"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Reservar charter ahora
              </motion.button>
            </div>
          </div>
        </motion.section>
        
      </div>
      
      {/* Modal de reserva como opción alternativa */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={closeBookingModal}
            productId={3} // ID específico para Private Charter
            customProperties={{
              "displayBillingTerm": true,
              "showQuantity": false,
              "titleVariant": "Modern",
              ...charterWidgetStrings,
            }} // Propiedades customizadas según usuario
          />
        )}
      </AnimatePresence>
    </>
  );
} 