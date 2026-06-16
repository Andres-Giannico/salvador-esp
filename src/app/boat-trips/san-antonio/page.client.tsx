'use client';

import Image from 'next/image';
import { FiMapPin, FiUsers, FiClock, FiStar, FiAnchor, FiSun, FiCompass, FiEye, FiDroplet, FiActivity, FiShield, FiGift } from 'react-icons/fi';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import TripGallery from '@/components/trips/TripGallery';
import WhatsIncluded from '@/components/trips/WhatsIncluded';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import CallToActionSection from '@/components/CallToActionSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { GalleryImage } from '@/components/trips/TripGallery';
import type { HighlightItem } from '@/components/trips/TripHighlights';
import type { FAQItem } from '@/components/trips/FAQ';

const sanAntonioImages: GalleryImage[] = [
  { src: '/images/optimized/ibiza-sunset-boat-trip-salvador.webp', alt: 'Atardecer en barco Sant Antoni con Salvador Ibiza' },
  { src: '/images/boat/chicasensupencueva.webp', alt: 'Paddle surf en calita cerca Sant Antoni' },
  { src: '/images/boat/doschicassupsunset.webp', alt: 'Paddle SUP al atardecer en bahía' },
  { src: '/images/optimized/drinks-cave-sunset-ibiza.webp', alt: 'Copas tranquilas cubierta al ocaso Ibiza' },
  { src: '/images/optimized/friends-ibiza-sunset-boat.webp', alt: 'Amigos celebrando ocaso Ibiza desde el mar' },
  { src: '/images/optimized/salvador-ibiza-boat-cave-exploration.webp', alt: 'Barco Salvador navegación cuevas costa' },
];

const highlights: HighlightItem[] = [
  {
    icon: <FiCompass className="text-blue-500" />,
    title: 'Explorar la bahía',
    description: 'Rutas por la bahía de Sant Antoni con paradas según el mar y el viento ese día.',
  },
  {
    icon: <FiEye className="text-orange-500" />,
    title: 'Atardecer desde el mar',
    description: 'Perspectiva única sobre la costa oeste y la franja del ocaso, muy fotografiada.',
  },
  {
    icon: <FiDroplet className="text-cyan-500" />,
    title: 'Aguas claras',
    description: 'Ideal para baños tranquilos y snorkel con guía de la tripulación.',
  },
  {
    icon: <FiActivity className="text-green-500" />,
    title: 'Paddle surf (SUP)',
    description: 'Tablas disponibles para el grupo en la misma experiencia compartida.',
  },
  {
    icon: <FiShield className="text-purple-500" />,
    title: 'Equipo de snorkel',
    description: 'Máscaras y tubos a bordo; chalecos en varias tallas.',
  },
  {
    icon: <FiGift className="text-pink-500" />,
    title: 'Bar y picoteo',
    description: 'Bebidas y tapeo según la modalidad “todo incluido” anunciada en la reserva.',
  },
];

const included = [
  { name: 'Patrón profesional local', description: 'Capitán habituado a la zona y a las salidas grupales.' },
  { name: 'Combustible y tasas de puerto', description: 'Incluidos en la tarifa anunciada, sin cargos típicos al embarcar.' },
  { name: 'Tablas SUP', description: 'Disponibles para el grupo durante la excursión compartida.' },
  { name: 'Snorkel', description: 'Máscaras y tubos en varios tamaños para uso durante la escala.' },
  { name: 'Bebidas y picoteo', description: 'En la modalidad “todo incluido”: refrescos y tapeo típico según temporada.' },
  { name: 'Música en cubierta (Bluetooth)', description: 'Puedes poner tus listas; volumen dentro de ordenanzas marítimas y costa.' },
  { name: 'Seguridad a bordo', description: 'Chalecos, equipo reglamentario y charla rápida al salir.' },
  { name: 'Seguro del servicio', description: 'Empresa autorizada para excursiones en barco por la costa pitiusa.' },
];

