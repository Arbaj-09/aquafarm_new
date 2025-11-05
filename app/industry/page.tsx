import React from 'react';
import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function IndustryPage() {
  const industries = [
    { name: 'Detergents', href: '/industry/detergents', description: 'Advanced solutions for detergent manufacturing' },
    { name: 'Industrial Cleaners', href: '/industry/industrial-cleaners', description: 'Powerful cleaning formulations for industrial applications' },
    { name: 'Water Treatment', href: '/industry/water-treatment', description: 'Comprehensive water treatment solutions' },
    { name: 'Oil and Gas', href: '/industry/oil-and-gas', description: 'Specialty chemicals for oil and gas operations' },
    { name: 'Textiles', href: '/industry/textiles', description: 'Chemical solutions for textile processing' },
    { name: 'Others', href: '/industry/others', description: 'Customized solutions for various industries' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1520697222862-355cda3a0385?w=1920&auto=format&fit=crop&q=70"
          alt="Industries We Serve"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl">Globally trusted for quality products</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700">
              Serving the world's largest manufacturers with proven products across wide range of water additive chemicals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v6c0 5.55 3.84 9.74 7 10 3.16-.26 7-4.45 7-10V7l-7-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">{industry.name}</h3>
                <p className="text-gray-700 text-center">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
