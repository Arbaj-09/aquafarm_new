import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function QuestollPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1600&auto=format&fit=crop&q=70"
          alt="Questoll Detergent Additive"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Questoll Detergent Additive</h1>
            <p className="text-xl">Enhanced Detergent Performance</p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Questoll Detergent Additive</h2>
              <p className="text-gray-700 mb-4">
                Aquapharm offers a revolutionary new series of detergent builders, branded Questoll ™, which enhance washing properties compared to conventional builders such as STPP, Zeolites and Polycarboxylates.
              </p>
              <p className="text-gray-700 mb-6">
                Questoll™ delivers improved soil removal, incrustation control & LABSA stabilization at lower dosages.
              </p>
              
              <div className="bg-gradient-to-r from-purple-100 to-orange-100 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Enhanced washing properties',
                    'Superior to STPP, Zeolites and Polycarboxylates',
                    'Improved soil removal',
                    'Excellent incrustation control',
                    'LABSA stabilization',
                    'Effective at lower dosages',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1200&auto=format&fit=crop&q=70" 
                  alt="Detergent products" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1200&auto=format&fit=crop&q=70" 
                  alt="Cleaning solutions" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Laundry Detergents', desc: 'Enhanced performance in all wash conditions' },
              { name: 'Industrial Cleaners', desc: 'Superior cleaning power for heavy-duty applications' },
              { name: 'Specialty Formulations', desc: 'Custom solutions for specific cleaning needs' },
            ].map((app) => (
              <div key={app.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <h3 className="text-lg font-bold text-purple-700 mb-2">{app.name}</h3>
                <p className="text-gray-600 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Discover Questoll™ Advantage</h2>
          <p className="text-xl text-white mb-8">Contact us for samples and technical specifications</p>
          <a
            href="/sales-enquiry"
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Request Information
          </a>
        </div>
      </section>
    </div>
  );
}
