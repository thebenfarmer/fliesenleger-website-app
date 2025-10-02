export interface Material {
  id: string;
  name: string;
  category: 'keramik' | 'naturstein' | 'mosaik' | 'grossformat';
  description: string;
  properties: string[];
  useCases: string[];
  priceRange: string;
  image: string;
  colors: string[];
  finishes: string[];
}

export const materials: Material[] = [
  {
    id: 'feinsteinzeug',
    name: 'Feinsteinzeug',
    category: 'keramik',
    description: 'Extrem harte und widerstandsfähige Keramikfliesen mit geringer Wasseraufnahme. Ideal für stark beanspruchte Bereiche.',
    properties: [
      'Sehr hohe Härte',
      'Wasserabweisend',
      'Frostbeständig',
      'Pflegeleicht',
      'Kratzfest',
    ],
    useCases: [
      'Wohnbereich',
      'Gewerbe',
      'Außenbereich',
      'Badezimmer',
    ],
    priceRange: '35-85€/m²',
    image: '/images/materials/feinsteinzeug.jpg',
    colors: ['Grau', 'Beige', 'Schwarz', 'Weiß', 'Holzoptik', 'Betonoptik'],
    finishes: ['Matt', 'Poliert', 'Strukturiert', 'Anpoliert'],
  },
  {
    id: 'keramikfliesen',
    name: 'Keramikfliesen',
    category: 'keramik',
    description: 'Klassische Keramikfliesen in vielfältigen Designs. Bewährte Qualität für Wand und Boden.',
    properties: [
      'Vielseitig einsetzbar',
      'Große Farbauswahl',
      'Preiswert',
      'Bewährt',
    ],
    useCases: [
      'Badezimmer',
      'Küche',
      'Wohnbereich',
      'Wandverkleidung',
    ],
    priceRange: '25-55€/m²',
    image: '/images/materials/keramikfliesen.jpg',
    colors: ['Alle gängigen Farben', 'Muster', 'Dekore'],
    finishes: ['Glänzend', 'Matt', 'Halbmatt'],
  },
  {
    id: 'marmor',
    name: 'Marmor',
    category: 'naturstein',
    description: 'Edler Naturstein mit einzigartiger Maserung. Zeitlose Eleganz für exklusive Wohnräume.',
    properties: [
      'Natürliche Optik',
      'Jedes Stück ein Unikat',
      'Hochwertig',
      'Wertsteigernd',
    ],
    useCases: [
      'Wohnbereich',
      'Badezimmer',
      'Eingangshalle',
      'Wandverkleidung',
    ],
    priceRange: '85-250€/m²',
    image: '/images/materials/marmor.jpg',
    colors: ['Weiß', 'Beige', 'Grau', 'Schwarz', 'Rosa'],
    finishes: ['Poliert', 'Geschliffen', 'Satiniert'],
  },
  {
    id: 'granit',
    name: 'Granit',
    category: 'naturstein',
    description: 'Extrem robuster Naturstein für höchste Beanspruchung. Unverwüstlich und pflegeleicht.',
    properties: [
      'Sehr hart',
      'Kratzfest',
      'Hitzebeständig',
      'Säurebeständig',
      'Langlebig',
    ],
    useCases: [
      'Küchenarbeitsplatte',
      'Außenbereich',
      'Gewerbe',
      'Treppenbeläge',
    ],
    priceRange: '75-180€/m²',
    image: '/images/materials/granit.jpg',
    colors: ['Schwarz', 'Grau', 'Rot', 'Beige', 'Multicolor'],
    finishes: ['Poliert', 'Geflammt', 'Gestockt'],
  },
  {
    id: 'schiefer',
    name: 'Schiefer',
    category: 'naturstein',
    description: 'Natürlicher Charakter mit rustikaler Optik. Rutschfest und ideal für Außenbereiche.',
    properties: [
      'Rutschfest',
      'Frostbeständig',
      'Natürliche Spaltung',
      'Charakterstark',
    ],
    useCases: [
      'Terrasse',
      'Eingangsbereich',
      'Badezimmer',
      'Wohnbereich',
    ],
    priceRange: '65-120€/m²',
    image: '/images/materials/schiefer.jpg',
    colors: ['Anthrazit', 'Grau', 'Schwarz', 'Grün', 'Braun'],
    finishes: ['Gespalten', 'Kalibriert', 'Geschliffen'],
  },
  {
    id: 'glasmosaik',
    name: 'Glasmosaik',
    category: 'mosaik',
    description: 'Lichtdurchlässige Glassteine für brillante Effekte. Perfekt für Akzentwände und Nischen.',
    properties: [
      'Lichtreflexion',
      'Farbbrillanz',
      'Wasserfest',
      'Hygienisch',
    ],
    useCases: [
      'Badezimmer',
      'Küchenspiegel',
      'Poolbereich',
      'Akzentwände',
    ],
    priceRange: '45-95€/m²',
    image: '/images/materials/glasmosaik.jpg',
    colors: ['Alle Farben', 'Transparent', 'Metallic', 'Perlmutt'],
    finishes: ['Glänzend', 'Matt', 'Irisierend'],
  },
  {
    id: 'keramikmosaik',
    name: 'Keramikmosaik',
    category: 'mosaik',
    description: 'Vielseitige Mosaiksteine aus Keramik. Ideal für kreative Gestaltungen und Bordüren.',
    properties: [
      'Vielseitig',
      'Pflegeleicht',
      'Robust',
      'Große Auswahl',
    ],
    useCases: [
      'Badezimmer',
      'Bordüren',
      'Wandgestaltung',
      'Dekorelemente',
    ],
    priceRange: '35-75€/m²',
    image: '/images/materials/keramikmosaik.jpg',
    colors: ['Alle gängigen Farben', 'Muster'],
    finishes: ['Glänzend', 'Matt', 'Strukturiert'],
  },
  {
    id: 'grossformat',
    name: 'Großformatfliesen',
    category: 'grossformat',
    description: 'Moderne XXL-Fliesen bis 320x160cm. Wenige Fugen für edle, großzügige Optik.',
    properties: [
      'Minimale Fugen',
      'Moderne Optik',
      'Großzügig',
      'Einfache Reinigung',
    ],
    useCases: [
      'Wohnbereich',
      'Gewerbe',
      'Badezimmer',
      'Wandverkleidung',
    ],
    priceRange: '65-150€/m²',
    image: '/images/materials/grossformat.jpg',
    colors: ['Betonoptik', 'Marmoroptik', 'Unifarben', 'Holzoptik'],
    finishes: ['Matt', 'Poliert', 'Strukturiert'],
  },
];

export const getMaterialById = (id: string): Material | undefined => {
  return materials.find((material) => material.id === id);
};

export const getMaterialsByCategory = (category: Material['category']): Material[] => {
  return materials.filter((material) => material.category === category);
};

export const categories = [
  { id: 'keramik', name: 'Keramik', count: materials.filter(m => m.category === 'keramik').length },
  { id: 'naturstein', name: 'Naturstein', count: materials.filter(m => m.category === 'naturstein').length },
  { id: 'mosaik', name: 'Mosaik', count: materials.filter(m => m.category === 'mosaik').length },
  { id: 'grossformat', name: 'Großformat', count: materials.filter(m => m.category === 'grossformat').length },
];
