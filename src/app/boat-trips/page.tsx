import BoatTripsClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { generalBoatTripFaqs } from '@/lib/topic-faqs';

export const metadata = esPageMetadata({
  path: '/boat-trips',
  title: 'Mejores excursiones en barco Ibiza — día y atardecer',
  description:
    'Descubre las mejores excursiones en barco en Ibiza con Salvador Ibiza: salidas todo incluido diurnas y al atardecer con paddle, snorkel, bar abierto y tapas. Compara opciones y reserva desde Sant Antoni.',
  keywords:
    'excursiones barco Ibiza, paseos en barco, atardecer en barco, snorkel Ibiza, barco todo incluido Ibiza',
});

const faqSchema = buildFaqPageSchema(generalBoatTripFaqs);

export default function BoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BoatTripsClientPage />
    </>
  );
}
