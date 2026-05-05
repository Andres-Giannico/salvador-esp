import { Metadata } from 'next';
import BookNowClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata: Metadata = esPageMetadata({
  path: '/book-now',
  title: 'Reservar excursiones en barco | Salvador Ibiza',
  description:
    'Reserva online tu excursión en barco o charter privado en Ibiza con Salvador. Disponibilidad en tiempo real y pago seguro.',
});

export default function BookNowPage() {
  return <BookNowClientPage />;
}
