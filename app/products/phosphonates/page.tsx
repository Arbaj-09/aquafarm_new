import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function PhosphonatesPage() {
  const productCategories = [
    { name: 'HEDP', chemistries: ['HEDP', 'ATMP', 'DETPMP', 'PBTC'] },
    { name: 'AEEA Phosphonate', chemistries: ['AEEA Phosphonate'] },
    { name: 'BHMTMP', chemistries: ['BHMTMP'] },
    { name: 'PAPEMP', chemistries: ['PAPEMP'] },
    { name: 'HMDTMP', chemistries: ['HMDTMP'] },
    { name: 'HPAA', chemistries: ['HPAA'] },
    { name: 'EDTMP', chemistries: ['EDTMP'] },
    { name: 'EABMP', chemistries: ['EABMP'] },
    { name: 'PMP', chemistries: ['PMP'] },
    { name: 'ATMP-N-Oxide', chemistries: ['ATMP-N-Oxide'] },
  ];
  
  const productTable = [
    { product: 'HEDP', brand: 'AQUACID 105EX', chemical: '1-Hydroxyethane-1, 1-diphosphonic acid', abbr: 'HEDP Acid' },
    { product: 'HEDP', brand: 'AQUACID 1054EX', chemical: 'Tetrasodium salt of 1-hydroxyethane-1, 1-diphosphonic acid', abbr: 'Na4 HEDP' },
    { product: 'HEDP', brand: 'AQUACID 1054P', chemical: 'Powder of sodium salt of 1-hydroxyethane-1,1-diphosphonic acid', abbr: 'Na HEDP Powder' },
    { product: 'HEDP', brand: 'AQUACID 1054PG', chemical: 'Granular sodium salt of 1-hydroxyethane-1, 1-diphosphonic acid', abbr: 'Na HEDP Granular' },
    { product: 'HEDP', brand: 'AQUACID 105EXLC', chemical: 'Low chloride of 1-hydroxyethane-1, 1-diphosphonic acid', abbr: 'HEDP Acid Low Chloride' },
    { product: 'HEDP', brand: 'AQUACID 1050P', chemical: 'Powder of 1-hydroxyethane-1,1-diphosphonic acid', abbr: 'HEDP Acid Powder' },
    { product: 'ATMP', brand: 'AQUACID 108EX', chemical: 'Amino tri(methylene phosphonic acid)', abbr: 'ATMP Acid' },
    { product: 'ATMP', brand: 'AQUACID 1086EX', chemical: 'Pentasodium salt of amino tri(methylene phosphonic acid)', abbr: 'Na5 ATMP' },
    { product: 'ATMP', brand: 'AQUACID 1085P', chemical: 'Sodium salt of amino tri(methylene phosphonic acid)', abbr: 'Na ATMP' },
    { product: 'DETPMP', brand: 'AQUACID 106EX', chemical: 'Diethylenetriaminepenta(methylene phosphonic acid)', abbr: 'DETPMP Acid' },
    { product: 'DETPMP', brand: 'AQUACID 1067EX', chemical: 'Heptasodium salt of diethylenetriaminepenta(methylene phosphonic acid)', abbr: 'Na7DETPMP' },
    { product: 'DETPMP', brand: 'AQUACID 1067EXN', chemical: 'Partially neutralized sodium salt of diethylenetriaminepenta(methylene phosphonic acid)', abbr: 'DETPMP Nax' },
    { product: 'PBTC', brand: 'AQUACID 101EX', chemical: 'Phosphonobutane tricarboxylic acid', abbr: 'PBTC Acid' },
    { product: 'PBTC', brand: 'AQUACID 1014EX', chemical: 'Tetrasodium salt of Phosphonobutane tricarboxylic acid', abbr: 'Na4PBTC' },
    { product: 'AEEA phosphonate', brand: 'AQUACID 113EX', chemical: 'Aminoethylethanolamine phosphonate', abbr: 'AEEA phosphonic acid' },
    { product: 'AEEA phosphonate', brand: 'AQUACID 111EX', chemical: 'Ammonium salt of aminoethylethanolamine phosphonate', abbr: 'AEEA Salt' },
    { product: 'PAPEMP', brand: 'AQUACID 114EX', chemical: 'Polyamino polyether methylene phosphonic acid', abbr: 'PAPEMP Acid' },
    { product: 'PAPEMP', brand: 'AQUACID 112EX', chemical: 'Sodium salt of polyamino polyether methylene phosphonic acid', abbr: 'Na PAPEMP' },
    { product: 'HMDTMP', brand: 'AQUACID 1076EX', chemical: 'Hexapotassium salt of hexamethylene diaminetera(methylene phosphonic acid)', abbr: 'K6 HMDTMP' },
    { product: 'HPAA', brand: 'AQUACID 118EX', chemical: 'Hydroxyphosphono acetic acid', abbr: 'HPAA' },
    { product: 'EDTMP', brand: 'AQUACID 109EX', chemical: 'Powder of Ethylenediaminetetra(methylene phsosphonic acid)', abbr: 'EDTMP Acid Powder' },
    { product: 'EDTMP', brand: 'AQUACID 1095EX', chemical: 'Pentasodium salt of ethylenediaminetetra(methylene phsosphonic acid)', abbr: 'Na5EDTMP' },
    { product: 'EABMP', brand: 'AQUACID 102EX', chemical: 'Ethanolamine bis(methylenephosphonic acid)', abbr: 'EABMP Acid' },
    { product: 'EABMP', brand: 'AQUACID 1022EX', chemical: 'Ethanolamine bis(methylenephosphonic acid) sodium salt', abbr: 'Na EABMP' },
    { product: 'BHMTMP', brand: 'AQUACID 103EX', chemical: 'Bis (hexamethylene) triaminepenta (methylenephophonic acid)', abbr: 'BHMTMP Acid' },
    { product: 'PMP', brand: 'AQUACID 110EX', chemical: 'Tetrasodium-phosphonoethane-1,2-dicarboxylate; hexasodium-phosphonobutane1,2,3,4-tetracarboxylate', abbr: 'PMP Acid' },
    { product: 'ATMP-N-Oxide', brand: 'AQUACID 1084EXNO', chemical: '[Nitrilotris(methylene)]trisphosphonic acid N-oxide, pentapotassium salt', abbr: 'ATMP-N-Oxide' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="/images/Phosphonates.jpg"
          alt="Phosphonates"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Phosphonates</h1>
            <p className="text-xl">High-Performance Scale and Corrosion Inhibitors</p>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">About Phosphonates</h2>
              <p className="text-lg text-gray-700 mb-6">
                Aquapharm is committed to continuous quality and performance improvement. Our products are rigorously tested before reaching the market. Our innovation efforts are geared to create products which are increasingly green & biodegradable
              </p>
              <p className="text-gray-700 mb-4">
                Aquapharm manufactures a wide range of organophosphonates, under the AQUACID brand. Aquacid phosphonates exhibit multifunctional properties like threshold inhibition sequestration of metal ions and de-flocculation. In conjunction with their excellent hydrolytic and thermal stability, these properties make phosphonates superior to other sequestering agents in cost-effectiveness and performance.
              </p>
              <p className="text-gray-700 mb-4">
                High stability constants of phosphonates with heavy metals, ensures improved stabilization of the active bleach and assists in the removal of stains caused by heavy metal-containing liquids like tea, coffee, red wine, etc.
              </p>
              <p className="text-gray-700">
                The phosphonates from Aquapharm are utilised in a multitude of industries, such as in Home and Personal care, Industrial & Institutional scenarios, Industrial water treatment, Desalination plants, Oil & Gas, Pulp & Paper manufacturing, Geothermal industries, Mining and Textile industries – where water is essential in the processes. We regularly develop products which meet customer requirements and comply with the highest safety, quality & environmental standards.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&auto=format&fit=crop&q=70" 
                  alt="Phosphonate products" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&auto=format&fit=crop&q=70" 
                  alt="Chemical manufacturing" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Product Range */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Aquapharm Phosphonates Product Range</h2>
            <p className="text-gray-700 mb-6">
              Aquapharm offers a wide range of phosphonate products under the trade name AQUACID. The portfolio focusses on various chemistries, such as:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {productCategories.map((cat) => (
                <div key={cat.name} className="bg-gradient-to-br from-purple-50 to-orange-50 p-4 rounded-lg border-l-4 border-purple-600 text-center">
                  <p className="font-bold text-purple-700">• {cat.name}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6">
              These products are available in different grades and in various salt forms – sodium (Na+), potassium (K+), ammonium (NH4+) – with different pH or active concentration levels. AQUACID covers wide range of industrial applications such as scale inhibition/prevention, dispersion, bleach stabilization, metal chelation, cleaning agents and metal corrosion inhibition. Aquapharm also manufactures special grades of phosphonates with high purity low chloride for cosmetics and other applications.
            </p>
          </div>

          {/* Specialty Phosphonates */}
          <div className="mb-16 bg-gradient-to-r from-purple-100 to-orange-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Specialty Phosphonates</h2>
            <p className="text-gray-700">
              Aquapharm offers wide range of speciality phosphonates in their solid forms such as powder and granules in addition to standard liquid offerings. The phosphonate business unit manufactures various speciality products and formulations meeting properties for a number of specific industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center">Applications</h2>
          <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Phosphonates are used as speciality additives in different industrial applications such as dispersion, bleach stabilization, metal chelation, cleaning agents in homecare, and scale inhibition & metal corrosion inhibition in cooling water application.
          </p>
          <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Our phosphonates find usage in an extremely broad spectrum of technical fields. This is mainly due to their multifunctional properties:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '⚗️', text: 'Complexing agent and threshold active substance' },
              { icon: '💧', text: 'Efficient dispersant properties' },
              { icon: '🔥', text: 'Excellent hydrolytic and thermal stability' },
              { icon: '🛡️', text: 'Ability to control scale formation' },
              { icon: '🔬', text: 'Prevention of water hardness ions & other trace metal ions' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3 text-center">{item.icon}</div>
                <p className="text-gray-700 text-center">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Home and Personal Care',
              'Industrial & Institutional',
              'Industrial Water Treatment',
              'Desalination Plants',
              'Oil & Gas',
              'Pulp & Paper Manufacturing',
              'Geothermal Industries',
              'Mining',
              'Textile Industries',
            ].map((application) => (
              <div key={application} className="bg-white p-4 rounded-lg shadow-md text-center border-l-4 border-orange-500">
                <p className="text-gray-700 font-semibold">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Phosphonates, Scale inhibitors, Antiscalants, Chelating agents</h2>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Custom Phosphonate Solutions?</h2>
          <p className="text-xl text-white mb-8">Contact our technical team for product recommendations and specifications</p>
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
