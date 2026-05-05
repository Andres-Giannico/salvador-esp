import { Metadata } from 'next';
import CorporateEventsClientPage from './page.client';
import {
  FiBriefcase,
  FiUsers,
  FiSun,
  FiCheckCircle,
  FiAward,
  FiCoffee,
  FiHelpCircle,
} from 'react-icons/fi';
import { GiPartyPopper, GiTeamIdea } from 'react-icons/gi';
import { esPageMetadata } from '@/lib/page-meta';

export const metadata: Metadata = esPageMetadata({
  path: '/corporate-events',
  title: 'Eventos corporativos en Ibiza',
  description:
    'Team building, incentivos y entretenimiento de clientes a bordo de Salvador Ibiza: barco tradicional en Sant Antoni de Portmany.',
});

const corporateHighlights = [
  {
    icon: FiBriefcase,
    title: 'Entorno diferente',
    description:
      'Sal del convenio habitual e impresiona clientes y equipos con un espacio único sobre el Mediterráneo.',
  },
  {
    icon: GiTeamIdea,
    title: 'Espíritu de equipo',
    description:
      'Actividades que fomentan compañerismo en un ambiente relajado e inspirador frente al mar.',
  },
  {
    icon: FiAward,
    title: 'Incentivos',
    description:
      'Premia objetivos cumplidos con una jornada de lujo inolvidable para tu equipo destacado.',
  },
  {
    icon: FiCheckCircle,
    title: 'Discreto y profesional',
    description:
      'Tripulación con experiencia en grupos empresa: seguridad y servicio de primer nivel.',
  },
];

const idealForItems = [
  {
    icon: FiUsers,
    title: 'Team building',
    description: 'Ejercicios ligeros, relax compartido y convivencia en cubierta.',
    color: 'text-blue-500',
  },
  {
    icon: FiBriefcase,
    title: 'Clientes estratégicos',
    description: 'Reuniones informales y experiencias gastronómicas frente al mar.',
    color: 'text-purple-500',
  },
  {
    icon: FiAward,
    title: 'Viajes incentivados',
    description:
      'Reconocimiento público cuando el equipo marca resultados extraordinarios.',
    color: 'text-yellow-500',
  },
  {
    icon: GiPartyPopper,
    title: 'Celebraciones de empresa',
    description: 'Fiestas corporativas, aniversarios o hitos profesionales.',
    color: 'text-pink-500',
  },
  {
    icon: FiSun,
    title: 'Retiros ejecutivos',
    description:
      'Combina sesiones creativas en tierra firme con medio día al sol en alta mar.',
    color: 'text-orange-500',
  },
];

const includedFeatures = [
  {
    name: 'Charter privado 4 h',
    description: 'Uso exclusivo de Salvador Ibiza hasta 35 invitados',
  },
  {
    name: 'Capitán y tripulación',
    description: 'Tránsito cómodo y servicio cercano durante toda la jornada',
  },
  {
    name: 'Bar abierto estándar',
    description:
      'Refrescos, cerveza, vino blanco/rojo espumoso, sangría clara/roja y agua',
  },
  {
    name: 'Tapeo ligero',
    description: 'Tapas mediterráneas y fruta de temporada seleccionadas',
  },
  {
    name: 'Equipamiento náutico',
    description:
      'Paddle surf, kayak y equipo de snorkeling para todas las personas a bordo',
  },
  {
    name: 'Sonido Bluetooth',
    description: 'Sistema disponible para vuestros playlists ambientales',
  },
  {
    name: 'Ruta flexible',
    description: 'Orientación personalizada dentro de lo permitido meteorológico',
  },
  {
    name: 'Fotografía opcional',
    description:
      'Posibilidad de contratar fotógrafo profesional antes de zarpar por coste aparte.',
  },
];

const getIconName = (icon: unknown): string => {
  if (icon === FiBriefcase) return 'FiBriefcase';
  if (icon === GiTeamIdea) return 'GiTeamIdea';
  if (icon === FiAward) return 'FiAward';
  if (icon === FiCheckCircle) return 'FiCheckCircle';
  if (icon === FiUsers) return 'FiUsers';
  if (icon === GiPartyPopper) return 'GiPartyPopper';
  if (icon === FiSun) return 'FiSun';
  return 'FiHelpCircle';
};

export default async function CorporateEventsPage() {
  const highlightsProps = corporateHighlights.map((item) => ({
    ...item,
    icon: getIconName(item.icon),
  }));
  const idealForProps = idealForItems.map((item) => ({
    ...item,
    icon: getIconName(item.icon),
  }));

  return (
    <CorporateEventsClientPage
      highlights={highlightsProps}
      idealFor={idealForProps}
      included={includedFeatures}
    />
  );
}
