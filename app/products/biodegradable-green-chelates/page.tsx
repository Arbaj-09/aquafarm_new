import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function BiodegradableGreenChelatesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1545126178-862cdb469409?w=1600&auto=format&fit=crop&q=70"
          alt="Biodegradable/Green Chelates"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Biodegradable/Green Chelates</h1>
            <p className="text-xl">Environmentally Friendly Chemical Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-xl text-gray-700 mb-6 text-center max-w-4xl mx-auto">
              Aquapharm is committed to continuous quality and performance improvement. Our products are rigorously tested before reaching the market. Our innovation efforts are geared to create products which are increasingly green & biodegradable
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Biodegradable/Green Chelates</h2>
              <p className="text-gray-700 mb-4">
                Chelating agents are widely used in many industrial, domestic, and agriculture applications due to their ability to complex metals. Over the last decades, they have been used in several applications, however, the fact that they are not biodegradable leads to the presence of considerable amounts in aquatic systems, with serious environmental consequences.
              </p>
              <p className="text-gray-700 mb-4">
                The replacement of these compounds by biodegradable alternatives has been the need of the hour. Aquapharm is at the forefront of developing and manufacturing eco-friendly chelating agents that provide excellent performance while being completely biodegradable.
              </p>
              <p className="text-gray-700">
                Our green chelates are designed to meet the stringent environmental standards while maintaining superior complexing efficiency, making them ideal for various industrial and consumer applications.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=70" 
                alt="Biodegradable chelates" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Environmental Benefits */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">Environmental Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">100% Biodegradable</h4>
                <p className="text-gray-700 text-sm">Completely breaks down in natural environments</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">No Aquatic Toxicity</h4>
                <p className="text-gray-700 text-sm">Safe for marine and freshwater ecosystems</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Sustainable Choice</h4>
                <p className="text-gray-700 text-sm">Meets global environmental regulations</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['MGDA', 'GLDA', 'IDS', 'EDDS'].map((product) => (
              <div key={product} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-600 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{product}</h3>
                <p className="text-gray-700">High-performance biodegradable chelating agent</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Detergents & Cleaners', desc: 'Household and industrial cleaning products' },
              { name: 'Personal Care', desc: 'Cosmetics and toiletries formulations' },
              { name: 'Agriculture', desc: 'Micronutrient delivery systems' },
              { name: 'Water Treatment', desc: 'Scale prevention and metal ion control' },
              { name: 'Textile Processing', desc: 'Dyeing and finishing operations' },
              { name: 'Pulp & Paper', desc: 'Bleaching and processing applications' },
            ].map((app) => (
              <div key={app.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-purple-700 mb-2">{app.name}</h3>
                <p className="text-gray-600 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Choose Sustainable Chemistry</h2>
          <p className="text-xl text-white mb-8">Partner with us for eco-friendly chelating solutions</p>
          <a
            href="/sales-enquiry"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
