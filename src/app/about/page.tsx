import { Metadata } from 'next';
import AboutClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata: Metadata = esPageMetadata({
  path: '/about',
  title: 'Quiénes somos | Salvador Ibiza',
  description:
    'Conoce la historia de Salvador Ibiza: excursiones y charter premium en el Mediterráneo, con confort y tripulación profesional.',
});

export default function AboutPage() {
  return <AboutClientPage />;
}
