import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const services = [
  { name: 'Bodenfliesen', href: '/leistungen/bodenfliesen' },
  { name: 'Wandfliesen', href: '/leistungen/wandfliesen' },
  { name: 'Naturstein', href: '/leistungen/naturstein' },
  { name: 'Mosaik', href: '/leistungen/mosaik' },
  { name: 'Badezimmer', href: '/leistungen/badezimmer' },
  { name: 'Außenbereich', href: '/leistungen/aussenbereich' },
];

const company = [
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'Materialien', href: '/materialien' },
  { name: 'Kontakt', href: '/kontakt' },
];

const legal = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">Fliesenleger München</h3>
                <p className="text-sm text-gray-400">Meisterbetrieb seit 1998</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Ihr zuverlässiger Partner für hochwertige Fliesenverlegung in München
              und Umgebung. Mit über 25 Jahren Erfahrung und Meisterqualität.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-primary">Leistungen</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-primary">Unternehmen</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-primary">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Musterstraße 123
                  <br />
                  80331 München
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+4989123456"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  089 / 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@fliesenleger-muenchen.de"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  info@fliesenleger-muenchen.de
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Mo-Fr: 08:00 - 18:00 Uhr
                  <br />
                  Sa: Nach Vereinbarung
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Fliesenleger München. Alle Rechte vorbehalten.
            </p>

            {/* Social links: only show when real profile URLs are configured */}
            {(process.env.NEXT_PUBLIC_FACEBOOK_URL || process.env.NEXT_PUBLIC_INSTAGRAM_URL) && (
              <div className="flex items-center space-x-6">
                {process.env.NEXT_PUBLIC_FACEBOOK_URL && (
                  <a
                    href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
                  <a
                    href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}

            <div className="flex items-center space-x-4">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
