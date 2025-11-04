import React from 'react';

export default function TextilesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] bg-gradient-to-r from-purple-600 to-orange-500 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Textiles</h1>
          <p className="text-xl">Chemical Solutions for Textile Processing</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Textiles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">General Description</h3>
              <p className="text-gray-700 mb-4">
                The textiles industry has various requirements from water additives, during their scouring, dyeing, printing and finishing processes. Aquacid Phosphonates chelate hardness and heavy metal ions during these processes to control their harmful effects and optimize efficiency.
              </p>
              <p className="text-gray-700">
                Maxinol polymers are used during dyeing and printing with metallised dyes so that the salts are chelated without effecting the heavy metals in the dye.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea1f5c53?w=800&h=600&fit=crop" 
                alt="Textile manufacturing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Aquapharma</h2>
          
          {/* Phosphonates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Phosphonates</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Acid :</p>
                  <p className="text-gray-700">Aquacid 105, Aquacid 105EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Salt :</p>
                  <p className="text-gray-700">Aquacid 1054EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Powder :</p>
                  <p className="text-gray-700">Aquacid 1051P, Aquacid 1052P, Aquacid 1054P</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">DETMP Acid :</p>
                  <p className="text-gray-700">Aquacid 106EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">DETMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1067EXN, Aquacid 1067EX, Aquacid 1068EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Acid :</p>
                  <p className="text-gray-700">Aquacid 108EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1084EXNO, Aquacid 1086EX</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Polymers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Polymers</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Homopolymer :</p>
                  <p className="text-gray-700">Maxinol 5200, Maxinol 5250</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Maleic Copolymer :</p>
                  <p className="text-gray-700">Maxinol 4041, Maxinol 280SN</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Maleic Copolymer / Powder :</p>
                  <p className="text-gray-700">Maxinol 4041P</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Textile Processing Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Scouring',
              'Dyeing',
              'Printing',
              'Finishing',
              'Metal Ion Chelation',
              'Water Softening',
              'Bleach Stabilization',
              'Process Optimization',
            ].map((application) => (
              <div key={application} className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg border-l-4 border-purple-600 shadow-md hover:shadow-xl transition-shadow">
                <p className="text-gray-700 font-semibold text-center">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Textile Industry Solutions</h2>
          <p className="text-xl text-white mb-8">Contact us for specialized textile processing chemicals</p>
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
