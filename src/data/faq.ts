export interface FAQ {
  id: string;
  category: 'kosten' | 'ablauf' | 'garantie' | 'allgemein';
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-01',
    category: 'kosten',
    question: 'Was kostet eine Badsanierung in München?',
    answer: 'Ein Standard-Bad (6-8 m²) kostet zwischen 15.000 und 25.000 € inkl. MwSt. -- inklusive aller Materialien und Arbeiten. Premium-Bäder mit Naturstein beginnen ab 25.000 € inkl. MwSt. Bei uns erhalten Sie nach der kostenlosen Vor-Ort-Beratung einen verbindlichen Festpreis. Dieser Festpreis ist Ihr Endpreis -- garantiert, ohne Nachforderungen. Nutzen Sie unseren Badsanierungs-Rechner für eine erste Schätzung.',
  },
  {
    id: 'faq-02',
    category: 'ablauf',
    question: 'Wie lange dauert eine Badsanierung?',
    answer: 'Ein Standard-Bad sanieren wir in 5-7 Werktagen. Größere Projekte mit Naturstein oder Sonderanfertigungen dauern 10-14 Tage. Den exakten Zeitplan erhalten Sie vor Projektstart schriftlich -- und er wird eingehalten. Das bestätigen über 500 abgeschlossene Projekte. Wir arbeiten mit einem festen Team, das sich kennt und aufeinander abgestimmt ist.',
  },
  {
    id: 'faq-03',
    category: 'kosten',
    question: 'Was ist im Festpreis enthalten?',
    answer: 'Alles. Materialien, Verlegung, Untergrundvorbereitung, Verfugung, Silikonarbeiten und Endreinigung. Es gibt keine versteckten Positionen, keine Nachträge und keine bösen Überraschungen. Der Festpreis ist der Endpreis für den im Angebot definierten Leistungsumfang -- das ist Teil unseres Dreifach-Garantie-Systems.',
  },
  {
    id: 'faq-04',
    category: 'garantie',
    question: 'Was passiert bei unvorhergesehenen Problemen während der Arbeiten?',
    answer: 'Bei anderen Betrieben heißt es dann oft: Aufpreis. Bei uns nicht. Unsere Festpreis-Garantie bedeutet: Wenn wir während der Arbeiten auf ein unvorhergesehenes Problem stoßen -- zum Beispiel einen beschädigten Untergrund oder eine defekte Abdichtung -- tragen wir die Mehrkosten. Nicht Sie. Wir informieren Sie transparent über das Problem und die Lösung, aber Ihr Preis bleibt Ihr Preis.',
  },
  {
    id: 'faq-05',
    category: 'ablauf',
    question: 'Wird die Baustelle sauber gehalten?',
    answer: 'Ja, das ist uns wichtig. Wir arbeiten mit Staubschutzwänden, räumen jeden Abend auf und übergeben am Ende eine saubere Baustelle -- inklusive Endreinigung. Ihr Zuhause bleibt während der Arbeiten bewohnbar. Das ist einer der häufigsten Gründe, warum uns Kunden weiterempfehlen.',
  },
  {
    id: 'faq-06',
    category: 'garantie',
    question: 'Warum 5 Jahre Garantie und nicht nur 2?',
    answer: 'Gesetzlich vorgeschrieben sind 2 Jahre Gewährleistung bei Bauleistungen. Wir geben 5 -- weil wir wissen, dass unsere Arbeit länger hält als jede gesetzliche Frist. Seit 1998 arbeiten wir mit dem gleichen Anspruch an jedes Projekt. Die 5-Jahre-Vollgarantie auf Material und Arbeit geht deutlich über die gesetzliche Gewährleistung hinaus.',
  },
  {
    id: 'faq-07',
    category: 'allgemein',
    question: 'Arbeiten Sie mit Subunternehmern?',
    answer: 'Nein. Unser Team besteht aus einem Meister und fünf festangestellten Gesellen -- einige davon seit über 10 Jahren bei uns. Die gleichen Hände, die Ihr Projekt planen, führen es auch aus. Keine Leiharbeiter, keine wechselnden Gesichter. Das ist entscheidend für gleichbleibende Ergebnisse und dafür, dass wir guten Gewissens 5 Jahre Garantie geben können.',
  },
  {
    id: 'faq-08',
    category: 'ablauf',
    question: 'Wie schnell können Sie starten?',
    answer: 'Unsere aktuelle Vorlaufzeit beträgt ca. 3 Wochen. Als Meisterbetrieb betreuen wir bewusst nur 2-3 Projekte gleichzeitig -- damit Ihr Projekt die volle Aufmerksamkeit bekommt. In der Hochsaison (März bis September) kann die Wartezeit länger sein. Unser Tipp: Fragen Sie jetzt an, um Ihren Wunschtermin zu sichern. Die Beratung ist kostenlos und unverbindlich.',
  },
];

export const getFAQById = (id: string): FAQ | undefined => {
  return faqs.find((faq) => faq.id === id);
};

export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};

export const categories = [
  { id: 'kosten', name: 'Kosten & Preise', count: faqs.filter(f => f.category === 'kosten').length },
  { id: 'ablauf', name: 'Ablauf', count: faqs.filter(f => f.category === 'ablauf').length },
  { id: 'garantie', name: 'Garantie', count: faqs.filter(f => f.category === 'garantie').length },
  { id: 'allgemein', name: 'Allgemein', count: faqs.filter(f => f.category === 'allgemein').length },
];
