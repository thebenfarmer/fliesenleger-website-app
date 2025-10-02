import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyContactBar from '@/components/layout/StickyContactBar';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Materials from '@/components/sections/Materials';
import Testimonials from '@/components/sections/Testimonials';
import Guarantees from '@/components/sections/Guarantees';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <TrustBadges />
        <Services />
        <Process />
        <Portfolio />
        <Materials />
        <Testimonials />
        <Guarantees />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
