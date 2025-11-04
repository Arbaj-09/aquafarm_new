import React from 'react';

export default function IndustrialCleanersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] bg-gradient-to-r from-purple-600 to-orange-500 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Industrial Cleaners</h1>
          <p className="text-xl">Powerful Cleaning Solutions</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Industrial Cleaners</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">General Description</h3>
              <p className="text-gray-700 mb-4">
                Industrial and Institutional cleaning products are formulations addressing the requirements of varied market segments across industries. The key is to ensure consistent performance and effectivity across large-scale operations with high quality and cost-efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                AQUACID phosphonates have excellent scale/incrustation control even at high temperature and pH levels as well as chelation of Calcium and Magnesium salts and heavy metals – especially iron and manganese at alkaline pH.
              </p>
              <p className="text-gray-700">
                This effectively stabilizes bleaches and provides cost-effective alternatives to NTA, EDTA and polyphosphates, with far superior chelation capacities for use in I&I sector.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop" 
                alt="Industrial cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Aquapharm - Chemical Suppliers for industrial cleaners</h2>
          
          {/* Phosphonates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Phosphonates</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Acid :</p>
                  <p className="text-gray-700">Aquacid 105EX, Aquacid 105EXLC</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Salt :</p>
                  <p className="text-gray-700">Aquacid 1054EX, Aquacid 1054EXCL</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Powder, Granules :</p>
                  <p className="text-gray-700">Aquacid 1052P, Aquacid 1054P, Aquacid 1054PG</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Acid :</p>
                  <p className="text-gray-700">Aquacid 108EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1084EXNO</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PBTC Acid :</p>
                  <p className="text-gray-700">Aquacid 101EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">DETMP Acid :</p>
                  <p className="text-gray-700">Aquacid 106EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">DETMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1067EX, Aquacid 1068EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">EDTMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1095EX</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Biodegradable Chelating Agent */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Biodegradable Chelating Agent</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">GLDA Salt :</p>
                  <p className="text-gray-700">Aquacid 2014EX, Aquacid 2015EX</p>
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
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Maleic Copolymer Acid :</p>
                  <p className="text-gray-700">Maxinol 4041, Maxinol 280SN</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Maleic Copolymer Powder :</p>
                  <p className="text-gray-700">Maxinol 4041 P</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Homopolymer :</p>
                  <p className="text-gray-700">Maxinol 5250, Maxinol 5250N</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Performance Chemistry */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Performance Chemistry</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PC Series Acidic Acid :</p>
                  <p className="text-gray-700">Aquacid PC 922</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PC Series Neutral :</p>
                  <p className="text-gray-700">Aquacid PC 902</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PC Series Alkaline :</p>
                  <p className="text-gray-700">Aquacid PC 932, Aquacid PC 942</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Industrial & Institutional Cleaning Solutions</h2>
          <p className="text-xl text-white mb-8">Contact us for customized formulations and technical support</p>
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
