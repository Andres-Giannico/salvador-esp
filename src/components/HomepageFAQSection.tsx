'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQ from '@/components/trips/FAQ';
import type { FAQItem } from '@/components/trips/FAQ';

const homepageFaqs: FAQItem[] = [
  {
    question: '¿Qué excursiones en barco ofrecéis?',
    answer: (
      <>
        Ofrecemos salidas compartidas como la{' '}
        <Link href="/boat-trips/day-trip" className="text-cyan-600 hover:underline font-medium">
          excursión diurna mixta
        </Link>{' '}
        y la mágica{' '}
        <Link href="/boat-trips/sunset-trip" className="text-orange-600 hover:underline font-medium">
          excursión al atardecer
        </Link>
        . También organizamos{' '}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          charters privados a medida
        </Link>
        .
      </>
    ),
  },
  {
    question: '¿Qué incluye el precio?',
    answer: (
      <>
        Capitán y tripulación, combustible, bar abierto (refrescos, cerveza, vino, cava, sangría, agua), tapas
        españolas y fruta, además de tablas SUP, kayaks y equipo de snorkel. En los{' '}
        <Link href="/private-boat-trips" className="text-purple-600 hover:underline font-medium">
          charters privados
        </Link>{' '}
        podéis añadir servicios premium.
      </>
    ),
  },
  {
    question: '¿Cuánto duran las salidas?',
    answer:
      'Las excursiones de día y al atardecer suelen durar unas 3 horas. Los charters privados se adaptan a vuestras preferencias (mínimo habitual 3 horas).',
  },
  {
    question: '¿Dónde es el punto de encuentro?',
    answer: (
      <>
        El embarque habitual es el puerto de San Antonio. Encontraréis ubicación y mapa en nuestra{' '}
        <Link href="/contact" className="text-blue-600 hover:underline font-medium">
          página de contacto
        </Link>
        . Os confirmamos la hora exacta al recibir la reserva.
      </>
    ),
  },
  {
    question: '¿Cómo reservo?',
    answer: (
      <>
        Recomendamos{' '}
        <Link href="/book-now" className="text-blue-600 hover:underline font-medium">
          reservar online por la web
        </Link>{' '}
        con disponibilidad en tiempo real y pago seguro. Tras comprar recibiréis voucher con todos los datos.
      </>
    ),
  },
  {
    question: '¿Qué debemos llevar?',
    answer:
      'Bañador, toalla, protección solar, gorra y gafas de sol — y la cámara para immortalizar la jornada. Si sufrís mareo, mejor medicación previa.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function HomepageFAQSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-sky-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full opacity-25 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-3 md:mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Respuestas claras antes de zarpar con Salvador Ibiza
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <FAQ items={homepageFaqs} title="" compact />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm md:text-base rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
          >
            <span>Ver todas las FAQ</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
