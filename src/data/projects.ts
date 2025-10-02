export interface Project {
  id: string;
  title: string;
  category: 'badezimmer' | 'wohnbereich' | 'terrasse' | 'gewerbe' | 'eingangsbereich';
  material: string;
  area: string;
  duration: string;
  location: string;
  year: number;
  before: string;
  after: string;
  description: string;
  highlights: string[];
  customerQuote?: string;
}

export const projects: Project[] = [
  {
    id: 'badezimmer-modern-01',
    title: 'Modernes Badezimmer mit Großformatfliesen',
    category: 'badezimmer',
    material: 'Feinsteinzeug Großformat',
    area: '12m²',
    duration: '3 Tage',
    location: 'München-Schwabing',
    year: 2024,
    before: '/images/projects/bad-modern-01-before.png',
    after: '/images/projects/bad-modern-01-after.png',
    description: 'Komplette Badsanierung mit edlen Großformatfliesen in Betonoptik. Bodengleiche Dusche und hochwertige Wandverkleidung für ein zeitloses Design.',
    highlights: [
      'Großformatfliesen 120x60cm',
      'Bodengleiche Dusche',
      'Fußbodenheizung',
      'Wandnische mit LED-Beleuchtung',
    ],
    customerQuote: 'Absolut perfekte Arbeit! Das Bad sieht fantastisch aus und wurde termingerecht fertiggestellt.',
  },
  {
    id: 'badezimmer-marmor-01',
    title: 'Luxusbad mit Carrara-Marmor',
    category: 'badezimmer',
    material: 'Carrara-Marmor',
    area: '18m²',
    duration: '5 Tage',
    location: 'München-Bogenhausen',
    year: 2024,
    before: '/images/projects/bad-marmor-01-before.jpg',
    after: '/images/projects/bad-marmor-01-after.jpg',
    description: 'Exklusive Badgestaltung mit weißem Carrara-Marmor. Vom Boden bis zur Decke durchgängig verfliest mit akzentuierter Mosaikbordüre.',
    highlights: [
      'Carrara-Marmor poliert',
      'Glasmosaik-Bordüre',
      'Walk-In Dusche',
      'Beheizter Natursteinboden',
    ],
    customerQuote: 'Der Marmor wurde perfekt verlegt. Jede Fuge sitzt exakt. Ein Meisterwerk!',
  },
  {
    id: 'terrasse-holzoptik-01',
    title: 'Terrasse in Holzoptik',
    category: 'terrasse',
    material: 'Feinsteinzeug Holzoptik',
    area: '35m²',
    duration: '4 Tage',
    location: 'München-Sendling',
    year: 2024,
    before: '/images/projects/terrasse-01-before.jpg',
    after: '/images/projects/terrasse-01-after.jpg',
    description: 'Wetterfeste Terrassengestaltung mit täuschend echten Holzoptikfliesen. Frostbeständig und pflegeleicht – die perfekte Alternative zu Holzdielen.',
    highlights: [
      'Holzoptik Eiche hell',
      'Frostbeständig',
      'Rutschfeste Oberfläche R11',
      'Gefälleausgleich für Regenwasser',
    ],
    customerQuote: 'Sieht aus wie echtes Holz, aber ohne den Pflegeaufwand. Super Lösung!',
  },
  {
    id: 'wohnzimmer-grossformat-01',
    title: 'Offener Wohnbereich mit XXL-Fliesen',
    category: 'wohnbereich',
    material: 'Feinsteinzeug Großformat',
    area: '65m²',
    duration: '6 Tage',
    location: 'München-Pasing',
    year: 2024,
    before: '/images/projects/wohnzimmer-01-before.jpg',
    after: '/images/projects/wohnzimmer-01-after.jpg',
    description: 'Offene Wohnraumgestaltung mit XXL-Fliesen 120x120cm in Betonoptik. Durchgängig verlegt über Wohnzimmer, Essbereich und Küche.',
    highlights: [
      'XXL-Fliesen 120x120cm',
      'Durchgängige Verlegung',
      'Fußbodenheizung',
      'Minimalfugenoptik',
    ],
  },
  {
    id: 'kueche-naturstein-01',
    title: 'Küchenrückwand aus Schiefer',
    category: 'wohnbereich',
    material: 'Schiefer Anthrazit',
    area: '8m²',
    duration: '2 Tage',
    location: 'München-Haidhausen',
    year: 2024,
    before: '/images/projects/kueche-01-before.jpg',
    after: '/images/projects/kueche-01-after.jpg',
    description: 'Rustikale Küchenrückwand mit anthrazitfarbenem Schiefer. Natürliche Spaltung verleiht der Küche einen besonderen Charakter.',
    highlights: [
      'Schiefer gespalten',
      'Hitzebeständig',
      'Individuelle Optik',
      'LED-Beleuchtung integriert',
    ],
    customerQuote: 'Die Schieferwand ist der absolute Hingucker in unserer Küche!',
  },
  {
    id: 'eingang-granit-01',
    title: 'Repräsentativer Eingangsbereich',
    category: 'eingangsbereich',
    material: 'Granit Kashmir White',
    area: '22m²',
    duration: '4 Tage',
    location: 'München-Nymphenburg',
    year: 2024,
    before: '/images/projects/eingang-01-before.jpg',
    after: '/images/projects/eingang-01-after.jpg',
    description: 'Eleganter Eingangsbereich mit poliertem Kashmir White Granit. Robuster Naturstein für den repräsentativen ersten Eindruck.',
    highlights: [
      'Granit poliert',
      'Treppenstufen inklusive',
      'Hochglanz-Finish',
      'Extrem strapazierfähig',
    ],
  },
  {
    id: 'gewerbe-restaurant-01',
    title: 'Restaurant-Komplettsanierung',
    category: 'gewerbe',
    material: 'Feinsteinzeug Betonoptik',
    area: '180m²',
    duration: '10 Tage',
    location: 'München-Maxvorstadt',
    year: 2024,
    before: '/images/projects/restaurant-01-before.jpg',
    after: '/images/projects/restaurant-01-after.jpg',
    description: 'Komplette Neuverfliesung eines Restaurants. Rutschfeste Bodenfliesen im Gastbereich und hygienische Wandfliesen in der Küche.',
    highlights: [
      'Rutschfest R10/R11',
      'Hygienische Wandfliesen',
      'Schnelle Umsetzung',
      'Minimale Betriebsunterbrechung',
    ],
    customerQuote: 'Professionell, schnell und sauber. Das Restaurant sieht aus wie neu!',
  },
  {
    id: 'badezimmer-mosaik-01',
    title: 'Wellness-Bad mit Glasmosaik',
    category: 'badezimmer',
    material: 'Glasmosaik + Feinsteinzeug',
    area: '15m²',
    duration: '5 Tage',
    location: 'München-Grünwald',
    year: 2023,
    before: '/images/projects/wellness-bad-01-before.jpg',
    after: '/images/projects/wellness-bad-01-after.jpg',
    description: 'Wellness-Oase mit edlem Glasmosaik als Akzentwand. Bodenebene Regendusche und harmonische Farbgestaltung in Grau- und Beigetönen.',
    highlights: [
      'Glasmosaik Perlmutt',
      'Regendusche',
      'Indirekte LED-Beleuchtung',
      'Natursteinfliesen',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByYear = (year: number): Project[] => {
  return projects.filter((project) => project.year === year);
};

export const categories = [
  { id: 'badezimmer', name: 'Badezimmer', count: projects.filter(p => p.category === 'badezimmer').length },
  { id: 'wohnbereich', name: 'Wohnbereich', count: projects.filter(p => p.category === 'wohnbereich').length },
  { id: 'terrasse', name: 'Terrasse', count: projects.filter(p => p.category === 'terrasse').length },
  { id: 'gewerbe', name: 'Gewerbe', count: projects.filter(p => p.category === 'gewerbe').length },
  { id: 'eingangsbereich', name: 'Eingangsbereich', count: projects.filter(p => p.category === 'eingangsbereich').length },
];
