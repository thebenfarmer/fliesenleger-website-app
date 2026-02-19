'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const navigation = [
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Materialien', href: '/materialien' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-black/20 backdrop-blur-xs'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary shrink-0">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
            <div>
              <span className={cn(
                'text-base sm:text-xl font-bold leading-tight block',
                isScrolled ? 'text-foreground' : 'text-white'
              )}>
                Fliesenleger München
              </span>
              <span className={cn(
                'text-xs hidden sm:block',
                isScrolled ? 'text-muted-foreground' : 'text-gray-300'
              )}>
                Meisterbetrieb seit 1998
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-0.5'
                      : isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-white hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+4989123456"
              className={cn(
                'hidden md:flex items-center space-x-2 text-sm font-medium transition-colors',
                isScrolled ? 'text-primary hover:text-primary-600' : 'text-white hover:text-primary'
              )}
            >
              <Phone className="h-4 w-4" />
              <span>089 / 123 456</span>
            </a>

            <Link href="/kontakt" className="hidden md:inline-flex">
              <Button variant="primary" size="md">
                Festpreis-Angebot anfordern
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'text-base font-medium transition-colors',
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-foreground hover:text-primary'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 flex flex-col space-y-3">
              <a
                href="tel:+4989123456"
                className="flex items-center justify-center space-x-2 rounded-md border-2 border-primary py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>089 / 123 456</span>
              </a>

              <Link href="/kontakt" className="w-full">
                <Button variant="primary" size="md" fullWidth>
                  Festpreis-Angebot anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
