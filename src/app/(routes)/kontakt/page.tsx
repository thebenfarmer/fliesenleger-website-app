import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Fliesenleger München kontaktieren | Kostenlose Beratung | Festpreis in 48h',
  description:
    'Kostenlose Beratung vom Münchner Fliesenleger-Meisterbetrieb. Festpreis-Angebot in 48 Stunden. Dreifach-Garantie. Antwort innerhalb von 24h. Jetzt unverbindlich anfragen.',
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                In 48 Stunden wissen Sie, was Ihr Traumprojekt kostet
              </h1>
              <p className="text-lg text-primary-100">
                Kostenlose Beratung. Verbindlicher Festpreis. Dreifach-Garantie auf jedes
                Projekt. Starten Sie jetzt – wir melden uns innerhalb von 24 Stunden.
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
