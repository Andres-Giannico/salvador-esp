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
    process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://www.salvadoribiza.es'
  )
);

const englishSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_EN || 'https://www.salvadoribiza.com'
);

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
    additionalSitemaps: [`${englishSiteUrl}/sitemap.xml`],
  },
  transform: async (config, path) => {
    const rel = !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
    const es = absoluteForPath(siteUrl, rel);
    const en = absoluteForPath(englishSiteUrl, rel);
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: en, hreflang: 'en', hrefIsAbsolute: true },
        { href: es, hreflang: 'es', hrefIsAbsolute: true },
        { href: en, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    };
  },
};
