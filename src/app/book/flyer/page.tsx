import type { Metadata } from "next";
import BookTripsQrFlyerClient from "./page.client";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/book/flyer",
  title: "Reserva rápida (folleto QR) | Salvador Ibiza",
  description:
    "Acceso rápido para completar tu reserva de excursión en barco con Salvador Ibiza desde material impreso QR.",
  keywords: "reservar barco Ibiza, QR folleto Salvador, reserva día atardecer",
  robots: { index: false, follow: false },
  ogImage: "/images/optimized/salvador-ibiza-boat-aerial-view.webp",
  ogImageAlt: "Reserva rápida Salvador Ibiza",
});

export default function BookTripsQrFlyerPage() {
  return <BookTripsQrFlyerClient />;
}
