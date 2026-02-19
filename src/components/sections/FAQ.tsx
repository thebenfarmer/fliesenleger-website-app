'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

const faqs = [
  {
    question: 'Was kostet eine Badsanierung in München?',
    answer:
      'Ein Standard-Bad (6-8 m²) kostet zwischen 15.000 und 25.000 € inkl. MwSt. – inklusive aller Materialien und Arbeiten. Premium-Bäder mit Naturstein beginnen ab 25.000 € inkl. MwSt. Bei uns erhalten Sie nach der kostenlosen Vor-Ort-Beratung einen verbindlichen Festpreis. Dieser Festpreis ist Ihr Endpreis – garantiert, ohne Nachforderungen.',
  },
  {
    question: 'Wie lange dauert eine Badsanierung?',
    answer:
      'Ein Standard-Bad sanieren wir in 5-7 Werktagen. Größere Projekte mit Naturstein oder Sonderanfertigungen dauern 10-14 Tage. Den exakten Zeitplan erhalten Sie vor Projektstart schriftlich – und er wird eingehalten.',
  },
  {
    question: 'Was ist im Festpreis enthalten?',
    answer:
      'Alles. Materialien, Verlegung, Untergrundvorbereitung, Verfugung, Silikonarbeiten und Endreinigung. Es gibt keine versteckten Positionen, keine Nachträge und keine bösen Überraschungen. Der Festpreis ist der Endpreis für den im Angebot definierten Leistungsumfang.',
  },
  {
    question: 'Was ist das Dreifach-Garantie-System?',
    answer:
      'Unser Dreifach-Garantie-System besteht aus drei Bausteinen: 1. Festpreis-Garantie (Angebotspreis = Endpreis), 2. 30-Tage-Zufriedenheitsgarantie (kostenlose Nachbesserung), 3. 5-Jahre-Vollgarantie auf Material und Arbeit. Diese Kombination bieten nur wenige Fliesenleger in München.',
  },
  {
    question: 'Arbeiten Sie mit Subunternehmern?',
    answer:
      'Nein. Unser Team besteht aus einem Meister und fünf festangestellten Gesellen – einige davon seit über 10 Jahren bei uns. Die gleichen Hände, die Ihr Projekt planen, führen es auch aus.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            Häufige Fragen
          </Badge>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            Häufige Fragen – ehrlich beantwortet
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Preise, Zeitrahmen, Garantien, Ablauf – die wichtigsten Antworten
            auf einen Blick.
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
                  id={`faq-question-${index}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="pr-4 text-lg font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
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
            Haben Sie weitere Fragen? Wir beantworten sie gerne persönlich.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-md bg-primary px-6 py-2.5 text-white transition-colors hover:bg-primary-600"
            >
              Noch Fragen? Antwort in 24 Stunden
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
