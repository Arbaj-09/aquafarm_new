import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function OtherIndustriesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="/images/other industries hero.jpeg"
          alt="Other industries hero"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white flex items-center h-full">
          <h1 className="text-5xl font-bold mb-4">Other Industries</h1>
          <p className="text-xl">Customized Solutions for Diverse Applications</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Others</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">General Description</h3>
            <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
              Aquapharm products are used as chelants, dispersants, viscosity retarders, scale inhibitors and dissolvers in a wide range of applications across different industries. Some of them are:
            </p>
          </div>
          
          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Paper and Pulp',
                desc: 'Chemical Suppliers for Paper Industry',
                icon: '📄',
                image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop'
              },
              {
                name: 'Sugar',
                desc: 'Chemical Suppliers for sugar industries',
                icon: '🍭',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop'
              },
              {
                name: 'Personal care',
                desc: 'Chemical Suppliers for personal care products',
                icon: '🧼',
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop'
              },
              {
                name: 'Aquaculture',
                desc: 'Chemical Suppliers for Aquaculture',
                icon: '🐟',
                image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=300&fit=crop'
              },
              {
                name: 'Agriculture',
                desc: 'Chemical suppliers for Agriculture',
                icon: '🌾',
                image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
              },
              {
                name: 'Ceramics',
                desc: 'Chemical Suppliers for ceramics industries',
                icon: '🏺',
                image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop'
              },
              {
                name: 'Swimming pool',
                desc: 'Chemical Suppliers for swimming pool',
                icon: '🏊',
                image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop'
              },
              {
                name: 'Geothermal',
                desc: 'Chemical Suppliers for geothermal industries',
                icon: '♨️',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop'
              },
              {
                name: 'Paints and Coatings',
                desc: 'Chemical Suppliers for Paint Industry',
                icon: '🎨',
                image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop'
              },
              {
                name: 'Construction',
                desc: 'Chemical Suppliers for Construction',
                icon: '🏭',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'
              },
              {
                name: 'Electronics',
                desc: 'Electronics Industries Chemical Manufacturing',
                icon: '💻',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
              },
            ].map((industry) => (
              <div key={industry.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-orange-100">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3 text-center">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">{industry.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Our Product Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Chelants',
              'Dispersants',
              'Viscosity Retarders',
              'Scale Inhibitors',
              'Scale Dissolvers',
              'pH Adjusters',
              'Metal Ion Control',
              'Process Optimization',
            ].map((application) => (
              <div key={application} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <p className="text-gray-700 font-semibold text-center">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Diverse Industry Solutions</h2>
          <p className="text-xl text-white mb-8">Contact us to discuss your specific industry requirements</p>
          <a
            href="/sales-enquiry"
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
