import HomePageContent from '@/components/HomePageContent';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata = esPageMetadata({
  title: 'Salvador Ibiza — excursiones en barco y charter en Ibiza',
  description:
    'Las mejores excursiones en barco y charter privado en Ibiza con Salvador. Salidas diurnas, al atardecer y experiencias memorables todo incluido.',
  path: '/',
  keywords:
    'Salvador Ibiza, excursiones en barco Ibiza, charter privado Ibiza, paseos en barco, atardecer en barco, Es Vedrá, snorkel Ibiza',
});

export default function HomePage() {
  return <HomePageContent />;
}
