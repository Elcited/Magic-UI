import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Logos from '@/components/sections/Logos';
import Price from '@/components/sections/Price';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Testimonials from '@/components/sections/Testimonials';
import TestimonialsCarousel from '@components/sections/TestimonialsCarousel';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <TestimonialsCarousel />
      <Features />
      <Testimonials />
      <Price />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
