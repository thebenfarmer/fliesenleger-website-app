import Link from 'next/link';
import { Grid3x3, Square, Gem, Sparkles, Bath, TreePine, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const iconMap = {
  Grid3x3,
  Square,
  Gem,
  Sparkles,
  Bath,
  TreePine,
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string;
  priceRange: string;
}

const services: Service[] = [
  {
    id: 'bodenfliesen',
    title: 'Bodenfliesen',
    description: 'Bodenfliesen die 20 Jahre halten -- für Wohnräume, die Eindruck machen.',
    icon: 'Grid3x3',
    image: '/images/services/bodenfliesen.jpg',
    priceRange: 'ab 45 €/m² inkl. MwSt.',
  },
  {
    id: 'wandfliesen',
    title: 'Wandfliesen',
    description: 'Wandfliesen die jeden Morgen gut aussehen -- präzise verlegt, fugenperfekt.',
    icon: 'Square',
    image: '/images/services/wandfliesen.jpg',
    priceRange: 'ab 38 €/m² inkl. MwSt.',
  },
  {
    id: 'naturstein',
    title: 'Naturstein',
    description: 'Marmor, Granit, Schiefer -- millimetergenau verlegt für zeitlose Eleganz.',
    icon: 'Gem',
    image: '/images/services/naturstein.jpg',
    priceRange: 'ab 85 €/m² inkl. MwSt.',
  },
  {
    id: 'mosaik',
    title: 'Mosaik',
    description: 'Handverlesene Mosaikkunst -- der Akzent, der Ihr Bad einzigartig macht.',
    icon: 'Sparkles',
    image: '/images/services/mosaik.jpg',
    priceRange: 'ab 65 €/m² inkl. MwSt.',
  },
  {
    id: 'badezimmer',
    title: 'Badezimmer',
    description: 'Komplett-Sanierung in 5-7 Tagen. Ein Ansprechpartner. Null Stress für Sie.',
    icon: 'Bath',
    image: '/images/services/badezimmer.jpg',
    priceRange: 'ab 15.000 € inkl. MwSt.',
  },
  {
    id: 'aussenbereich',
    title: 'Außenbereich',
    description: 'Frostfeste Terrassen und Balkone -- einmal verlegt, jahrelang genossen.',
    icon: 'TreePine',
    image: '/images/services/aussenbereich.jpg',
    priceRange: 'ab 52 €/m² inkl. MwSt.',
  },
];

export default function Services() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            Leistungen
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Vom Gäste-WC bis zur Villa -- für jedes Projekt die richtige Lösung
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transparente ab-Preise inkl. MwSt. Festpreis-Angebot nach kostenloser Beratung.
            Das Dreifach-Garantie-System gilt für jede Leistung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/90 backdrop-blur-xs">
                      <Icon className="h-6 w-6 text-white" />
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

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {service.priceRange}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Details ansehen
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center text-primary hover:text-primary-600 font-medium transition-colors"
          >
            Alle Leistungen mit Festpreis-Garantie ansehen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
