import { Metadata } from 'next';
import ContactClientPage from './page.client';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata: Metadata = esPageMetadata({
  path: '/contact',
  title: 'Contacto — Puerto de San Antonio',
  description:
    'Contacto Salvador Ibiza: puerto de San Antonio, teléfonos y mapa hasta el punto de encuentro.',
});

export default function ContactPage() {
  return <ContactClientPage />;
}
