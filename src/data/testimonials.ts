export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  project: string;
  text: string;
  image?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-01',
    name: 'Familie Schmidt',
    location: 'München-Schwabing',
    rating: 5,
    date: '2024-09-15',
    project: 'Badezimmer-Sanierung',
    text: 'Absolut perfekte Arbeit! Unser neues Badezimmer sieht fantastisch aus. Die Großformatfliesen wurden millimetergenau verlegt. Das Team war pünktlich, sauber und sehr professionell. Wir würden diese Firma jederzeit wieder beauftragen!',
    verified: true,
  },
  {
    id: 'testimonial-02',
    name: 'Thomas M.',
    location: 'München-Bogenhausen',
    rating: 5,
    date: '2024-08-22',
    project: 'Marmor-Verlegung',
    text: 'Der Marmor in unserem Bad wurde perfekt verlegt. Jede Fuge sitzt exakt, und die Beratung vorab war erstklassig. Besonders beeindruckt hat uns die Präzision bei der Verlegung. Ein echtes Meisterwerk!',
    verified: true,
  },
  {
    id: 'testimonial-03',
    name: 'Andrea K.',
    location: 'München-Sendling',
    rating: 5,
    date: '2024-08-10',
    project: 'Terrasse Holzoptik',
    text: 'Unsere neue Terrasse sieht aus wie echtes Holz, aber ohne den Pflegeaufwand! Die Fliesen sind frostbeständig und perfekt verlegt. Sehr empfehlenswert!',
    verified: true,
  },
  {
    id: 'testimonial-04',
    name: 'Michael und Sarah B.',
    location: 'München-Pasing',
    rating: 5,
    date: '2024-07-28',
    project: 'Wohnbereich XXL-Fliesen',
    text: 'Die XXL-Fliesen in unserem offenen Wohnbereich sind der absolute Hingucker. Die durchgängige Verlegung über 65m² wurde ohne Probleme umgesetzt. Top Qualität, top Service!',
    verified: true,
  },
  {
    id: 'testimonial-05',
    name: 'Julia W.',
    location: 'München-Haidhausen',
    rating: 5,
    date: '2024-07-15',
    project: 'Küchenrückwand Schiefer',
    text: 'Die Schieferwand ist der absolute Hingucker in unserer Küche! Die natürliche Struktur verleiht dem Raum Charakter. Hervorragende handwerkliche Leistung!',
    verified: true,
  },
  {
    id: 'testimonial-06',
    name: 'Dr. Müller',
    location: 'München-Nymphenburg',
    rating: 5,
    date: '2024-06-30',
    project: 'Eingangsbereich Granit',
    text: 'Der polierte Granit im Eingangsbereich verleiht unserem Haus einen sehr repräsentativen Charakter. Die Arbeit wurde präzise und termingerecht ausgeführt. Absolut empfehlenswert!',
    verified: true,
  },
  {
    id: 'testimonial-07',
    name: 'Restaurant "Zum Stadl"',
    location: 'München-Maxvorstadt',
    rating: 5,
    date: '2024-06-12',
    project: 'Restaurant-Sanierung',
    text: 'Professionell, schnell und sauber. Unser Restaurant wurde in Rekordzeit saniert, ohne dass wir lange schließen mussten. Das Ergebnis ist hervorragend. Die rutschfesten Fliesen sind perfekt für den Gastrobereich!',
    verified: true,
  },
  {
    id: 'testimonial-08',
    name: 'Familie Wagner',
    location: 'München-Grünwald',
    rating: 5,
    date: '2024-05-20',
    project: 'Wellness-Bad',
    text: 'Unser neues Wellness-Bad ist traumhaft geworden! Das Glasmosaik wurde kunstvoll verlegt und die bodengleiche Dusche ist ein Traum. Vielen Dank für die kompetente Beratung und perfekte Umsetzung!',
    verified: true,
  },
  {
    id: 'testimonial-09',
    name: 'Christian R.',
    location: 'München-Laim',
    rating: 5,
    date: '2024-05-08',
    project: 'Balkon-Sanierung',
    text: 'Die Balkonsanierung wurde professionell und zügig durchgeführt. Die Fliesen sind frostsicher und rutschfest – perfekt für den Außenbereich. Das Team hat sauber gearbeitet und alles war bestens organisiert.',
    verified: true,
  },
  {
    id: 'testimonial-10',
    name: 'Sabine H.',
    location: 'München-Trudering',
    rating: 5,
    date: '2024-04-25',
    project: 'Gäste-WC',
    text: 'Auch bei unserem kleinen Gäste-WC wurde mit größter Sorgfalt gearbeitet. Die Mosaikfliesen sind wunderschön verlegt und machen den kleinen Raum zu einem Schmuckstück. Danke!',
    verified: true,
  },
];

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find((testimonial) => testimonial.id === id);
};

export const getRecentTestimonials = (limit: number = 3): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getAverageRating = (): number => {
  const sum = testimonials.reduce((acc, curr) => acc + curr.rating, 0);
  return sum / testimonials.length;
};

export const getTotalReviews = (): number => {
  return testimonials.length;
};
