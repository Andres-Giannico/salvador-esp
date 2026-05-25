/** @type {import('next-sitemap').IConfig} */

function stripTrailingSlash(url) {
  return url.replace(/\/+$/, '');
}

/** Corrige dominio `.es` mal escrito en SITE_URL/NEXT_PUBLIC_SITE_URL heredadas. */
function normalizeLegacyEsHost(url) {
  if (!url || typeof url !== 'string') return url;
  return url.replace(/salvadoreiviza\.es/gi, 'salvadoribiza.es');
}

const siteUrl = stripTrailingSlash(
  normalizeLegacyEsHost(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      'https://www.salvadoribiza.es'
  )
);

const englishSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_EN || 'https://www.salvadoribiza.com'
);

const dutchSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_NL || 'https://www.salvadoribiza.nl'
);

const frenchSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_FR || 'https://www.salvadoribiza.fr'
);

const xDefaultBase =
  process.env.NEXT_PUBLIC_HREFLANG_X_DEFAULT === 'nl'
    ? dutchSiteUrl
    : englishSiteUrl;

function absoluteForPath(base, pathname) {
  if (!pathname || pathname === '/') return `${base}/`;
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${p}`;
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/book/trips', '/book/flyer'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${englishSiteUrl}/sitemap.xml`,
      `${dutchSiteUrl}/sitemap.xml`,
      `${frenchSiteUrl}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    const rel =
      !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
    const es = absoluteForPath(siteUrl, rel);
    const en = absoluteForPath(englishSiteUrl, rel);
    const nl = absoluteForPath(dutchSiteUrl, rel);
    const fr = absoluteForPath(frenchSiteUrl, rel);
    const xDefault = absoluteForPath(xDefaultBase, rel);
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: nl, hreflang: 'nl', hrefIsAbsolute: true },
        { href: en, hreflang: 'en', hrefIsAbsolute: true },
        { href: es, hreflang: 'es', hrefIsAbsolute: true },
        { href: fr, hreflang: 'fr', hrefIsAbsolute: true },
        { href: xDefault, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    };
  },
};
