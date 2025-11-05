import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function OilAndGasPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1624905181196-4ee8cb2522c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1384" 
          alt="Oil and gas operations hero" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Oil and Gas</h1>
            <p className="text-xl">Specialty Chemicals for Oil & Gas Operations</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Oil & Gas</h2>
          
          {/* Oil Field Chemicals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-purple-700 mb-6">Oil Field Chemicals</h3>
              <h4 className="text-xl font-bold text-purple-700 mb-4">General Description</h4>
              <p className="text-gray-700 mb-4">
                Speciality Oil field Chemicals are used extensively to improve oilfield efficiency and productivity. This helps to maximize the recovery of oil and gas reserves while minimizing its environmental impact.
              </p>
              <p className="text-gray-700 mb-4">
                Aquapharm is well established Oilfield chemicals manufacturer and supplier of a wide range of scale inhibitors and scale dissolvers for the Oil and Gas industry. Tenured with multiple decades of unrivaled chemical expertise, is as close to a perfect partnership as one could get. Aquapharm delivers world class oilfield chemicals products designed for today's modern technology and engineering.
              </p>
              <p className="text-gray-700">
                Our products offer various benefits like scale minimization, product optimization, inhibition and dispersion of carbonate and sulphate scales and other difficult scales.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <ImageWithFallback 
                src="/images/christian-harb-76yzygeNLT0-unsplash.jpg" 
                alt="Oil and gas operations" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Industrial Applications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">Aquapharm - Chemicals Suppliers for Oil Gas Industry</h3>
            <h4 className="text-2xl font-bold text-purple-700 mb-6">Industrial Applications</h4>
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-4">
                In Oil and Gas industry operations, scale deposition on the surface and subsurface production equipment can cause different problems such as formation damage, loss in production, pressure reductions, and premature failure of down hole equipment.
              </p>
              <p className="text-gray-700 mb-4">
                Due to geochemical processes between injection water, connate water and rock, the complex composition of reservoir fluids make it difficult to control the inorganic scale formation. Carbonate (calcium), sulfide (iron, zinc), and sulfate (calcium, barium, strontium) scales are more common in oilfield applications, specifically oilfield scales are calcium carbonate (limescale), iron sulfides, barium sulfate and strontium sulfate.
              </p>
              <p className="text-gray-700 mb-4">
                The scale formation depends on several factors that include, but are not limited to, temperature, pressures, solution saturation and hydrodynamic behavior of the flow. Oilfield scaling is the precipitation and accumulation of insoluble crystals (salts) from a mixture of incompatible aqueous phases in Oil processing systems.
              </p>
              <p className="text-gray-700">
                Aquapharm manufacture and supplies Oilfield chemicals prevent scaling due to the mixing of incompatible injection water and formation water. Aquapharm offers oilfield chemicals for dissolving different types of inorganic deposits. The anti-scalants used are from our range of phosphonates, polymers, biodegradable chelants and biodegradable polymers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Scale Inhibitors - Phosphonates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Scale Inhibitors</h3>
            <h4 className="text-xl font-bold text-purple-700 mb-4">Phosphonates</h4>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">EABMP Acid :</p>
                  <p className="text-gray-700">Aquacid 102EX, Aquacid 1021EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PAPEMP Salt :</p>
                  <p className="text-gray-700">Aquacid 112EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">BHTPMP Acid :</p>
                  <p className="text-gray-700">Aquacid 103EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AEEA Phosphonic Acid :</p>
                  <p className="text-gray-700">Aquacid 113EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AEEA Phosphonate Salt :</p>
                  <p className="text-gray-700">Aquacid 111EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Ethoxylated Polyamine Phosphonate :</p>
                  <p className="text-gray-700">Aquacid 130EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">DETMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1062EX, Aquacid 1067EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HMDTMP Acid :</p>
                  <p className="text-gray-700">Aquacid 1076EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">HEDP Acid :</p>
                  <p className="text-gray-700">Aquacid 105EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">PBTC Acid :</p>
                  <p className="text-gray-700">Aquacid 101EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Acid :</p>
                  <p className="text-gray-700">Aquacid 108EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1086EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">EABMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1022EX</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Polymers */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-purple-700 mb-4">Polymers</h4>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylate Caboxylate Copolymer :</p>
                  <p className="text-gray-700">Maxinol 4200</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Homopolymer :</p>
                  <p className="text-gray-700">Maxinol 5200</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Phosphino Carboxylic Acid :</p>
                  <p className="text-gray-700">Maxinol 5160</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Terpolymer :</p>
                  <p className="text-gray-700">Maxinol 5400</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Terpolymer :</p>
                  <p className="text-gray-700">Maxinol 2050</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Maleic Copolymer :</p>
                  <p className="text-gray-700">Maxinol 4740</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Maleic Terpolymer :</p>
                  <p className="text-gray-700">PM 210</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Polymaleic Acid :</p>
                  <p className="text-gray-700">PM 200</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scale Dissolvers */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-purple-700 mb-4">Scale Dissolvers</h4>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Biodegradable CaCO3 scale dissolver :</p>
                  <p className="text-gray-700">Aquacid 2020EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">BaSO4 scale dissolver :</p>
                  <p className="text-gray-700">Aquacid 3000EX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Oil Field Chemical Solutions</h2>
          <p className="text-xl text-white mb-8">Partner with Aquapharm for proven oilfield chemical expertise</p>
          <a
            href="/sales-enquiry"
            className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
