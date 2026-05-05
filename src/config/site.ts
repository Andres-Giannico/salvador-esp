/**
 * Fuente única para dominio público (.es), sitio inglés alterno (hreflang) y emails.
 * Overrides: NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_URL_EN, NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_PARTNERS_EMAIL
 *
 * Canónico en producción: https://www.salvadoribiza.es (inglés: https://www.salvadoribiza.com).
 */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

/** Corrige typo histórico (salvadoreiviza.es) si viene en variables de entorno. */
function normalizeLegacyEsHost(url: string): string {
  return url.replace(/salvadoreiviza\.es/gi, 'salvadoribiza.es');
}

/** URL canónica del sitio en español (sin barra final en el host) */
export function getSiteUrl(): string {
  return stripTrailingSlash(
    normalizeLegacyEsHost(
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.salvadoribiza.es"
    )
  );
}

/** Sitio inglés para alternates/hreflang (mismos paths) */
export function getEnglishSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_EN || "https://www.salvadoribiza.com"
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

/** Ruta Next: '' o '/foo/bar' — siempre empieza por / excepto vacío que significa home */
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

/** Asset bajo `/public` como URL absoluta del sitio (JSON-LD, OG donde haga falta) */
export function publicAssetUrl(assetPath: string): string {
  const p = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${p}`;
}

/** Metadata alternates: canonical absoluta (.es) + hreflang bilateral */
export function pageAlternates(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonicalPath = normalizePath(path);
  const canonicalAbsolute = absoluteUrl(canonicalPath);
  return {
    canonical: canonicalAbsolute,
    languages: {
      es: canonicalAbsolute,
      en: absoluteEnglishUrl(canonicalPath),
      "x-default": absoluteEnglishUrl(canonicalPath),
    },
  };
}
