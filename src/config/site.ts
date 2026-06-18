/**
 * Fuente única para dominio público (.es), alternativas EN / NL (hreflang) y emails.
 *
 * Producción:
 * - NEXT_PUBLIC_SITE_URL → https://www.salvadoribiza.es
 * - NEXT_PUBLIC_SITE_URL_EN → https://www.salvadoribiza.com
 * - NEXT_PUBLIC_SITE_URL_NL → https://www.salvadoribiza.nl
 * - NEXT_PUBLIC_SITE_URL_FR → https://www.salvadoribiza.fr
 *
 * Opcional: NEXT_PUBLIC_HREFLANG_X_DEFAULT=nl|en — por defecto en (.com) como x-default.
 */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

/** Corrige typo histórico (salvadoreiviza.es) si viene en variables de entorno. */
function normalizeLegacyEsHost(url: string): string {
  return url.replace(/salvadoreiviza\.es/gi, "salvadoribiza.es");
}

/** URL canónica del sitio en español (sin barra final en el host) */
export function getSiteUrl(): string {
  return stripTrailingSlash(
    normalizeLegacyEsHost(
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.salvadoribiza.es"
    )
  );
}

export function getEnglishSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_EN || "https://www.salvadoribiza.com"
  );
}

export function getDutchSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_NL || "https://www.salvadoribiza.nl"
  );
}

export function getFrenchSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_FR || "https://www.salvadoribiza.fr"
  );
}

export function getContactEmail(): string {
  return normalizeLegacyEsHost(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@salvadoribiza.es"
  );
}

export function getPartnersEmail(): string {
  return normalizeLegacyEsHost(
    process.env.NEXT_PUBLIC_PARTNERS_EMAIL || "partners@salvadoribiza.es"
  );
}

export function getGaMeasurementId(): string {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SP4LMTQT3E";
}

export function getGtmId(): string {
  return process.env.NEXT_PUBLIC_GTM_ID || "GTM-MZR67SFF";
}

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string): string {
  const p = normalizePath(path);
  const base = getSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function absoluteEnglishUrl(path: string): string {
  const p = normalizePath(path);
  const base = getEnglishSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function absoluteDutchUrl(path: string): string {
  const p = normalizePath(path);
  const base = getDutchSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function absoluteFrenchUrl(path: string): string {
  const p = normalizePath(path);
  const base = getFrenchSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

/** x-default: NL si NEXT_PUBLIC_HREFLANG_X_DEFAULT=nl; si no, inglés (.com). */
export function hreflangXDefaultUrl(path: string): string {
  const p = normalizePath(path);
  const useNl = process.env.NEXT_PUBLIC_HREFLANG_X_DEFAULT === "nl";
  const base = useNl ? getDutchSiteUrl() : getEnglishSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function publicAssetUrl(assetPath: string): string {
  const p = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${p}`;
}

export function pageAlternates(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonicalPath = normalizePath(path);
  const canonicalAbsolute = absoluteUrl(canonicalPath);
  return {
    canonical: canonicalAbsolute,
    languages: {
      nl: absoluteDutchUrl(canonicalPath),
      es: canonicalAbsolute,
      en: absoluteEnglishUrl(canonicalPath),
      fr: absoluteFrenchUrl(canonicalPath),
      "x-default": hreflangXDefaultUrl(canonicalPath),
    },
  };
}

export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export const businessContact = {
  name: "Salvador Ibiza",
  alternateName: "Salvador Boat Trips Ibiza",
  email: "info@salvadoribiza.com",
  phones: ["+34 871 181 393", "+34 681 611 598"] as const,
  whatsappNumber: "34871181393",
  registeredAddress: {
    streetAddress: "Avinguda del Doctor Fleming",
    addressLocality: "Sant Antoni de Portmany",
    addressRegion: "Illes Balears",
    postalCode: "07820",
    addressCountry: "ES",
  } satisfies PostalAddress,
  boardingPoint: {
    streetAddress: "Puerto de San Antonio",
    addressLocality: "San Antonio",
    addressRegion: "Ibiza",
    postalCode: "07820",
    addressCountry: "ES",
  } satisfies PostalAddress,
  geo: {
    latitude: "38.9804",
    longitude: "1.3026",
  },
  openingHours: {
    opens: "09:00",
    closes: "21:00",
  },
  /** Fallback estático; en runtime se refresca vía Places API (getGoogleAggregateRating). */
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "1604",
    bestRating: "5",
    worstRating: "1",
  },
  social: {
    instagram: "https://www.instagram.com/boatstripsinibiza/",
    facebook: "https://www.facebook.com/SalvadoIbizaBoat",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g652116-d6835309-Reviews-Salvador_Ibiza-Sant_Antoni_de_Portmany_Ibiza_Balearic_Islands.html",
    youtube: "https://www.youtube.com/watch?v=0SN3YMMwUEk",
    tiktok: "https://www.tiktok.com/@salvadoribiza",
  },
  priceRange: "€€",
  paymentAccepted: "Cash, Credit Card, Bizum",
} as const;

export function formatRegisteredAddress(): string {
  const a = businessContact.registeredAddress;
  return `${a.streetAddress}, ${a.postalCode} ${a.addressLocality}, ${a.addressRegion}`;
}
