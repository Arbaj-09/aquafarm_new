'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import QualitySection from '@/components/sections/QualitySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative" suppressHydrationWarning>
      {!mounted ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-600">Loading…</div>
        </div>
      ) : (
        <>

          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <AboutSection />

          {/* Products Section */}
          <ProductsSection />

          {/* Facilities Section */}
          <FacilitiesSection />

          {/* Quality & HSE Section */}
          <QualitySection />

          {/* Contact Section */}
          <ContactSection />
        </>
      )}
    </div>
  );
}

