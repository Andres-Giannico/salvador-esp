/**
 * Fuente única para dominio público (.es), sitio inglés alterno (hreflang) y emails.
 * Overrides: NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_URL_EN, NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_PARTNERS_EMAIL
 */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

/** URL canonica del sitio en español (sin barra final) */
export function getSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL || "https://salvadoribiza.es"
  );
}

/** Sitio inglés para alternates/hreflang (mismos paths si se mantienen slugs EN) */
export function getEnglishSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_EN || "https://salvadoribiza.com"
  );
}

export function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@salvadoribiza.es";
}

export function getPartnersEmail(): string {
  return process.env.NEXT_PUBLIC_PARTNERS_EMAIL || "partners@salvadoribiza.es";
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

/** Para Metadata.alternates: canonical relativo + hreflang bilateral */
export function pageAlternates(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonical = normalizePath(path);
  return {
    canonical,
    languages: {
      es: absoluteUrl(canonical),
      en: absoluteEnglishUrl(canonical),
      "x-default": absoluteEnglishUrl(canonical),
    },
  };
}
