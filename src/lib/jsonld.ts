import {
  getContactEmail,
  getSiteUrl,
  publicAssetUrl,
} from "@/config/site";

export function getLocalBusinessSchema() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TourOperator"],
    "@id": `${base}/#organization`,
    name: "Salvador Ibiza",
    alternateName: "Excursiones en barco Salvador Ibiza",
    description:
      "Excursiones en barco y charter privado en Ibiza con tripulación profesional: salidas diurnas, al atardecer y experiencias todo incluido.",
    url: base,
    telephone: "+34-871 181 393",
    email: getContactEmail(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Puerto de San Antonio",
      addressLocality: "San Antonio",
      addressRegion: "Ibiza",
      postalCode: "07820",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.9804",
      longitude: "1.3026",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "278",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Efectivo, tarjeta de crédito",
    areaServed: {
      "@type": "Place",
      name: "Ibiza, Islas Baleares, España",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "38.9804",
        longitude: "1.3026",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Salvador Ibiza",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excursiones diurnas en barco",
            description:
              "Salidas diurnas de 3 horas con baño, snorkel y refrescos incluidos",
          },
          price: "80",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excursiones al atardecer",
            description:
              "Cruceros al atardecer de 3 horas con copas y mejor luz dorada",
          },
          price: "80",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Charter de barco privado",
            description:
              "Alquiler exclusivo con itinerario personalizado y servicio premium",
          },
          price: "1350",
          priceCurrency: "EUR",
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/boatstripsinibiza/",
      "https://www.facebook.com/SalvadoIbizaBoat",
    ],
    logo: {
      "@type": "ImageObject",
      url: publicAssetUrl("/images/logo-salvador.png"),
      width: "300",
      height: "100",
    },
    image: [
      publicAssetUrl("/images/optimized/salvador-ibiza-boat-drone-view.webp"),
      publicAssetUrl("/images/optimized/salvador-ibiza-boat-aerial-view.webp"),
    ],
  };
}

export function getWebSiteSchema() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Salvador Ibiza",
    url: base,
    alternateName: "www.salvadoribiza.es",
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getTouristAttractionSchema() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${base}/#tourist-attraction`,
    name: "Excursiones en barco Salvador Ibiza",
    description:
      "Excursiones diurnas y cruceros al atardecer en barco de madera tradicional en Ibiza. Salidas todo incluido con baño, paddle surf, kayak y snorkel desde el puerto de Sant Antoni.",
    url: base,
    image: publicAssetUrl("/images/optimized/salvador-ibiza-boat-drone-view.webp"),
    touristType: ["Familias", "Parejas", "Grupos"],
    isAccessibleForFree: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Puerto de San Antonio",
      addressLocality: "San Antonio",
      addressRegion: "Ibiza",
      postalCode: "07820",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.9804",
      longitude: "1.3026",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "278",
      bestRating: "5",
      worstRating: "1",
    },
    provider: {
      "@id": `${base}/#organization`,
    },
  };
}

export function getOrganizationSchema() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "TourOperator"],
    name: "Salvador Ibiza",
    url: base,
    logo: publicAssetUrl("/images/logo-salvador.png"),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34 871 181 393",
      email: getContactEmail(),
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
  };
}
