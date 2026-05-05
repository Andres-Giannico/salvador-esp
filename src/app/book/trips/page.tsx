import type { Metadata } from "next";
import BookTripsQrClient from "./page.client";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/book/trips",
  title: "Reserva desde caseta (QR)",
  description:
    "Flujo corto desde el stand físico Salvador Ibiza en el puerto: elige día o atardecer y confirma tu plaza disponible sistema integrado Turbnb.",
  robots: { index: false, follow: false },
});

export default function BookTripsQrPage() {
  return <BookTripsQrClient />;
}
