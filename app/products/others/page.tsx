import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function OtherProductsPage() {
  const productTable = [
    { product: 'MBT', brand: 'AQUAPHARM MBT II', chemical: 'Methylene Bis-Thiocayanate', abbr: 'MBT' },
    { product: 'Acetyl chloride', brand: 'Acetyl chloride', chemical: 'Acetyl chloride', abbr: 'Acetyl chloride' },
    { product: 'Cl-TT Sodium salt', brand: 'AQUACID CI 8104', chemical: 'Chlorotolyltriazole, Sodium Salt', abbr: 'Cl-TT sodium salt' },
  ];
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1600&auto=format&fit=crop&q=70"
          alt="Other Specialty Chemicals"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Other Specialty Chemicals</h1>
            <p className="text-xl">Diverse Solutions for Various Industries</p>
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
          
          <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">Others</h2>
          
          {/* MBT Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-purple-700 mb-6">MBT – Biocide</h3>
              <p className="text-gray-700 mb-4">
                Aquapharm offers Methylene Bis-Thiocynate (MBT) which is a non-metallic organo-sulfur biocide. It is a crystalline solid and possesses excellent fungicidal, algaecidal and bactericidal properties.
              </p>
              <p className="text-gray-700">
                MBT's excellent penetration powers make it the preferred biocide in applications such as wood and leather preservation and other applications like cooling water systems, paints, surface coatings and adhesives.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&auto=format&fit=crop&q=70" 
                alt="MBT Biocide" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Acetyl Chloride Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 lg:order-1 bg-gray-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop&q=70" 
                alt="Acetyl Chloride" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-purple-700 mb-6">Acetyl Chloride</h3>
              <p className="text-gray-700">
                It is used in organic synthesis for acetylation/esterification and Friedel craft reaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Others</h2>
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
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
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
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">MBT Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Wood Preservation',
              'Leather Preservation',
              'Cooling Water Systems',
              'Paints & Coatings',
              'Surface Coatings',
              'Adhesives',
            ].map((application) => (
              <div key={application} className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg border-l-4 border-purple-600 shadow-md hover:shadow-xl transition-shadow">
                <p className="text-gray-700 font-semibold text-center">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Specialty Chemicals?</h2>
          <p className="text-xl text-white mb-8">Contact our team for technical specifications and ordering information</p>
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
