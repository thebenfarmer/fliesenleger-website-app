'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import BeforeAfterSlider from '@/components/features/BeforeAfterSlider';
import { projects, categories } from '@/data/projects';

const allCategories = [
  { id: 'alle', name: 'Alle', count: projects.length },
  ...categories,
];

export default function ReferenzenPage() {
  const [activeCategory, setActiveCategory] = useState('alle');

  const filteredProjects =
    activeCategory === 'alle'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Unsere Referenzen
              </h1>
              <p className="text-lg text-primary-100">
                Überzeugen Sie sich von unserer Arbeit. Hier sehen Sie eine Auswahl
                unserer erfolgreich abgeschlossenen Projekte aus München und Umgebung.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Zufriedenheit</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Jahre Garantie</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-10 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group">
                  {/* Before/After Slider */}
                  <div className="mb-6">
                    <BeforeAfterSlider
                      beforeImage={project.before}
                      afterImage={project.after}
                      beforeLabel="Vorher"
                      afterLabel="Nachher"
                    />
                  </div>

                  {/* Project Info */}
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="primary" size="sm">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" size="sm">
                        {project.material}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {project.area}
                      </Badge>
                    </div>

                    <h3 className="mb-3 text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="mb-4 text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Highlights:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start text-sm">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>📍 {project.location}</span>
                      <span>⏱️ {project.duration}</span>
                      <span>📅 {project.year}</span>
                    </div>

                    {/* Customer Quote */}
                    {project.customerQuote && (
                      <div className="mt-4 rounded-lg bg-muted/50 p-4">
                        <p className="italic text-sm">&quot;{project.customerQuote}&quot;</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Keine Projekte in dieser Kategorie gefunden.
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="mx-auto max-w-2xl rounded-2xl bg-muted/50 p-8">
                <h2 className="mb-4 text-2xl font-bold">
                  Ihr Projekt könnte das nächste sein
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Lassen Sie uns gemeinsam Ihr Traumprojekt verwirklichen. Kontaktieren
                  Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
                <Link href="/kontakt">
                  <Button variant="primary" size="lg">
                    Projekt anfragen
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
