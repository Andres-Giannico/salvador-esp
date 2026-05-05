import { Metadata } from 'next';
import { WebPage, FAQPage, Question, WithContext } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import RoutesClientPage from './page.client';
import { FiMapPin, FiAnchor, FiCompass, FiHelpCircle } from 'react-icons/fi';
import { GiWaterSplash, GiFamilyHouse } from 'react-icons/gi';
import { esPageMetadata } from '@/lib/page-meta';
import { absoluteUrl, getSiteUrl } from '@/config/site';

export const metadata: Metadata = esPageMetadata({
  path: '/routes',
  title: 'Rutas en barco por Ibiza — costa oeste y norte',
  description:
    'Salimos desde Sant Antoni: costa oeste (Cala Comte / Cala Conta) u o norte (Sa Foradada). El capitán decide la ruta diaria más segura y espectacular.',
});

const westStopsData = [
  {
    icon: FiAnchor,
    title: 'Port des Torrent',
    description:
      'Playa muy tranquila, sombra de pinares y chapoteo inicial antes de zarpar cala abajo.',
  },
  {
    icon: GiFamilyHouse,
    title: 'Cala Bassa',
    description:
      'Arena blanca, aguas suaves y el ambiente cosmopolita del conocido CBbC (Cala Bassa Beach Club).',
  },
  {
    icon: FiCompass,
    title: 'Torre d\'en Rovira',
    description:
      'Mirador militar del siglo XVII: panorámicas de mar abierto vistas desde cubierta son impresionantes.',
  },
  {
    icon: GiWaterSplash,
    title: 'Cala Conta (Cala Comte)',
    description:
      'Icónica zona de pisos naturales, agua turquesa y atardeceres que ilustran toda postcard de Ibiza.',
  },
];

const northStopsData = [
  {
    icon: FiAnchor,
    title: 'Cala Gració / Gracioneta',
    description:
      'Calitas gemelas perfectas para un primer chapuzón rápido cerca del puerto de salida.',
  },
  {
    icon: FiMapPin,
    title: 'Pasando Cala Salada',
    description:
      'Famosa por tonalidades esmeralda y casetas de pescadores: espectacular desde mar abierto.',
  },
  {
    icon: GiWaterSplash,
    title: 'Cap Blanc («acuario»)',
    description:
      'Acantilados caprichosos y cuevas marinas naturales vistas durante la navegación norte.',
  },
  {
    icon: FiAnchor,
    title: 'Zona Sa Foradada',
    description:
      'Fondeamos con vistas al islote perforado para baños tranquilos rodeados de naturaleza.',
  },
];

const getIconName = (icon: unknown): string => {
  if (icon === FiAnchor) return 'FiAnchor';
  if (icon === GiFamilyHouse) return 'GiFamilyHouse';
  if (icon === FiCompass) return 'FiCompass';
  if (icon === GiWaterSplash) return 'GiWaterSplash';
  if (icon === FiMapPin) return 'FiMapPin';
  return 'FiHelpCircle';
};

export default async function RoutesPage() {
  const faqQuestion: Question = {
    '@type': 'Question',
    name: '¿Cómo elegís cada día la ruta?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'Según estado del mar y viento ese día, el capitán opta entre la línea occidental u septentrional. Ambos itinerarios garantizan calas vírgenes paradas snorkel memorables.',
    },
  };

  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [faqQuestion],
  };

  const pageSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Rutas en barco por Ibiza — costa oeste y norte',
    description:
      'Salimos desde Sant Antoni: costa oeste (Cala Comte / Cala Conta) u o norte (Sa Foradada). El capitán decide la ruta diaria más segura y espectacular.',
    url: absoluteUrl('/routes'),
    isPartOf: {
      '@type': 'WebSite',
      url: `${getSiteUrl()}/`,
    },
  };

  const questionName = String(faqQuestion.name ?? '');
  const answerText =
    faqQuestion.acceptedAnswer && 'text' in faqQuestion.acceptedAnswer
      ? String(faqQuestion.acceptedAnswer.text ?? '')
      : '';

  const westStopsProps = westStopsData.map((stop) => ({
    ...stop,
    icon: getIconName(stop.icon),
  }));
  const northStopsProps = northStopsData.map((stop) => ({
    ...stop,
    icon: getIconName(stop.icon),
  }));

  return (
    <>
      <JsonLd<WebPage> item={pageSchema} />
      <JsonLd<FAQPage> item={faqSchema} />
      <RoutesClientPage
        westStops={westStopsProps}
        northStops={northStopsProps}
        questionName={questionName}
        answerText={answerText}
      />
    </>
  );
}
