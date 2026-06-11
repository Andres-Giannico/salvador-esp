import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import { Toaster } from "sonner";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import EarlyBirdPromoModal from "@/components/EarlyBirdPromoModal";
import {
  absoluteUrl,
  getGaMeasurementId,
  getGtmId,
  getSiteUrl,
  pageAlternates,
} from "@/config/site";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getTouristAttractionSchema,
  getWebSiteSchema,
} from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const rootAlternates = pageAlternates("/");

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: rootAlternates,
  title: {
    default: "Salvador Ibiza — excursiones en barco y charter en Ibiza",
    template: "%s | Salvador Ibiza",
  },
  description:
    "Las mejores excursiones en barco y charter privado en Ibiza con Salvador. Salidas diurnas, al atardecer y experiencias memorables todo incluido.",
  keywords:
    "Salvador Ibiza, excursiones en barco Ibiza, charter privado Ibiza, paseos en barco, atardecer en barco, Es Vedrá, snorkel Ibiza",
  authors: [{ name: "Salvador Ibiza" }],
  creator: "Salvador Ibiza",
  openGraph: {
    title: "Salvador Ibiza — excursiones en barco y charter en Ibiza",
    description:
      "Excursiones en barco todo incluido y charter privado en Ibiza con tripulación profesional.",
    url: absoluteUrl("/"),
    siteName: "Salvador Ibiza",
    locale: "es_ES",
    alternateLocale: ["nl_NL", "en_US", "fr_FR"],
    type: "website",
    images: [
      {
        url: "/images/optimized/salvador-ibiza-boat-drone-view.webp",
        width: 1200,
        height: 630,
        alt: "Barco Salvador Ibiza en aguas de Ibiza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salvador Ibiza — excursiones en barco en Ibiza",
    description:
      "Excursiones en barco y charter privado en Ibiza. Reserva tu experiencia.",
    images: ["/images/optimized/salvador-ibiza-boat-drone-view.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = getGaMeasurementId();
  const gtmId = getGtmId();
  const localBusinessSchema = getLocalBusinessSchema();
  const touristAttractionSchema = getTouristAttractionSchema();

  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(touristAttractionSchema),
          }}
        />

        <Script
          id="google-tag-manager-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />

        <Script
          id="google-analytics-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Toaster position="top-center" richColors />
          <main className="flex-grow pt-20 md:pt-24 sm:pt-16">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <CookieConsentBanner />
        <EarlyBirdPromoModal />
      </body>
    </html>
  );
}
