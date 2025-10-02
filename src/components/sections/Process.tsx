import { Phone, Home, Palette, Hammer, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Kontaktaufnahme',
    description:
      'Sie kontaktieren uns telefonisch, per E-Mail oder über unser Kontaktformular. Wir melden uns innerhalb von 24 Stunden zurück.',
    duration: '< 24h',
  },
  {
    number: 2,
    icon: Home,
    title: 'Vor-Ort-Termin',
    description:
      'Kostenlose Beratung bei Ihnen vor Ort. Wir nehmen Maß, besprechen Ihre Wünsche und zeigen Ihnen Materialproben.',
    duration: '1-2 Tage',
  },
  {
    number: 3,
    icon: Palette,
    title: 'Angebot & Planung',
    description:
      'Sie erhalten ein detailliertes Festpreis-Angebot. Gemeinsam planen wir Material, Design und Zeitrahmen.',
    duration: '2-3 Tage',
  },
  {
    number: 4,
    icon: Hammer,
    title: 'Umsetzung',
    description:
      'Professionelle Ausführung durch unser Meister-Team. Saubere Baustelle und tägliche Updates über den Fortschritt.',
    duration: 'Je nach Projekt',
  },
  {
    number: 5,
    icon: CheckCircle,
    title: 'Abnahme & Garantie',
    description:
      'Gemeinsame Endabnahme und Übergabe. Sie erhalten 5 Jahre Garantie auf Material und Verlegearbeit.',
    duration: '1 Tag',
  },
];

export default function Process() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            So läuft Ihr Projekt ab
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Von der ersten Anfrage bis zur fertigen Fliesenverlegung – unser
            bewährter 5-Schritte-Prozess sorgt für reibungslose Abwicklung.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Connection Line */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start gap-8`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <Card variant="outlined" padding="lg" className="h-full hover:border-primary transition-colors">
                    <CardContent>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                      <p className="mb-3 text-muted-foreground">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
                        <svg
                          className="h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Dauer: {step.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Bereit für Ihr Projekt? Lassen Sie uns noch heute starten.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-primary-600"
          >
            Jetzt kostenlos beraten lassen
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