const faqs: FAQItem[] = [
  {
    question: '¿Qué hace especiales las salidas desde Sant Antoni?',
    answer:
      'Embarcar en la bahía es cómodo y el mar suele estar en calma; combinas baños, paddle, snorkel y el ambiente del ocaso de Ibiza sin largos traslados por carretera.',
  },
  {
    question: '¿Vemos la zona del atardecer conocida de la costa oeste?',
    answer:
      'Las rutas suelen acercarse a los mejores ángulos marítimos para el ocaso; el plan exacto lo marca el capitán cada día según meteorología y normas de puerto.',
  },
  {
    question: '¿Va bien para familias?',
    answer:
      'Sí: aguas tranquilas de bahía, equipo de snorkel y SUP, chalecos para niños y tripulación acostumbrada a grupos mixtos.',
  },
  {
    question: '¿Qué horario elegir, día u ocaso?',
    answer:
      'Ofrecemos salida diurna y salida al atardecer; en el motor de reserva eliges la franja que prefieras según disponibilidad del calendario.',
  },
];

export default function SanAntonioBoatTripsClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/optimized/ibiza-sunset-boat-trip-salvador.webp"
          alt="Excursiones barco Sant Antoni Ibiza Salvador"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Excursiones desde Sant Antoni
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            Bahía de Sant Antoni y el atardecer de Ibiza, desde el mar a bordo del Salvador
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiClock className="text-blue-300 text-sm sm:text-base" />
              <span>3 horas</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiUsers className="text-blue-300 text-sm sm:text-base" />
              <span>Hasta 35 personas</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiMapPin className="text-blue-300 text-sm sm:text-base" />
              <span>Bahía Sant Antoni</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiStar className="text-blue-300 text-sm sm:text-base" />
              <span>Valoración alta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-50 py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiAnchor className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Desde 80 €</div>
                <div className="text-xs sm:text-sm text-gray-600">por persona (consulta modalidad niños)</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiSun className="text-orange-500 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Atardeceres icónicos</div>
                <div className="text-xs sm:text-sm text-gray-600">Perspectiva desde el mar Poniente Ibiza</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiUsers className="text-green-600 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Grupo amplio mismo barco</div>
                <div className="text-xs sm:text-sm text-gray-600">Hasta ~35 personas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Reserva desde Sant Antoni</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Elige fecha y salida día u ocaso; recibirás punto encuentro habitual puerto mediante confirmación
              automática al reservar online.
            </p>
          </div>
          <TurbnbWidget
            companyId={2}
            productId={2}
            billingTermIds={[]}
            channelId={11}
            className="max-w-4xl mx-auto"
            customProperties={{
              displayBillingTerm: true,
              showQuantity: true,
              quantity: 'Personas',
              titleVariant: 'Modern',
              bookNow: 'RESERVAR SALIDA',
              confirmReservationAndPay: 'CONFIRMAR Y PAGAR',
              selectExperienceLabel: 'Salida desde Sant Antoni',
              addonsLabel: 'Extras',
              childrenAge: '6 a 12 años',
              infantAge: '0 a 5 años',
              depositObservation:
                'Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).',
            }}
          />
        </div>
      </section>

      <TripHighlights title="Qué destacamos en esta ruta" items={highlights} />

      <TripGallery images={sanAntonioImages} title="Galería experiencia Sant Antoni" />

      <WhatsIncluded items={included} title="Incluye en estas salidas" />

      {/* Description Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Por qué reservar en Sant Antoni con Salvador Ibiza
            </h2>

            <div className="prose prose-base sm:prose-lg max-w-none">
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                La <strong>bahía de Sant Antoni</strong> combina rapidez al embarque, aguas habituales de calma para
                bañarse y un horizonte muy reconocido al atardecer. El Salvador te acerca esas vistas desde cubierta, con la
                tripulación habitual de la temporada.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Naturaleza cerca del puerto
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                En pocas millas aparecen rincones para chapuzón, paddle y snorkel. El capitán elige ese día la combinación más
                segura y cómoda para el grupo, respetando el entorno portuario y otros fondeos.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Parejas, familia y amigos</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                El ritmo suele ser relajado: tiempo en cala, música a volumen comedido en cubierta y el bar y tapeo dentro de la
                modalidad todo incluido que hayas contratado. Los niños suelen estar cómodos con el mar en bahía.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Salidas al atardecer en el Poniente
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Las franjas vespertinas aprovechan la luz sobre la bahía y el Poniente de Ibiza. Es un momento relajado en
                cubierta: brindis, vistas y ese color característico del ocaso antes de volver al puerto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <FAQ items={faqs} title="Preguntas frecuentes Sant Antoni" />

      <CallToActionSection />

      <WhatsAppButton />
    </div>
  );
}
