import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Fliesenverlegung München | Bodenfliesen, Naturstein, Badsanierung | Festpreis',
  description:
    'Bodenfliesen ab 45 €/m², Wandfliesen ab 38 €/m², Naturstein ab 85 €/m². Meisterbetrieb seit 1998. Festpreis-Garantie auf jedes Projekt. Jetzt Angebot anfordern.',
};

const iconMap: Record<string, React.FC> = {
  Grid3x3: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  ),
  Square: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  ),
  Gem: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  ),
  Bath: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  ),
  TreePine: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
      <path d="M12 22v-3" />
    </svg>
  ),
};

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Von Bodenfliesen bis Badsanierung: Meisterhaft ausgeführt, dreifach garantiert
              </h1>
              <p className="text-lg text-primary-100">
                Transparente ab-Preise. Festpreis-Angebot nach kostenloser Beratung.
                Das Dreifach-Garantie-System gilt für jede Leistung.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <Link
                    key={service.id}
                    href={`/leistungen/${service.id}`}
                    className="group"
                  >
                    <Card
                      variant="outlined"
                      padding="none"
                      className="h-full overflow-hidden transition-all hover:shadow-xl hover:border-primary"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden bg-muted">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Icon */}
                        <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/90 backdrop-blur-xs">
                          {Icon && <Icon />}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="text-xl font-semibold">{service.title}</h3>
                          <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                        </div>

                        <p className="mb-4 text-sm text-muted-foreground">
                          {service.description}
                        </p>

                        <div className="mb-4 flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="secondary" size="sm">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">
                            {service.priceRange}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Mehr erfahren →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="mx-auto max-w-2xl rounded-2xl bg-muted/50 p-8">
                <h2 className="mb-4 text-2xl font-bold">
                  Welche Leistung passt zu Ihrem Projekt?
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Kostenlose Beratung bei Ihnen vor Ort. Festpreis-Angebot in 48 Stunden.
                  Dreifach-Garantie auf jedes Projekt.
                </p>
                <Link href="/kontakt">
                  <Button variant="primary" size="lg">
                    Angebot für Ihr Projekt anfordern – kostenlos und mit Festpreis
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
