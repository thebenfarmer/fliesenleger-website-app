export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  detailsUrl: string;
  priceRange?: string;
}

export const services: Service[] = [
  {
    id: 'bodenfliesen',
    title: 'Bodenfliesen',
    description: 'Professionelle Verlegung von Bodenfliesen für Wohn- und Gewerbebereiche. Präzise Ausführung mit langlebigem Ergebnis.',
    icon: 'Grid3x3',
    features: [
      'Wohnbereich',
      'Gewerbe',
      'Außenbereich',
      'Fußbodenheizung',
    ],
    image: '/images/services/bodenfliesen.jpg',
    detailsUrl: '/leistungen/bodenfliesen',
    priceRange: 'ab 45€/m²',
  },
  {
    id: 'wandfliesen',
    title: 'Wandfliesen',
    description: 'Fachgerechte Wandfliesenverlegung für Bad, Küche und alle Wohnbereiche. Präzise Fugenarbeit und saubere Kanten.',
    icon: 'Square',
    features: [
      'Badezimmer',
      'Küche',
      'Treppenhaus',
      'Wandverkleidung',
    ],
    image: '/images/services/wandfliesen.jpg',
    detailsUrl: '/leistungen/wandfliesen',
    priceRange: 'ab 38€/m²',
  },
  {
    id: 'naturstein',
    title: 'Naturstein',
    description: 'Edle Natursteinverlegung von Marmor, Granit und Schiefer. Hochwertige Materialien für exklusive Wohnräume.',
    icon: 'Gem',
    features: [
      'Marmor',
      'Granit',
      'Schiefer',
      'Travertin',
    ],
    image: '/images/services/naturstein.jpg',
    detailsUrl: '/leistungen/naturstein',
    priceRange: 'ab 85€/m²',
  },
  {
    id: 'mosaik',
    title: 'Mosaik',
    description: 'Kunstvolle Mosaikverlegung für individuelle Akzente. Glas-, Keramik- und Natursteinmosaik in höchster Präzision.',
    icon: 'Sparkles',
    features: [
      'Glasmosaik',
      'Keramikmosaik',
      'Natursteinmosaik',
      'Bordüren',
    ],
    image: '/images/services/mosaik.jpg',
    detailsUrl: '/leistungen/mosaik',
    priceRange: 'ab 65€/m²',
  },
  {
    id: 'badezimmer',
    title: 'Badezimmer',
    description: 'Komplette Badsanierung vom Fachbetrieb. Von der Planung bis zur schlüsselfertigen Übergabe – alles aus einer Hand.',
    icon: 'Bath',
    features: [
      'Komplettbad',
      'Teilsanierung',
      'Barrierefreies Bad',
      'Wellness-Oase',
    ],
    image: '/images/services/badezimmer.jpg',
    detailsUrl: '/leistungen/badezimmer',
    priceRange: 'Auf Anfrage',
  },
  {
    id: 'aussenbereich',
    title: 'Außenbereich',
    description: 'Wetterfeste Fliesenverlegung für Terrasse, Balkon und Eingangsbereich. Frostsicher und rutschfest.',
    icon: 'TreePine',
    features: [
      'Terrasse',
      'Balkon',
      'Eingangsbereich',
      'Poolumrandung',
    ],
    image: '/images/services/aussenbereich.jpg',
    detailsUrl: '/leistungen/aussenbereich',
    priceRange: 'ab 52€/m²',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServicesByIds = (ids: string[]): Service[] => {
  return services.filter((service) => ids.includes(service.id));
};
