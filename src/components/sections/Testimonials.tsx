'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getRecentTestimonials, getAverageRating } from '@/data/testimonials';

export default function Testimonials() {
  const testimonials = getRecentTestimonials(6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const averageRating = getAverageRating();

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="primary" size="md" className="mb-4">
            Kundenstimmen
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Das sagen unsere Kunden
          </h2>
          <div className="mx-auto flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating)
                      ? 'fill-primary text-primary'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">
              {averageRating.toFixed(1)} von 5.0
            </span>
            <span className="text-muted-foreground">
              ({testimonials.length} Bewertungen)
            </span>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <Card variant="elevated" padding="lg" className="min-h-[300px]">
              <CardContent className="relative">
                <Quote className="absolute top-0 left-0 h-12 w-12 text-primary/20" />

                <div className="relative z-10 pt-8">
                  {/* Stars */}
                  <div className="mb-4 flex justify-center">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="mb-6 text-center text-lg italic text-foreground">
                    &quot;{current.text}&quot;
                  </p>

                  {/* Customer Info */}
                  <div className="text-center">
                    <div className="mb-2 font-semibold">{current.name}</div>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {current.location}
                    </div>
                    <Badge variant="secondary" size="sm">
                      {current.project}
                    </Badge>
                  </div>

                  {/* Verified Badge */}
                  {current.verified && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Verifizierte Bewertung</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-muted transition-colors hidden md:block"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rounded-full bg-background p-2 shadow-lg hover:bg-muted transition-colors hidden md:block"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Mobile Navigation */}
            <div className="mt-6 flex justify-center gap-4 md:hidden">
              <button
                onClick={prev}
                className="rounded-full bg-background p-2 shadow-lg"
                aria-label="Vorherige Bewertung"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="rounded-full bg-background p-2 shadow-lg"
                aria-label="Nächste Bewertung"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
                aria-label={`Gehe zu Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/EXAMPLE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-600 transition-colors"
          >
            <span>Alle Bewertungen auf Google ansehen</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
