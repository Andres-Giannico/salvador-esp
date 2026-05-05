import { Metadata } from "next";
import PartnersClientPage from "./page.client";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/partners",
  title: "Colaboradores y TurBookings | Salvador Ibiza",
  description:
    "Red de partners, integraciones TurBookings y condiciones para agencias u hoteles que venden excursiones Salvador Ibiza en Ibiza.",
});

export default function PartnersPage() {
  return <PartnersClientPage />;
}
