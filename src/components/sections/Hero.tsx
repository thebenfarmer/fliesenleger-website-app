import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const features = [
  'Kostenlose Beratung',
  '5 Jahre Garantie',
  'Meisterbetrieb',
  'Über 25 Jahre Erfahrung',
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero/hero-badezimmer.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              🏆 Meisterbetrieb seit 1998
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 sm:mb-6 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Ihr Fliesenleger-Meisterbetrieb
            <br />
            <span className="text-primary">in München</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Professionelle Fliesenverlegung für Badezimmer, Naturstein und mehr.
            Hochwertige Handwerkskunst mit über 25 Jahren Erfahrung.
          </p>

          {/* Features */}
          <div className="mb-10 grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/kontakt" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                Kostenlos anfragen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <a href="tel:+4989123456" className="hidden sm:block">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                <Phone className="mr-2 h-5 w-5" />
                089 / 123 456
              </Button>
            </a>

            <a
              href="https://wa.me/4989123456?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Fliesenleger-Leistungen."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 pt-6 sm:pt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">25+</div>
              <div className="text-xs sm:text-sm text-gray-300">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Projekte</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">5</div>
              <div className="text-xs sm:text-sm text-gray-300">Jahre Garantie</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
