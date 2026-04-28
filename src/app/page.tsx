'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Explore from '@/components/Explore';
import TrustedBy from '@/components/TrustedBy';      
import Impact from '@/components/Impact';
import Testimonials from '@/components/Testimonials'; 
import FAQ from '@/components/FAQ';                   
import Footer from '@/components/Footer';
import Intro from '@/components/Intro/Intro';

export default function Home() {

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Explore />
        <TrustedBy />
        <Impact />
        <Testimonials />
        <FAQ />

      </main>
      <Footer />
    </>
  );
}