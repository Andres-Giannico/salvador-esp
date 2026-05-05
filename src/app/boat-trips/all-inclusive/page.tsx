import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'All-Inclusive Boat Trips Ibiza (3 hours) | Everything Included | Salvador Ibiza',
  description: 'Ultimate all-inclusive boat trips in Ibiza with everything included: premium drinks, gourmet food, water sports, and professional crew. No hidden costs, pure relaxation.',
  keywords: 'all inclusive boat trips Ibiza, everything included boat tour, premium boat trip Ibiza, luxury boat experience, all inclusive cruise Ibiza',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/boat-trips/all-inclusive',
  },
  openGraph: {
    title: 'All-Inclusive Boat Trips Ibiza | Everything Included',
    description: 'Ultimate all-inclusive boat trips in Ibiza with premium drinks, gourmet food, water sports, and professional crew. No hidden costs.',
    url: 'https://salvadoreiviza.es/boat-trips/all-inclusive',
    images: [
      {
        url: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
        width: 1200,
        height: 630,
        alt: 'All-inclusive boat trip in Ibiza with Salvador - premium experience',
      }
    ],
  },
};

// JSON-LD structured data for all-inclusive boat trips
const allInclusiveBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "All-Inclusive Boat Trips Ibiza by Salvador",
  "description": "Ultimate all-inclusive boat trips in Ibiza with premium drinks, gourmet food, water sports, and professional crew. Everything included for the perfect day at sea.",
  "image": "https://salvadoreiviza.es/images/optimized/salvador-ibiza-boat-aerial-view.webp",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoreiviza.es/boat-trips/all-inclusive",
    "priceCurrency": "EUR",
    "price": "80",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "80",
      "priceCurrency": "EUR",
      "valueAddedTaxIncluded": "true"
    },
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "278"
  },
  "duration": "PT3H"
};

export default function AllInclusiveBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allInclusiveBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              All-Inclusive Boat Trips <span className="text-yellow-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Experience the ultimate <strong>all-inclusive boat trips in Ibiza</strong>. 
              Everything is included - premium drinks, gourmet food, water sports, and professional crew.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Everything Included - No Hidden Costs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Premium Open Bar</h3>
                    <p className="text-gray-600">Unlimited premium drinks: Spanish cava, sangria, beer, soft drinks, and water.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🍤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Gourmet Spanish Tapas</h3>
                    <p className="text-gray-600">Delicious selection of authentic Spanish tapas and fresh seasonal fruit.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🏄‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Water Sports Equipment</h3>
                    <p className="text-gray-600">15 premium paddle boards, 2 kayaks, and professional snorkeling gear.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">⚓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Professional Crew</h3>
                    <p className="text-gray-600">Expert captain and crew ensuring safety, service, and local insights.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Premium Sound System</h3>
                    <p className="text-gray-600">High-quality audio system with Bluetooth connectivity for your playlist.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Hidden Coves Access</h3>
                    <p className="text-gray-600">Exclusive access to secret swimming spots and pristine crystal-clear waters.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">💎 All-Inclusive Experience Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>No additional costs</strong> - everything is included in your ticket
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Premium service</strong> - dedicated crew attention throughout the trip
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Luxury amenities</strong> - comfortable seating and onboard facilities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Stress-free experience</strong> - just arrive and enjoy, we handle everything
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
                  alt="All-inclusive boat trip Ibiza - aerial view of Salvador boat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/tapastop.png"
                  alt="Gourmet Spanish tapas included in all-inclusive boat trip"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Reserva experiencia amplia todo incluido
              </h2>
              <TurbnbWidget
                companyId={2}
                productId={0}
                billingTermIds={[]}
                channelId={0}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: "Personas",
                  titleVariant: "Modern",
                  bookNow: "RESERVAR AHORA",
                  confirmReservationAndPay: "CONFIRMAR Y PAGAR",
                  selectTimeLabel: "Elige horario",
                  selectExperienceLabel: "Tipo de experiencia",
                  addonsLabel: "Extras",
                  childrenAge: "0 a 5 años",
                  infantAge: "0 a 5 años",
                  depositObservation:
                    "Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).",
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Premium Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/private-boat-trips"
                  className="block bg-yellow-600 text-white p-6 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Private All-Inclusive Charter</h4>
                  <p>Exclusive boat with personalized all-inclusive service</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">All Boat Trips</h4>
                  <p>Explore all our premium options</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 