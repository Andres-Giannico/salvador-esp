import { Metadata } from "next";
import GalleryClientPage from "./page.client";
import { esPageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = esPageMetadata({
  path: "/gallery",
  title: "Galería Salvador Ibiza | Fotos excursiones en barco",
  description:
    "Imagenes reales día sol, atardecer, grupos snorkeling paddle privados barco Salvador — ibiza sant antoni vistas calas emblemáticas mediterranean lifestyle.",
});

interface GalleryImage {
  src: string;
  alt: string;
}

const allImages: GalleryImage[] = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Amigos bronce cubierta barco Salvador" },
  { src: "/images/boat/parejafeliz.webp", alt: "Pareja relajada prosecco tarde alta mar" },
  { src: "/images/boat/chicasmuyfelices.webp", alt: "Grupo celebración cubierta alegre Ibiza barco" },
  { src: "/images/boat/chicasagarrandofrutasdelabarra.webp", alt: "Fruta fresca barra open trip todo incluido" },
  { src: "/images/boat/parejaensup.webp", alt: "Pareja paddle tranquilos tras popa barco Salvador" },
  { src: "/images/boat/familiaensup.webp", alt: "Familia compartiendo tabla paddle gigante divertida" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Dos amigas solar proa vistas faro entrada bahía" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Cuatro chicas tabla XXL grupo risas foto dron" },
  { src: "/images/boat/chicasenproamuyfelicdes.webp", alt: "Proa grupo feliz medio día snorkeling previo chapuzón" },
  { src: "/images/boat/chicassentadasdisfrutando.webp", alt: "Grupo sentados sombra música suave navegación" },
  { src: "/images/boat/aereabarco2.webp", alt: "Dron barco navegación aguas azul índigo sant antonio" },
  { src: "/images/optimized/salvador-ibiza-boat-drone-view.webp", alt: "Aérea cenital barco madera clásico turquesas" },
  { src: "/images/boat/vistaprobarcodesdealagua.webp", alt: "Nivel océano vista proa velocidad moderada día" },
  { src: "/images/boat/vistabarcoaereochicaspopa.webp", alt: "Popa personas relax cojines beige dron alto" },
  { src: "/images/boat/barcointerior.webp", alt: "Interior maderas nobles camarote acogedor" },
  { src: "/images/boat/consolabarco.webp", alt: "Consola capitán navegación instrumentación moderna fusión clásico" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Chicos selfies proa día radiante Baleares" },
  { src: "/images/boat/chicopillandofruta.webp", alt: "Invitado fruta temporada bar autoplateada tripulación cortesía" },
  { src: "/images/boat/chicaensupparada.webp", alt: "Chica postureo paddle estable aguas vírgenes" },
  { src: "/images/boat/dos-chica-disfrutand.webp", alt: "Confidencias amigas butacas popa dorado lateral" },
  { src: "/images/boat/gente-en-suo.webp", alt: "Circulo paddle board colectivo posado barco cercano boyas" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Atardecer siluetas doradas práctica paddle tandem" },
  { src: "/images/boat/chicaparadasup.webp", alt: "SUP vertical calma chapoteo últimos rayos dorados" },
  { src: "/images/boat/luigienproaconchcas.webp", alt: "Tripulación proa historia barco foto icónica invitados" },
  { src: "/images/boat/chicassentadassup.webp", alt: "Grupo tabla gigante selfie agua waist deep" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Cueva marina paddle exploración foto acción" },
  { src: "/images/boat/doschicasensup.webp", alt: "Dos tablas paralelas foto energía alta" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Pareja snorkel arrecife somero brillos sol" },
  { src: "/images/boat/chicaparadaensup.png", alt: "Equilibrio tabla wide angle mar plano pastel" },
  { src: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp", alt: "Hora dorada skyline isla fondo magenta cielo pastel" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-shot.webp", alt: "Panorámica completa emerald banda sedimentos blancos arena" },
  { src: "/images/optimized/salvador-ibiza-boat-console-captain.webp", alt: "Pilotaje detalle maniobras seguridad cercana grupo" },
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Brindis última hora sol rompiendo horizonte bar" },
  { src: "/images/optimized/salvador-ibiza-boat-cave-exploration.webp", alt: "Aprox cueva frontal ola suave roción sal" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Copa cristal cueva backlight atardecer naranjas" },
  { src: "/images/optimized/salvador-ibiza-boat-tapas-service.webp", alt: "Tapas variadas tripulación sirviendo orden degustación" },
  { src: "/images/optimized/toasting-drinks-ibiza-boat.webp", alt: "Brindis colectivo manos altas energía grupo internacional" },
  { src: "/images/optimized/happy-friends-boat-stern-ibiza.webp", alt: "Popa grupo risas foto lifestyle campaña temporada" },
  { src: "/images/boat/chicasentablasup.png", alt: "Tabla grande varias personas chapoteando juego" },
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Champagne jamón ibérico tabla popa chic" },
  { src: "/images/boat/private-new/tapasenbarco_1.webp", alt: "Degustación fría oliva selección navegación gourmet" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Sushi fresco cava rosado evento boutique privado popa madera" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Interior luminoso banquetas tapicería marina capitone" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Frutas tropicales colores vitamina tripulados brunch mar" },
  { src: "/images/boat/private-new/retretebarcoomg_1.webp", alt: "WC contemporáneo acabados impecables confort alta gama día charter" },
  { src: "/images/boat/private-new/retretebarco_1.webp", alt: "Aseo limpio sanitario marinizado segunda unidad cliente privado grande" },
  { src: "/images/boat/private-new/tapasyfrutasenbarco_1.webp", alt: "Mixtape tapas tabla fruta equilibrio foto lifestyle blog ibiza foodie" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Popa líneas clásicas aro salvavidas dorado lettering logo" },
  { src: "/images/boat/private-new/barcosalvadorinterior_1.webp", alt: "Detalle banquetas segunda zona interior climatizada sombra térmica día" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Cava segunda marca selecta copas flute burbujas atardecer" },
  {
    src: "/images/boat/private-new/interiorbarcocubierta_1.webp",
    alt: "Cubiertas zona techada invitados charla soft DJ fondo playlists chill",
  },
];

export default function GalleryPage() {
  return <GalleryClientPage images={allImages} />;
}
