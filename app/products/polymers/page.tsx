import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function PolymersPage() {
  const productTable = [
    { product: 'PM200', brand: 'Maxinol PM200', chemical: 'Polymaleic acid', abbr: 'PMA' },
    { product: 'PM210', brand: 'Maxinol PM210', chemical: 'Maleic terpolymer', abbr: 'Maleic terpolymer' },
    { product: 'M4300', brand: 'Maxinol4300', chemical: 'Sulfonated acrylate copolymer', abbr: 'AA-AMPS' },
    { product: 'M5100', brand: 'Maxinol5100', chemical: 'Acrylate homopolymer', abbr: 'PAA' },
    { product: 'M5160', brand: 'Maxinol5160', chemical: 'Phosphino polycarboxylate', abbr: 'PCA' },
    { product: 'M5400', brand: 'Maxinol5400', chemical: 'Proprietary,partially non-ionic terpolymer', abbr: 'Non-ionic terpolymer' },
    { product: 'M4041', brand: 'Maxinol4041', chemical: 'Acrylic maleic copolymer', abbr: 'Acrylic maleic copolymer' },
  ];
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback 
          src="/images/poymers hero.jpg" 
          alt="Polymers" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Polymers</h1>
            <p className="text-2xl">Specialty Polymers for Water Treatment</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 scroll-fade-in">
            <p className="text-xl text-gray-700 mb-6 text-center max-w-4xl mx-auto">
              Aquapharm is committed to continuous quality and performance improvement. Our products are rigorously tested before reaching the market. Our innovation efforts are geared to create products which are increasingly green & biodegradable
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="scroll-fade-in-left">
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Polymers - Acrylic, Maleic Acid-based Homo, Co & Terpolymers</h2>
              <p className="text-gray-700 mb-4">
                Aquapharm manufactures a wide range of polymers, under the Maxinol brand. The range covers Homo, Co & Terpolymers of Acrylic acid, Maleic acid & Phosphino carboxylic acids. Some of the Maxinol polymers are designed to have low polydispersity index which results in high performance.
              </p>
              <p className="text-gray-700 mb-4">
                Maxinol polymers find application in virtually all water treatment areas, like cooling water, boiler water, closed systems, reverse osmosis and thermal desalination. Maxinol polymers have a very low Polydispersity index which results in high performance.
              </p>
              <p className="text-gray-700">
                Maxinol polymers are used for anti-redeposition and anti incrustation properties in cleaning formulations.
              </p>
            </div>
            <div className="space-y-6 scroll-fade-in-right">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop&q=70" 
                  alt="Polymer manufacturing" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&auto=format&fit=crop&q=70" 
                  alt="Chemical products" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 scroll-fade-in">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Polymers, Antiscalants, Dispersants</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Product</th>
                  <th className="px-6 py-4 text-left font-bold">Brand</th>
                  <th className="px-6 py-4 text-left font-bold">Chemical Name</th>
                  <th className="px-6 py-4 text-left font-bold">Abbreviation</th>
                </tr>
              </thead>
              <tbody>
                {productTable.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} scroll-fade-in-up scroll-delay-${Math.min(index * 50, 300)}`}>
                    <td className="px-6 py-4 border-t border-gray-200 font-semibold text-purple-700">{row.product}</td>
                    <td className="px-6 py-4 border-t border-gray-200 text-gray-700">{row.brand}</td>
                    <td className="px-6 py-4 border-t border-gray-200 text-gray-700">{row.chemical}</td>
                    <td className="px-6 py-4 border-t border-gray-200 text-gray-600">{row.abbr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Cooling Water Treatment',
              'Boiler Water Treatment',
              'Closed Systems',
              'Reverse Osmosis',
              'Thermal Desalination',
              'Cleaning Formulations',
            ].map((application, index) => (
              <div key={application} className={`bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg border-l-4 border-purple-600 shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-${Math.min(index * 100, 500)}`}>
                <p className="text-gray-700 font-semibold text-center">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Custom Polymer Solutions?</h2>
          <p className="text-xl text-white mb-8">Contact our technical team for Maxinol product recommendations</p>
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
