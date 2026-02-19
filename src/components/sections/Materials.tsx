import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface Material {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  image: string;
  features: string[];
}

const materials: Material[] = [
  {
    id: 'feinsteinzeug',
    name: 'Feinsteinzeug',
    category: 'Keramik',
    description: 'Extrem hart und widerstandsfähig mit geringer Wasseraufnahme.',
    priceRange: '35-85€/m²',
    image: '/images/materials/feinsteinzeug.jpg',
    features: ['Sehr hohe Härte', 'Frostbeständig', 'Pflegeleicht'],
  },
  {
    id: 'marmor',
    name: 'Marmor',
    category: 'Naturstein',
    description: 'Edler Naturstein mit einzigartiger Maserung und Eleganz.',
    priceRange: '85-250€/m²',
    image: '/images/materials/marmor.jpg',
    features: ['Natürliche Optik', 'Hochwertig', 'Wertsteigernd'],
  },
  {
    id: 'granit',
    name: 'Granit',
    category: 'Naturstein',
    description: 'Extrem robuster Naturstein für höchste Beanspruchung.',
    priceRange: '75-180€/m²',
    image: '/images/materials/granit.jpg',
    features: ['Sehr hart', 'Kratzfest', 'Langlebig'],
  },
  {
    id: 'glasmosaik',
    name: 'Glasmosaik',
    category: 'Mosaik',
    description: 'Lichtdurchlässige Glassteine für brillante Effekte.',
    priceRange: '45-95€/m²',
    image: '/images/materials/glasmosaik.jpg',
    features: ['Lichtreflexion', 'Farbbrillanz', 'Wasserfest'],
  },
  {
    id: 'grossformat',
    name: 'Großformat',
    category: 'XXL-Fliesen',
    description: 'Moderne XXL-Fliesen bis 320x160cm mit minimalen Fugen.',
    priceRange: '65-150€/m²',
    image: '/images/materials/grossformat.jpg',
    features: ['Minimale Fugen', 'Moderne Optik', 'Großzügig'],
  },
  {
    id: 'schiefer',
    name: 'Schiefer',
    category: 'Naturstein',
    description: 'Natürlicher Charakter mit rustikaler Optik.',
    priceRange: '65-120€/m²',
    image: '/images/materials/schiefer.jpg',
    features: ['Rutschfest', 'Frostbeständig', 'Charakterstark'],
  },
];

export default function Materials() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            Materialien
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Materialien, die wir empfehlen – und warum
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Von klassischem Feinsteinzeug bis zu edlem Marmor. Wir beraten Sie
            ehrlich, welches Material zu Ihrem Raum und Budget passt.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <Card
              key={material.id}
              variant="outlined"
              padding="none"
              className="group overflow-hidden transition-all hover:shadow-xl hover:border-primary"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${material.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" size="sm">
                    {material.category}
                  </Badge>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-lg font-bold text-white">
                    {material.priceRange}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{material.name}</h3>

                <p className="mb-4 text-sm text-muted-foreground">
                  {material.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {material.features.map((feature) => (
                    <Badge key={feature} variant="secondary" size="sm">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Link
                  href="/materialien"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-600 transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/materialien"
            className="inline-flex items-center text-primary hover:text-primary-600 font-medium transition-colors"
          >
            Materialberatung bei Ihnen vor Ort – kostenlos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
