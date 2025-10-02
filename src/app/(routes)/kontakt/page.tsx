import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie uns für ein kostenloses Beratungsgespräch. Fliesenleger-Meisterbetrieb in München mit über 25 Jahren Erfahrung.',
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Kontakt aufnehmen
              </h1>
              <p className="text-lg text-primary-100">
                Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns telefonisch,
                per E-Mail oder nutzen Sie unser Kontaktformular für eine kostenlose
                Beratung.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
