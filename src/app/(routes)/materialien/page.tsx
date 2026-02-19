import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { materials, categories } from '@/data/materials';

export const metadata: Metadata = {
  title: 'Fliesen-Materialberatung München | Feinsteinzeug, Naturstein, Mosaik',
  description:
    'Ehrliche Materialberatung vom Meisterbetrieb: Feinsteinzeug, Naturstein, Mosaik, Großformat. Transparente Preise ab 38 €/m². Kostenlose Vor-Ort-Beratung mit Materialproben.',
};

export default function MaterialienPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Welches Material passt zu Ihrem Raum? Wir beraten ehrlich.
              </h1>
              <p className="text-lg text-primary-100">
                Feinsteinzeug, Naturstein, Mosaik oder Großformat – jedes Material hat
                Stärken und Grenzen. Wir zeigen Ihnen beides.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-lg border-2 border-border bg-background p-6 text-center"
                >
                  <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} {category.count === 1 ? 'Material' : 'Materialien'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {materials.map((material) => (
                <Card
                  key={material.id}
                  variant="outlined"
                  padding="none"
                  className="overflow-hidden transition-all hover:shadow-xl hover:border-primary"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
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

                    {/* Properties */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Eigenschaften:</h4>
                      <div className="flex flex-wrap gap-2">
                        {material.properties.map((prop) => (
                          <Badge key={prop} variant="secondary" size="sm">
                            {prop}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Einsatzbereiche:</h4>
                      <p className="text-sm text-muted-foreground">
                        {material.useCases.join(', ')}
                      </p>
                    </div>

                    {/* Colors & Finishes */}
                    <div className="border-t border-border pt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Farben:</span>
                          <p className="text-muted-foreground">
                            {material.colors.slice(0, 2).join(', ')}
                            {material.colors.length > 2 && ` +${material.colors.length - 2}`}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Oberflächen:</span>
                          <p className="text-muted-foreground">
                            {material.finishes.slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="mx-auto max-w-2xl rounded-2xl bg-muted/50 p-8">
                <h2 className="mb-4 text-2xl font-bold">
                  Material anfassen statt nur anschauen
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Bei unserer kostenlosen Vor-Ort-Beratung bringen wir Materialproben mit.
                  So sehen und fühlen Sie, was am besten passt.
                </p>
                <Link href="/kontakt">
                  <Button variant="primary" size="lg">
                    Materialberatung bei Ihnen vor Ort vereinbaren
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
