import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function WaterTreatmentPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://bisan.in/images/water-effluent-treatment-chemicals-1.jpg"
          alt="Water Treatment"
          className="w-full h-full object-cover bg-gray-200"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Water Treatment</h1>
            <p className="text-2xl">Comprehensive Water Treatment Solutions</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Water Treatment Chemicals</h2>
          
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="scroll-fade-in-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-6">Introduction</h3>
              <p className="text-gray-700 mb-4">
                Population growth, industrialisation & water scarcity is placing increasing importance on efficient water use & effective water treatment. An industrial water treatment chemical treats water so it is more appropriate for a given use, whether for consumption, manufacturing, or even disposal.
              </p>
              <p className="text-gray-700">
                Aquapharm supplies wide range of industrial water treatment chemicals for various scale control, corrosion control and biofouling for applications like Open ; Closed cooling tower water treatment, Reverse Osmosis Process, Thermal desalination treatment etc.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl scroll-fade-in-right bg-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&h=600&q=70"
                alt="Water treatment facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Industrial Applications */}
          <div className="mb-16 scroll-fade-in-up">
            <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">Water Treatment Chemicals Manufacturers</h3>
            <h4 className="text-2xl font-bold text-purple-700 mb-6">Industrial Applications</h4>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Industrial water treatment chemicals can provide a dramatic return on investment for your facility. A well-designed water treatment chemical program can help trim energy costs, maintenance costs, lost dollars due to wasted products/by-products, discharge fees, and even regulatory fine.
              </p>
              <p className="text-gray-700 mb-4">
                Aquapharm manufactures and supplies products those reduce scaling and fouling by interfering with crystal growth and by dispersing loosely formed scales. They protect heat transfer surfaces and RO membranes to ensure optimum heat transfer in all water-based applications.
              </p>
              <p className="text-gray-700">
                Aquapharm provides the market expertise, manufacturing capability and chemical portfolio to ensure that industrial water treatment operations remain safe, efficient, and cost effective. Aquapharm supplies product portfolio includes low and high molecular weight polymers, phosphonates, biocides, green polymers and chelants for controlling CaCO3, CaSO4, Ca 3 (PO4) 2, silica scale and various other scales along with corrosion control products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Phosphonates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 scroll-fade-in-up">Phosphonates</h3>
            <div className="bg-white p-8 rounded-lg shadow-md scroll-fade-in-up scroll-delay-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Acid :</p>
                  <p className="text-gray-700">Aquacid 105EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Acid :</p>
                  <p className="text-gray-700">Aquacid 105NS</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Acid :</p>
                  <p className="text-gray-700">Aquacid 108EX, Aquacid 108NS</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1084EX, Aquacid 1086NS</p>
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
                  <p className="text-gray-700">Aquacid 1067EX, Aquacid 1067EXN, Aquacid 106NS</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HMDTMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1076EX, Aquacid 1076NS</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PAPEMP Salt :</p>
                  <p className="text-gray-700">Aquacid 112EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PMP Salt :</p>
                  <p className="text-gray-700">Aquacid 110EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HPAA Acid :</p>
                  <p className="text-gray-700">Aquacid 118EX</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Polymers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 scroll-fade-in-up scroll-delay-200">Polymers</h3>
            <div className="bg-white p-8 rounded-lg shadow-md scroll-fade-in-up scroll-delay-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Polycarboxylic Acid :</p>
                  <p className="text-gray-700">Maxinol 5160, Maxinol 5170</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Homopolymer :</p>
                  <p className="text-gray-700">Maxinol 5100</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Homopolymer :</p>
                  <p className="text-gray-700">Maxinol 5200</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic AMPS Copolymer :</p>
                  <p className="text-gray-700">Maxinol 4200</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic AMPS Copolymer :</p>
                  <p className="text-gray-700">Maxinol 4300</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Terpolymer :</p>
                  <p className="text-gray-700">Maxinol 5300, Maxinol 5400, Maxinol 2050</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Maleic Terpolymer :</p>
                  <p className="text-gray-700">PM 210, Maxinol 4740, Maxinol 4700</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Polymaleic Acid :</p>
                  <p className="text-gray-700">PM 200, Maxinol 4600, Maxinol 4900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Key Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Cooling Tower Treatment',
              'Boiler Water Treatment',
              'Reverse Osmosis',
              'Thermal Desalination',
              'Scale Control',
              'Corrosion Control',
              'Biofouling Control',
              'Membrane Protection',
            ].map((application, index) => (
              <div key={application} className={`bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-600 shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-${Math.min(index * 100, 500)}`}>
                <p className="text-gray-700 font-semibold text-center">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Optimize Your Water Treatment Process</h2>
          <p className="text-xl text-white mb-8">Contact our experts for customized water treatment solutions</p>
          <a
            href="/sales-enquiry"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
