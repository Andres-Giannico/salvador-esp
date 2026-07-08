'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import {
  mergeTurboBookingCustomProperties,
  TURBNB_WIDGET_CSS,
  TURBNB_WIDGET_JS,
} from '@/lib/turbnb-widget-assets';
import { getActivePromo, promoAppliesToMixTrips, type ActivePromo } from '@/lib/active-promo';
import PromoBookingBanner from '@/components/booking/PromoBookingBanner';
import { getClientSiteLocale } from '@/lib/site-locale';

interface TurbnbWidgetProps {
  id?: string;
  companyId: number;
  productId: number;
  billingTermIds: number[];
  channelId: number;
  className?: string;
  customProperties?: {
    displayBillingTerm?: boolean;
    showQuantity?: boolean;
    quantity?: string;
    titleVariant?: string;
    bookNow?: string;
    selectExperienceLabel?: string;
    addonsLabel?: string;
    childrenAge?: string;
    infantAge?: string;
    depositObservation?: string;
  };
}

export default function TurbnbWidget({
  id = 'turbnb-booking-widget',
  companyId,
  productId,
  billingTermIds,
  channelId,
  className = '',
  customProperties = {
    displayBillingTerm: true,
    showQuantity: true,
    quantity: "Personas",
    titleVariant: "Modern",
    bookNow: "RESERVAR AHORA",
    selectExperienceLabel: "Tipo de experiencia",
    addonsLabel: "Extras",
    depositObservation:
      "Al completar la reserva recibirás un voucher con los detalles (punto de encuentro y horarios). Confirma que teléfono y email sean correctos. Se suele solicitar una señal de 20 € por persona; el saldo restante según las condiciones de la confirmación (habitualmente a bordo el día del viaje).",
  }
}: TurbnbWidgetProps) {
  const [activePromo, setActivePromo] = useState<ActivePromo | null>(null);

  useEffect(() => {
    setActivePromo(getActivePromo(new Date(), getClientSiteLocale()));
  }, []);

  const showPromoBanner = activePromo !== null && promoAppliesToMixTrips(productId);

  useEffect(() => {
    const initializeWidget = () => {
      if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
        const element = document.getElementById(id);
        if (element) {
          try {
            const turboBooking = new window.TurboBooking();
            turboBooking.run(element, {
              companyId,
              productId,
              billingTermIds,
              channelId,
              customProperties: mergeTurboBookingCustomProperties(customProperties),
            });
          } catch (error) {
            console.error("Error initializing booking widget:", error);
          }
        }
      }
    };

    if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
      initializeWidget();
    } else if (typeof window !== 'undefined') {
      window.addEventListener('turbnbLoaded', initializeWidget);
      return () => window.removeEventListener('turbnbLoaded', initializeWidget);
    }
  }, [id, companyId, productId, billingTermIds, channelId, customProperties]);

  return (
    <>
      <div className={`turbnb-widget-host w-full min-w-0 ${className}`}>
        {showPromoBanner ? (
          <PromoBookingBanner promo={activePromo} widgetId={id} />
        ) : null}
        <div id={id} className="w-full min-w-0" />
      </div>

      <Script
        src={TURBNB_WIDGET_JS}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('turbnbLoaded'));
          }
        }}
      />
      {TURBNB_WIDGET_CSS ? (
        <link href={TURBNB_WIDGET_CSS} rel="stylesheet" />
      ) : null}
    </>
  );
}
