import { Metadata } from 'next';
import BoatTripsClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata: Metadata = esPageMetadata({
  path: '/boat-trips',
  title: 'Excursiones en barco en Ibiza — día y atardecer | Salvador Ibiza',
  description:
    'Descubre excursiones en barco en Ibiza con Salvador: salidas todo incluido por el día y mágicas al atardecer. Paddle surf, snorkel, bar abierto y puestas de sol inolvidables. Reserva ahora.',
  keywords:
    'excursiones barco Ibiza, paseos en barco, atardecer en barco, snorkel Ibiza, barco todo incluido Ibiza',
});

export default function BoatTripsPage() {
  return <BoatTripsClientPage />;
}
