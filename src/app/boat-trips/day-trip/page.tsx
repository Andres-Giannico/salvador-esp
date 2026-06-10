import { Metadata } from 'next';
import DayTripClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata: Metadata = esPageMetadata({
  path: '/boat-trips/day-trip',
  title: 'Excursión diurna en barco Ibiza todo incluido',
  description:
    'Aventura de 3 h en Ibiza: bar abierto ilimitado, tapas españolas, 15 tablas paddle, snorkel y calas vírgenes. Desde 80 €. Reserva aquí.',
  keywords:
    'excursión barco Ibiza, día en barco, todo incluido Ibiza, paddle surf barco Ibiza',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
  ogImageAlt: 'Excursión diurna en barco Salvador Ibiza',
});

export default function DayTripPage() {
  return <DayTripClientPage />;
}
