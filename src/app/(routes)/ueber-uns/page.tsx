import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Target, Shield, Heart, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Fliesenleger-Meisterbetrieb München seit 1998 | Team & Dreifach-Garantie',
  description:
    'Münchner Meisterbetrieb mit festangestelltem Team: 1 Meister, 5 Gesellen, 0 Subunternehmer. 25+ Jahre Erfahrung. Dreifach-Garantie-System auf jedes Projekt.',
};

const values = [
  {
    icon: Award,
    title: 'Meisterhafte Ausführung',
    description:
      'Jedes Projekt wird vom Meister persönlich geplant und von festangestellten Gesellen ausgeführt.',
  },
  {
    icon: Users,
    title: 'Festangestelltes Team',
    description:
      'Ein Meister und fünf Gesellen – einige seit über 10 Jahren bei uns. Keine Subunternehmer.',
  },
  {
    icon: Target,
    title: 'Präzision',
    description:
      'Millimetergenaue Arbeit und saubere Ausführung sind unser Qualitätsanspruch.',
  },
  {
    icon: Shield,
    title: 'Dreifach-Garantie',
    description:
      'Festpreis, 30-Tage-Zufriedenheit und 5-Jahre-Vollgarantie. Über die gesetzliche Gewährleistung hinaus.',
  },
  {
    icon: Heart,
    title: '500+ Projekte',
    description:
      'Über 500 abgeschlossene Projekte in München und Umgebung. 4.9 von 5.0 bei Google-Bewertungen.',
  },
  {
    icon: TrendingUp,
    title: 'Weiterbildung',
    description:
      'Wir bilden uns kontinuierlich fort, um Ihnen die neuesten Techniken zu bieten.',
  },
];

const timeline = [
  {
    year: '1998',
    title: 'Gründung',
    description:
      'Gründung des Meisterbetriebs in München mit Fokus auf hochwertige Fliesenverlegung.',
  },
  {
    year: '2005',
    title: 'Expansion',
    description:
      'Erweiterung des Teams und Spezialisierung auf Naturstein und Mosaik.',
  },
  {
    year: '2012',
    title: 'Modernisierung',
    description:
      'Investition in moderne Werkzeuge und Techniken für Großformatfliesen.',
  },
  {
    year: '2020',
    title: '500+ Projekte',
    description:
      'Über 500 erfolgreich abgeschlossene Projekte in München und Umgebung.',
  },
  {
    year: '2024',
    title: 'Dreifach-Garantie-System',
    description:
      'Einführung des Dreifach-Garantie-Systems: Festpreis, 30-Tage-Zufriedenheit, 5-Jahre-Vollgarantie.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Münchner Meisterbetrieb seit 1998. Nicht nur Handwerker – Ihr Partner.
              </h1>
              <p className="text-lg text-primary-100">
                Ein Meister, fünf festangestellte Gesellen und eine Überzeugung:
                Wer sein Handwerk liebt, gibt Garantien – keine Ausreden.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold">
                  Unsere Geschichte
                </h2>
                <div className="prose prose-lg">
                  <p className="text-muted-foreground">
                    Was 1998 als kleiner Handwerksbetrieb begann, ist heute ein
                    Meisterbetrieb mit über 500 abgeschlossenen Projekten in München.
                    Die gleichen Hände, die Ihr Projekt planen, führen es auch aus –
                    mit festangestellten Gesellen, nicht Subunternehmern.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Unser Prinzip seit Tag eins: Wir geben Garantien, die andere
                    sich nicht trauen. Festpreis ohne Nachforderungen, 30 Tage
                    kostenlose Nachbesserung und 5 Jahre Vollgarantie auf Material
                    und Arbeit. In einer Stadt, in der sich alles herumspricht,
                    ist unser Ruf unser wichtigstes Kapital.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-8">
                <div className="space-y-6">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-6">
                      <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                          {item.year.slice(-2)}
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Unsere Werte
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Diese Werte leiten uns bei jedem Projekt und machen uns zu einem
                zuverlässigen Partner für Ihre Fliesenarbeiten.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <Card
                  key={value.title}
                  variant="outlined"
                  padding="lg"
                  className="text-center transition-all hover:shadow-lg hover:border-primary"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Unser Team
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Ein eingespieltes Team von Fachleuten mit unterschiedlichen
                Spezialgebieten steht bereit, um Ihr Projekt perfekt umzusetzen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card variant="outlined" padding="lg" className="text-center">
                <div className="mb-4 text-4xl">👨‍🔧</div>
                <h3 className="mb-2 text-xl font-semibold">Meister & Geschäftsführer</h3>
                <p className="mb-3 text-sm text-primary">Seit 1998</p>
                <p className="text-sm text-muted-foreground">
                  Leitung und Qualitätskontrolle aller Projekte
                </p>
              </Card>

              <Card variant="outlined" padding="lg" className="text-center">
                <div className="mb-4 text-4xl">👷‍♂️</div>
                <h3 className="mb-2 text-xl font-semibold">Gesellen-Team</h3>
                <p className="mb-3 text-sm text-primary">5 Fachkräfte</p>
                <p className="text-sm text-muted-foreground">
                  Spezialisiert auf verschiedene Materialien und Techniken
                </p>
              </Card>

              <Card variant="outlined" padding="lg" className="text-center">
                <div className="mb-4 text-4xl">📋</div>
                <h3 className="mb-2 text-xl font-semibold">Projektkoordination</h3>
                <p className="mb-3 text-sm text-primary">Büro-Team</p>
                <p className="text-sm text-muted-foreground">
                  Beratung, Planung und Koordination Ihres Projekts
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Lernen Sie uns bei einer kostenlosen Beratung kennen
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Wir kommen zu Ihnen, nehmen Maß, bringen Materialproben mit und
                erstellen ein verbindliches Festpreis-Angebot. Kostenlos und unverbindlich.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/kontakt">
                  <Button variant="primary" size="lg">
                    Lernen Sie uns bei einer kostenlosen Beratung kennen
                  </Button>
                </Link>
                <Link href="/referenzen">
                  <Button variant="outline" size="lg">
                    Referenzen ansehen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
