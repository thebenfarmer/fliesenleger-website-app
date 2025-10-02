'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

const faqs = [
  {
    question: 'Wie lange dauert eine Badezimmer-Renovierung?',
    answer:
      'Eine Standard-Badezimmer-Renovierung dauert in der Regel 5-7 Werktage. Dies umfasst die Demontage alter Fliesen, Untergrundvorbereitung, Verlegung neuer Fliesen und Verfugung.',
  },
  {
    question: 'Was kostet die Fliesenverlegung pro Quadratmeter?',
    answer:
      'Die Kosten variieren je nach Material und Aufwand: Einfache Keramikfliesen ab 35€/m², Feinsteinzeug ab 45€/m², Naturstein ab 85€/m². Alle Preise inkl. Material und Verlegung.',
  },
  {
    question: 'Bieten Sie auch kostenlose Beratung an?',
    answer:
      'Ja, wir bieten eine kostenlose und unverbindliche Beratung bei Ihnen vor Ort an. Dabei nehmen wir Maß, besprechen Ihre Wünsche und zeigen Ihnen Materialproben.',
  },
  {
    question: 'Welche Garantie bieten Sie auf Ihre Arbeiten?',
    answer:
      'Wir bieten 5 Jahre Garantie auf alle unsere Fliesenarbeiten. Als Meisterbetrieb garantieren wir für fachgerechte Ausführung nach den neuesten technischen Richtlinien.',
  },
  {
    question: 'Wie weit im Voraus muss ich einen Termin buchen?',
    answer:
      'Unsere durchschnittliche Vorlaufzeit beträgt 3-6 Wochen. In dringenden Fällen können wir oft auch kurzfristigere Termine ermöglichen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            Häufige Fragen
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Die wichtigsten Fragen zu unseren Leistungen, Preisen und Abläufen –
            schnell beantwortet.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border-2 border-border bg-background transition-colors hover:border-primary"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="pr-4 text-lg font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-border px-6 pb-6 pt-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Haben Sie weitere Fragen? Wir helfen Ihnen gerne weiter.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-md bg-primary px-6 py-2.5 text-white transition-colors hover:bg-primary-600"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+4989123456"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-600 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              089 / 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
