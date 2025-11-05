import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function DetergentsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1590096227076-ebf4b077c89d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
          alt="Detergent manufacturing environment" 
          className="w-full h-full object-cover bg-gray-200"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Detergents</h1>
            <p className="text-2xl">Advanced Solutions for Detergent Manufacturing</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Detergents</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="scroll-fade-in-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-6">General Description</h3>
              <p className="text-gray-700 mb-4">
                The detergent industry is continually evolving its formulations to meet ever changing demands of the consumer-driven by changing lifestyles. AQUACID phosphonates find use as anti-incrustation additives in all kinds of cleaning formulations by virtue of their high chelation value and formation of stable complexes with heavy metals.
              </p>
              <p className="text-gray-700 mb-4">
                Besides anti-incrustation properties, they enhance detergency, stabilize bleach components and assist in stain removal. Phosphonates have high chelation value compared to commonly used builders like STPP and EDTA.
              </p>
              <p className="text-gray-700">
                Aquapharm Maxinol polymers are used to disperse the dirt removed from fabric and prevent its re-deposition.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl scroll-fade-in-right bg-gray-200">
              <ImageWithFallback 
                src="/images/adhitya-sibikumar-Jj8-Q0kekCo-unsplash.jpg" 
                alt="Detergent products" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center scroll-fade-in">Detergent Chemicals Suppliers</h2>
          
          {/* Phosphonates */}
          <div className="mb-12 scroll-fade-in-up">
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
                  <p className="font-semibold text-gray-800 mb-2">ATMP Powder :</p>
                  <p className="text-gray-700">Aquacid 1085P</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ATMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1084EXNO, Aquacid 1086EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">DETMP Acid :</p>
                  <p className="text-gray-700">Aquacid 106EX</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">EDTMP Salt :</p>
                  <p className="text-gray-700">Aquacid 1095EX</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Biodegradable Chelating Agent */}
          <div className="mb-12 scroll-fade-in-up scroll-delay-100">
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
          <div className="mb-12 scroll-fade-in-up scroll-delay-200">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Polymers</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Acrylic Maleic Copolymer :</p>
                  <p className="text-gray-700">Maxinol C 4041, Maxinol 280SN</p>
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
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Partner with Aquapharm for Detergent Solutions</h2>
          <p className="text-xl text-white mb-8">Contact us for product specifications and technical support</p>
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
