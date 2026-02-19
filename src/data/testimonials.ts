// HINWEIS: Beispiel-Testimonials für Template. Vor Produktiveinsatz durch echte Kundenstimmen ersetzen.
// Fiktive Testimonials ohne Kennzeichnung sind nach § 5 UWG unzulässig.
// Vor Veröffentlichung: Echte Testimonials einholen und schriftliche Einwilligung der Kunden sicherstellen.

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
  // Einwand: KOSTEN / Kostenexplosion
  {
    id: 'testimonial-01',
    name: 'Familie Meier',
    location: 'München-Schwabing',
    rating: 5,
    date: '2025-11-15',
    project: 'Komplett-Badsanierung',
    text: 'Wir hatten ehrlich gesagt Angst vor einer Kostenexplosion. Ein Bekannter hat bei seiner Badsanierung 40% mehr bezahlt als im Angebot stand. Bei diesem Meisterbetrieb war der Festpreis tatsächlich der Endpreis -- auf den Cent genau. Keine einzige Nachforderung. Und das Bad ist wunderschön geworden.',
    verified: false,
  },
  // Einwand: ZEIT / Dauer
  {
    id: 'testimonial-02',
    name: 'Herr Keller',
    location: 'München-Bogenhausen',
    rating: 5,
    date: '2025-10-22',
    project: 'Badsanierung Standard',
    text: 'Man hört immer Horrorgeschichten von Badsanierungen, die Monate dauern. Unseres war nach genau sechs Werktagen fertig. Sechs! Der Zeitplan wurde exakt eingehalten. Am Freitag haben wir das fertige Bad abgenommen, am Samstag konnten die Kinder schon duschen.',
    verified: false,
  },
  // Einwand: SAUBERKEIT / Chaos
  {
    id: 'testimonial-03',
    name: 'Frau Stadler',
    location: 'München-Haidhausen',
    rating: 5,
    date: '2025-09-10',
    project: 'Wandfliesen Bad + Küche',
    text: 'Was mich am meisten beeindruckt hat: Jeden Abend war die Baustelle aufgeräumt. Staubschutzwände vor den Türen, Werkzeug verstaut, Boden gefegt. Wir haben während der Arbeiten normal in der Wohnung gelebt. Man hat kaum gemerkt, dass gebaut wird.',
    verified: false,
  },
  // Einwand: ERGEBNIS / Handwerksleistung
  {
    id: 'testimonial-04',
    name: 'Familie Berger',
    location: 'München-Nymphenburg',
    rating: 5,
    date: '2025-08-28',
    project: 'Naturstein-Verlegung Marmor',
    text: 'Wir hatten drei Angebote eingeholt. Aber nur hier haben wir uns wirklich beraten gefühlt, nicht verkauft. Der Meister hat sich Zeit genommen, Muster mitgebracht und ehrlich gesagt, welches Material zu unserem Raum passt. Das Ergebnis? Jeder Gast, der unser Bad sieht, fragt: "Wer hat das gemacht?"',
    verified: false,
  },
  // Einwand: KOMMUNIKATION / Erreichbarkeit
  {
    id: 'testimonial-05',
    name: 'Dr. Winkler',
    location: 'München-Grünwald',
    rating: 5,
    date: '2025-07-15',
    project: 'Premium-Badsanierung mit Marmor',
    text: 'Ich bin beruflich viel unterwegs und konnte nicht ständig auf der Baustelle sein. Das musste ich auch nicht. Jeden Abend kam eine kurze Nachricht mit Fotos vom Tagesfortschritt. Wenn ich eine Frage hatte, wurde sie innerhalb von Stunden beantwortet. So wünscht man sich das.',
    verified: false,
  },
  // Einwand: GARANTIE / Langfristigkeit
  {
    id: 'testimonial-06',
    name: 'Herr Richter',
    location: 'München-Trudering',
    rating: 5,
    date: '2025-06-30',
    project: 'Badsanierung + Gäste-WC',
    text: 'Nach zwei Jahren ist in unserem Gäste-WC eine Silikonfuge leicht abgestanden. Ein Anruf genügt -- zwei Tage später war ein Geselle da und hat es kostenlos behoben. Das nenne ich Garantie. Nicht nur auf dem Papier, sondern in der Praxis. Wir haben diesen Betrieb seitdem dreimal weiterempfohlen.',
    verified: false,
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
