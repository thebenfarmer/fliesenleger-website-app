export interface FAQ {
  id: string;
  category: 'allgemein' | 'kosten' | 'material' | 'ablauf' | 'pflege';
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-01',
    category: 'allgemein',
    question: 'Wie lange dauert eine typische Badezimmer-Sanierung?',
    answer: 'Eine Standard-Badezimmer-Sanierung dauert in der Regel 5-7 Werktage. Dies umfasst die Demontage alter Fliesen, Untergrundvorbereitung, Verlegung neuer Fliesen und Verfugung. Bei größeren Bädern oder komplexen Arbeiten kann es auch 10-14 Tage dauern. Wir erstellen für jedes Projekt einen detaillierten Zeitplan.',
  },
  {
    id: 'faq-02',
    category: 'kosten',
    question: 'Was kostet die Fliesenverlegung pro Quadratmeter?',
    answer: 'Die Kosten variieren je nach Material und Aufwand: Einfache Keramikfliesen ab 35€/m², Feinsteinzeug ab 45€/m², Naturstein ab 85€/m² und Mosaik ab 65€/m². Diese Preise beinhalten Material und Verlegung. Für ein genaues Angebot erstellen wir Ihnen gerne einen kostenlosen Kostenvoranschlag.',
  },
  {
    id: 'faq-03',
    category: 'kosten',
    question: 'Sind die Preise inklusive Material?',
    answer: 'Ja, unsere Preisangaben verstehen sich inklusive Material. Wir bieten Ihnen verschiedene Materialoptionen in unterschiedlichen Preisklassen an. Bei der Beratung zeigen wir Ihnen Muster und besprechen mit Ihnen die Vor- und Nachteile der jeweiligen Materialien.',
  },
  {
    id: 'faq-04',
    category: 'material',
    question: 'Welches Material eignet sich am besten für den Außenbereich?',
    answer: 'Für Außenbereiche empfehlen wir frostbeständiges Feinsteinzeug mit rutschfester Oberfläche (mindestens R11). Besonders beliebt sind Fliesen in Holzoptik oder Natursteinoptik. Diese sind pflegeleicht, langlebig und optisch ansprechend. Wichtig ist auch ein Gefälle für den Wasserablauf.',
  },
  {
    id: 'faq-05',
    category: 'material',
    question: 'Sind Großformatfliesen für jeden Raum geeignet?',
    answer: 'Großformatfliesen (ab 60x120cm) eignen sich besonders für große, offene Räume. Sie schaffen eine moderne, großzügige Optik mit wenigen Fugen. Für sehr kleine Räume oder verwinkelte Bereiche sind sie weniger geeignet, da der Verschnitt höher ist. Wir beraten Sie gerne zur optimalen Fliesengröße für Ihren Raum.',
  },
  {
    id: 'faq-06',
    category: 'ablauf',
    question: 'Muss ich vor der Verlegung etwas vorbereiten?',
    answer: 'Idealerweise sollten die Räume leer geräumt sein. Sanitärobjekte wie Toilette oder Waschbecken demontieren wir auf Wunsch. Der Untergrund sollte tragfähig und eben sein – eventuelle Ausbesserungen führen wir durch. Wir besprechen alle Vorbereitungen bei der Vor-Ort-Besichtigung.',
  },
  {
    id: 'faq-07',
    category: 'ablauf',
    question: 'Wie läuft ein Projekt typischerweise ab?',
    answer: 'Nach Ihrer Anfrage vereinbaren wir einen kostenlosen Beratungstermin vor Ort. Wir besprechen Ihre Wünsche, nehmen Maß und zeigen Ihnen Materialproben. Anschließend erhalten Sie einen detaillierten Kostenvoranschlag. Nach Auftragserteilung planen wir den Termin und führen die Arbeiten zügig und sauber aus.',
  },
  {
    id: 'faq-08',
    category: 'ablauf',
    question: 'Kann ich während der Arbeiten im Haus bleiben?',
    answer: 'Ja, das ist in der Regel kein Problem. Wir arbeiten sauber und schützen angrenzende Bereiche mit Folien und Staubschutzwänden. Bei Badezimmer-Sanierungen sollten Sie berücksichtigen, dass das Bad für die Dauer der Arbeiten nicht nutzbar ist. Bei größeren Projekten besprechen wir einen etappenweisen Ablauf.',
  },
  {
    id: 'faq-09',
    category: 'pflege',
    question: 'Wie pflege ich meine neuen Fliesen richtig?',
    answer: 'Die meisten Fliesen sind sehr pflegeleicht. Für die Reinigung genügt warmes Wasser mit mildem Reiniger. Bei Naturstein sollten Sie säurehaltige Reiniger vermeiden. Wir geben Ihnen nach Abschluss der Arbeiten detaillierte Pflegehinweise für Ihr spezifisches Material.',
  },
  {
    id: 'faq-10',
    category: 'pflege',
    question: 'Wie oft müssen Fugen erneuert werden?',
    answer: 'Hochwertig verlegte Fugen halten bei normaler Beanspruchung 15-20 Jahre. In Nassbereichen sollten Silikonfugen alle 5-10 Jahre erneuert werden. Wir verwenden ausschließlich hochwertige Fugenmaterialien und imprägnieren diese auf Wunsch für extra Schutz.',
  },
  {
    id: 'faq-11',
    category: 'allgemein',
    question: 'Bieten Sie auch eine Garantie auf Ihre Arbeiten?',
    answer: 'Ja, wir bieten 5 Jahre Garantie auf alle unsere Fliesenarbeiten. Als Meisterbetrieb garantieren wir für fachgerechte Ausführung nach den neuesten technischen Richtlinien. Bei Materialfehlern gelten die jeweiligen Herstellergarantien.',
  },
  {
    id: 'faq-12',
    category: 'kosten',
    question: 'Gibt es versteckte Kosten?',
    answer: 'Nein, unser Kostenvoranschlag ist transparent und detailliert. Alle Positionen werden klar aufgeschlüsselt. Sollten während der Arbeiten unvorhergesehene Zusatzarbeiten nötig sein (z.B. Untergrundarbeiten), besprechen wir diese vorab mit Ihnen und holen Ihre Zustimmung ein.',
  },
  {
    id: 'faq-13',
    category: 'material',
    question: 'Was ist der Unterschied zwischen Keramik und Feinsteinzeug?',
    answer: 'Feinsteinzeug wird bei höheren Temperaturen gebrannt und ist dadurch härter, dichter und wasserabweisender als Keramik. Es eignet sich daher besser für Außenbereiche und stark beanspruchte Flächen. Keramikfliesen sind günstiger und für normale Wohnbereiche völlig ausreichend.',
  },
  {
    id: 'faq-14',
    category: 'allgemein',
    question: 'Arbeiten Sie auch am Wochenende?',
    answer: 'In der Regel arbeiten wir Montag bis Freitag. Für dringende Projekte oder auf besonderen Wunsch sind auch Wochenendtermine möglich. Dies besprechen wir individuell bei der Terminplanung.',
  },
  {
    id: 'faq-15',
    category: 'ablauf',
    question: 'Wie weit im Voraus muss ich einen Termin buchen?',
    answer: 'Unsere durchschnittliche Vorlaufzeit beträgt 3-6 Wochen. In dringenden Fällen können wir oft auch kurzfristigere Termine ermöglichen. Kontaktieren Sie uns einfach – wir finden eine Lösung!',
  },
];

export const getFAQById = (id: string): FAQ | undefined => {
  return faqs.find((faq) => faq.id === id);
};

export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};

export const categories = [
  { id: 'allgemein', name: 'Allgemein', count: faqs.filter(f => f.category === 'allgemein').length },
  { id: 'kosten', name: 'Kosten & Preise', count: faqs.filter(f => f.category === 'kosten').length },
  { id: 'material', name: 'Materialien', count: faqs.filter(f => f.category === 'material').length },
  { id: 'ablauf', name: 'Ablauf', count: faqs.filter(f => f.category === 'ablauf').length },
  { id: 'pflege', name: 'Pflege', count: faqs.filter(f => f.category === 'pflege').length },
];
