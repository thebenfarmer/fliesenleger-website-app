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
    description: 'Bodenfliesen die 20 Jahre halten – für Wohnräume, die Eindruck machen. Ob Feinsteinzeug, Großformat oder Holzoptik: Wir bereiten den Untergrund fachgerecht vor, verlegen mit Präzision und sorgen dafür, dass Ihre Fußbodenheizung optimal arbeitet.',
    icon: 'Grid3x3',
    features: [
      'Wohnbereich',
      'Gewerbe',
      'Außenbereich',
      'Fußbodenheizung',
    ],
    image: '/images/services/bodenfliesen.jpg',
    detailsUrl: '/leistungen/bodenfliesen',
    priceRange: 'ab 45 €/m² inkl. MwSt.',
  },
  {
    id: 'wandfliesen',
    title: 'Wandfliesen',
    description: 'Wandfliesen die jeden Morgen gut aussehen – präzise verlegt, fugenperfekt. Von der Küchenrückwand bis zum Vollbad: Jede Fliese sitzt, jede Fuge ist gleichmäßig. Denn im täglichen Gebrauch zeigt sich, wer sauber arbeitet.',
    icon: 'Square',
    features: [
      'Badezimmer',
      'Küche',
      'Treppenhaus',
      'Wandverkleidung',
    ],
    image: '/images/services/wandfliesen.jpg',
    detailsUrl: '/leistungen/wandfliesen',
    priceRange: 'ab 38 €/m² inkl. MwSt.',
  },
  {
    id: 'naturstein',
    title: 'Naturstein',
    description: 'Marmor, Granit, Schiefer – millimetergenau verlegt für zeitlose Eleganz. Naturstein verzeiht keine Fehler. Deshalb braucht es Erfahrung, die richtige Versiegelung und ein Auge fürs Detail. Wir bringen alle drei mit.',
    icon: 'Gem',
    features: [
      'Marmor',
      'Granit',
      'Schiefer',
      'Travertin',
    ],
    image: '/images/services/naturstein.jpg',
    detailsUrl: '/leistungen/naturstein',
    priceRange: 'ab 85 €/m² inkl. MwSt.',
  },
  {
    id: 'mosaik',
    title: 'Mosaik',
    description: 'Handverlesene Mosaikkunst – der Akzent, der Ihr Bad einzigartig macht. Glas, Keramik oder Naturstein: Mosaik ist Präzisionsarbeit auf kleinstem Raum. Jedes Steinchen muss sitzen – und bei uns sitzt es.',
    icon: 'Sparkles',
    features: [
      'Glasmosaik',
      'Keramikmosaik',
      'Natursteinmosaik',
      'Bordüren',
    ],
    image: '/images/services/mosaik.jpg',
    detailsUrl: '/leistungen/mosaik',
    priceRange: 'ab 65 €/m² inkl. MwSt.',
  },
  {
    id: 'badezimmer',
    title: 'Badezimmer',
    description: 'Komplett-Sanierung in 5-7 Tagen. Ein Ansprechpartner. Null Stress für Sie. Von der Demontage bis zur schlüsselfertigen Übergabe koordinieren wir alles: Fliesen, Sanitär, Elektro. Sie müssen nur einmal Ja sagen.',
    icon: 'Bath',
    features: [
      'Komplettbad',
      'Teilsanierung',
      'Barrierefreies Bad',
      'Wellness-Oase',
    ],
    image: '/images/services/badezimmer.jpg',
    detailsUrl: '/leistungen/badezimmer',
    priceRange: 'ab 15.000 € inkl. MwSt.',
  },
  {
    id: 'aussenbereich',
    title: 'Außenbereich',
    description: 'Frostfeste Terrassen und Balkone – einmal verlegt, jahrelang genossen. Münchner Winter sind hart. Unsere Außenverlegung hält ihnen stand: Frostbeständiges Feinsteinzeug, fachgerechtes Gefälle und rutschfeste Oberflächen.',
    icon: 'TreePine',
    features: [
      'Terrasse',
      'Balkon',
      'Eingangsbereich',
      'Poolumrandung',
    ],
    image: '/images/services/aussenbereich.jpg',
    detailsUrl: '/leistungen/aussenbereich',
    priceRange: 'ab 52 €/m² inkl. MwSt.',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServicesByIds = (ids: string[]): Service[] => {
  return services.filter((service) => ids.includes(service.id));
};
