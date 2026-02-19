'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import BeforeAfterSlider from '@/components/features/BeforeAfterSlider';
import { projects } from '@/data/projects';

const categories = [
  { id: 'alle', name: 'Alle' },
  { id: 'badezimmer', name: 'Badezimmer' },
  { id: 'wohnbereich', name: 'Wohnbereich' },
  { id: 'terrasse', name: 'Terrasse' },
  { id: 'gewerbe', name: 'Gewerbe' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('alle');

  const filteredProjects =
    activeCategory === 'alle'
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            Referenzen
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Projekte aus Schwabing, Bogenhausen und ganz München
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Vorher/Nachher: So verwandeln wir Münchner Bäder und Wohnräume.
            Jedes Projekt mit Festpreis-Garantie.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              {/* Before/After Slider */}
              <div className="mb-4">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeLabel="Vorher"
                  afterLabel="Nachher"
                />
              </div>

              {/* Project Info */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="secondary" size="sm">
                    {project.material}
                  </Badge>
                  <Badge variant="default" size="sm">
                    {project.area}
                  </Badge>
                </div>

                <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {project.location}
                  </span>
                  <span className="font-medium text-primary">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/referenzen"
            className="inline-flex items-center text-primary hover:text-primary-600 font-medium transition-colors"
          >
            Ihr Projekt könnte das nächste sein -- jetzt anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
