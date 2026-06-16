'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiSun, FiClock, FiUsers, FiMapPin, FiCamera, FiHeart } from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import FAQ from '@/components/trips/FAQ';
import BoatTripComparisonTable from '@/components/trips/BoatTripComparisonTable';
import TestimonialSlider from '@/components/trips/TestimonialSlider';
import { sunsetBoatTripComparison } from '@/lib/boat-trip-comparison';
import { sunsetBoatTripFaqs } from '@/lib/topic-faqs';
import { sunsetReviews } from '@/lib/topic-reviews';

const sunsetFaqItems = sunsetBoatTripFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

const highlights = [
  {
    icon: <FiSun className="w-6 h-6 text-orange-500" />,
    title: 'La hora dorada',
    description: 'Ibiza vista desde el mejor sitio para el ocaso: el mar abierto ante la costa oeste.',
  },
  {
    icon: <FiClock className="w-6 h-6 text-blue-500" />,
    title: '3 horas a medida del atardecer',
    description:
      'Ventana vespertina pensada para disfrutar del tramo dorado antes de que el sol caiga tras el perfil Poniente.',
  },
  {
    icon: <FiUsers className="w-6 h-6 text-green-500" />,
    title: 'Experiencia en grupo compartida',
    description:
      'Comparte cubierta con otros viajeros en la misma excursión; ambiente cómodo y tripulación de apoyo.',
  },
  {
    icon: <FiMapPin className="w-6 h-6 text-red-500" />,
    title: 'Miradores marítimos',
    description:
      'Los mejores encuadres varían día a día según condiciones meteorológicas; el capitán elige rutas cómodas y seguras.',
  },
  {
    icon: <FiCamera className="w-6 h-6 text-purple-500" />,
    title: 'Momentos muy fotográficos',
    description: 'Luz cálida sobre el Mediterráneo: ideal para foto y vídeo sin tener que estar pendiente del tiempo en tierra.',
  },
  {
    icon: <FiHeart className="w-6 h-6 text-pink-500" />,
    title: 'Plan romántico o especial',
    description: 'Sirve para parejas, celebraciones o simplemente un atardecer lento desde la cubierta del Salvador.',
  },
];

const galleryImages = [
  {
    src: '/images/optimized/friends-ibiza-sunset-boat.webp',
    alt: 'Grupo disfrutando del atardecer en excursión en barco Ibiza',
  },
  {
    src: '/images/optimized/drinks-cave-sunset-ibiza.webp',
    alt: 'Copa durante crucero vespertino en Ibiza',
  },
  {
    src: '/images/boat/doschicassupsunset.webp',
    alt: 'Dos personas en tabla SUP durante excursión al atardecer',
  },
  { src: '/images/optimized/ibiza-sunset-boat-trip-salvador.webp', alt: 'Puesta de sol en Ibiza desde el barco Salvador' },
  {
    src: '/images/optimized/es-vedra-island-ibiza-background.webp',
    alt: 'Atardecer con Es Vedrà en el horizonte',
  },
  {
    src: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
    alt: 'Navegación al atardecer en aguas de Ibiza',
  },
];

export default function SunsetBoatTripsClientPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-pink-50 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/optimized/sunset-sailing-cruise-ibiza.webp"
            alt="Excursión al atardecer en barco en Ibiza con Salvador Ibiza"
            fill
            priority
            className="object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </motion.div>

        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block text-orange-300 uppercase tracking-widest font-medium text-sm md:text-base border border-orange-300/30 bg-orange-900/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Atardeceres Ibiza
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
            Excursiones barco atardecer <span className="text-orange-400">Ibiza</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            Salidas vespertinas de <span className="font-semibold text-orange-300">3 horas</span>: el Mediterráneo como
            butaca para vivir ese ocaso que la isla lleva años mostrando al mundo.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <motion.div
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FiClock className="mr-2 text-orange-300" />
              <span>Habitual vespertino (consulta disponibilidad en el calendario)</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FiUsers className="mr-2 text-orange-300" />
              <span>Desde 80 € por persona</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link
              href="#booking"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-lg shadow-[0_10px_25px_-5px_rgba(251,146,60,0.5)] transition duration-300 text-lg"
            >
              Reservar ocaso
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              El atardecer de Ibiza,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                en barco abierto al mar
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Con Salvador Ibiza organizamos salidas vespertinas que encajan la <strong>puesta de sol</strong> con el ritmo del
              mar: cubierta holgada, tripulación local y ese tramo donde el horizonte pasa por naranja, rosa y violeta antes de la
              noche tranquila sobre el agua.
            </p>
            <p className="text-md text-gray-600">
              Desde <strong>Sant Antoni</strong> navegamos hacia zonas donde el ángulo del sol y las condiciones
              suelen funcionar mejor para ver el día terminar desde el Poniente — siempre dentro de la seguridad
              marina y las ordenanzas locales. Entre medio: buena compañía, <strong>refrescos y tapeo
              español</strong>, y el rumor suave del mar contra el casco.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Qué hace la mejor excursión al atardecer en Ibiza?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Las mejores excursiones al atardecer en Ibiza salen a la hora adecuada para captar la hora dorada,
              siguen rutas costeras con vistas despejadas hacia el oeste y ofrecen un ambiente cómodo — ya busques
              romance, fotografía o una tarde relajada con amigos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              El crucero vespertino de 3 horas de Salvador Ibiza desde Sant Antoni incluye bar abierto, tapas,
              paradas de baño en calas preciosas y rutas hacia Cala Comte o Es Vedrà según las condiciones. Es una
              experiencia en barco de madera tradicional — relajada y auténtica, no un barco fiesta.
            </p>
          </motion.div>

          <motion.section
            className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BoatTripComparisonTable
              rows={sunsetBoatTripComparison}
              title="Atardecer: Salvador Ibiza vs barco fiesta vs catamarán"
            />
          </motion.section>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gray-50">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-4">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Galería al atardecer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.section
            className="mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FAQ items={sunsetFaqItems} title="Preguntas frecuentes — excursiones al atardecer" />
          </motion.section>

          <motion.section
            className="mb-16 py-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialSlider
              testimonials={sunsetReviews}
              title="Lo que dicen nuestros pasajeros sobre el atardecer"
            />
          </motion.section>

          <motion.div
            id="booking"
            className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Reserva tu salida al atardecer</h3>
            <p className="text-xl mb-8 opacity-90">
              Elige fecha y franja en el calendario: te mostramos disponibilidad al instante según canal de reserva.
            </p>

            <div className="max-w-2xl mx-auto">
              <TurbnbWidget
                companyId={2}
                productId={2}
                channelId={11}
                billingTermIds={[21]}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: 'Personas',
                  titleVariant: 'Modern',
                  bookNow: 'RESERVAR OCASO',
                  confirmReservationAndPay: 'CONFIRMAR Y PAGAR',
                  selectExperienceLabel: 'Salida al atardecer',
                  addonsLabel: 'Extras',
                  childrenAge: '6 a 12 años',
                  infantAge: '0 a 5 años',
                  depositObservation:
                    'Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">¿Listo para el atardecer en barco?</h4>
            <p className="text-lg text-gray-600 mb-8">
              Cada tarde es distinta; el mar y la luz hacen el resto. Echa un vistazo al resto de nuestras excursiones o
              escríbenos si necesitas orientación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/boat-trips"
                className="inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Ver todas las excursiones
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-gray-800 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
