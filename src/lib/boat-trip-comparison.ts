export type ComparisonCell = boolean | "partial";

export type ComparisonRow = {
  feature: string;
  salvador: ComparisonCell;
  partyBoat: ComparisonCell;
  catamaran: ComparisonCell;
};

export const generalBoatTripComparison: ComparisonRow[] = [
  { feature: "Familias y niños bienvenidos", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Equipo de snorkel incluido", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "Paddle surf y kayaks", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "Bar abierto y tapas todo incluido", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Ambiente relajado (no fiesta)", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Barco de madera tradicional", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Rutas al atardecer (costa oeste)", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Salida desde Sant Antoni", salvador: true, partyBoat: "partial", catamaran: "partial" },
];

export const familyBoatTripComparison: ComparisonRow[] = [
  { feature: "Niños permitidos", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Chalecos salvavidas (todas las tallas)", salvador: true, partyBoat: "partial", catamaran: true },
  { feature: "Paradas de baño tranquilas para niños", salvador: true, partyBoat: "partial", catamaran: true },
  { feature: "Snorkel para niños", salvador: true, partyBoat: false, catamaran: "partial" },
  { feature: "15 tablas de paddle incluidas", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Comida y bebidas aptas para niños", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Música de fiesta a alto volumen", salvador: false, partyBoat: true, catamaran: false },
  { feature: "Bebés (0–5 años) gratis", salvador: true, partyBoat: false, catamaran: "partial" },
];

export const sunsetBoatTripComparison: ComparisonRow[] = [
  { feature: "Horario pensado para la hora dorada", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Vistas al atardecer en la costa oeste", salvador: true, partyBoat: true, catamaran: true },
  { feature: "Paradas de baño al atardecer", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Bar abierto y cava incluidos", salvador: true, partyBoat: "partial", catamaran: "partial" },
  { feature: "Ambiente romántico y relajado", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Barco de madera tradicional", salvador: true, partyBoat: false, catamaran: false },
  { feature: "Apto para familias", salvador: true, partyBoat: false, catamaran: true },
  { feature: "Salida desde Sant Antoni", salvador: true, partyBoat: "partial", catamaran: "partial" },
];
