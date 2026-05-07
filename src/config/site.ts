/**
 * Fuente única para dominio público (.es), alternativas EN / NL (hreflang) y emails.
 *
 * Producción:
 * - NEXT_PUBLIC_SITE_URL → https://www.salvadoribiza.es
 * - NEXT_PUBLIC_SITE_URL_EN → https://www.salvadoribiza.com
 * - NEXT_PUBLIC_SITE_URL_NL → https://www.salvadoribiza.nl
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
      "x-default": hreflangXDefaultUrl(canonicalPath),
    },
  };
}
