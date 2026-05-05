'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiChevronRight } from 'react-icons/fi';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  'boat-trips': 'Excursiones',
  'day-trip': 'Salida diurna',
  'sunset-trip': 'Atardecer',
  'private-boat-trips': 'Charters privados',
  'private-charter': 'Charter privado',
  'corporate-events': 'Eventos corporativos',
  about: 'Quiénes somos',
  contact: 'Contacto',
  partners: 'Colaboradores',
  weddings: 'Bodas',
  gallery: 'Galería',
  blog: 'Blog',
  faq: 'FAQ',
  'book-now': 'Reservar',
  routes: 'Rutas',
  book: 'Reservas',
  trips: 'Excursiones',
  flyer: 'Folleto',
  earnings: 'Ingresos para partners',
  turbookings: 'TurBookings',
  paddle: 'Paddle surf',
  snorkeling: 'Snorkel',
  'all-inclusive': 'Todo incluido',
  groups: 'Grupos',
  family: 'Familias',
  sunset: 'Atardecer en barco',
  day: 'Día',
  'san-antonio': 'San Antonio',
  'discover-love-at-sea': 'Descubre el amor en el mar',
  'hidden-coves-ibiza': 'Calas ocultas de Ibiza',
  'sunset-sailing-ibiza': 'Velero al atardecer',
  'ibiza-midday-magic-boat-trip': 'Magia del mediodía en barco',
};

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();

  if (items) {
    return (
      <nav aria-label="Migas de pan" className={`flex items-center space-x-2 text-sm ${className}`}>
        <Link
          href="/"
          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          aria-label="Inicio"
        >
          <FiHome className="w-4 h-4" />
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center space-x-2">
            <FiChevronRight className="w-4 h-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbItems: BreadcrumbItem[] = [];
  let currentPath = '';

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label =
      routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      label,
      href: currentPath,
    });
  });

  return (
    <nav aria-label="Migas de pan" className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href="/"
        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Inicio"
      >
        <FiHome className="w-4 h-4" />
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <FiChevronRight className="w-4 h-4 text-gray-400" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
