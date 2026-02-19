import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const features = [
  'Angebotspreis = Endpreis',
  '5 Jahre Vollgarantie',
  'Meisterbetrieb seit 1998',
  'Standard-Bad in 5-7 Tagen',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" role="img" aria-label="Modernes Badezimmer mit hochwertigen Fliesen nach Renovierung">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero/hero-badezimmer.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 backdrop-blur-xs">
            <span className="text-sm font-medium text-white">
              Meisterbetrieb seit 1998 | München
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 sm:mb-6 text-2xl font-bold text-white md:text-4xl lg:text-5xl">
            Badsanierung in München –{' '}
            <span className="text-primary">dreifach abgesichert</span>, zum
            garantierten Festpreis
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Meisterhafte Fliesenverlegung mit dem Dreifach-Garantie-System:
            Festpreis ohne Nachforderungen, 30-Tage-Zufriedenheitsgarantie und
            5-Jahre-Vollgarantie auf Material und Arbeit.
          </p>

          {/* Features */}
          <div className="mb-10 grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/kontakt" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                Kostenloses Festpreis-Angebot anfordern
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <div className="flex gap-3 sm:contents">
              <a href="tel:+4989123456" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">089 / 123 456</span>
                  <span className="sm:hidden">Anrufen</span>
                </Button>
              </a>

              <a
                href="https://wa.me/4989123456?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Fliesenleger-Leistungen."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
                title="WhatsApp: Datenübermittlung an Meta/USA. Details in unserer Datenschutzerklärung."
              >
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-foreground">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 pt-6 sm:pt-8">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">25+</div>
              <div className="text-xs sm:text-sm text-gray-300">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Projekte in München</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white">4.9</div>
              <div className="text-xs sm:text-sm text-gray-300">Google-Bewertung</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
