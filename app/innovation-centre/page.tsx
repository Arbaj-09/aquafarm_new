import React from 'react';

export default function InnovationCentrePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] bg-gradient-to-r from-purple-600 to-orange-500 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Innovation Centre</h1>
          <p className="text-xl">Pioneering the Future of Specialty Chemicals</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Our Innovation Hub</h2>
              <p className="text-gray-700 mb-4">
                Our state-of-the-art Innovation Centre is dedicated to developing cutting-edge chemical solutions 
                that address the evolving needs of industries worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                With a team of expert researchers and scientists, we focus on sustainable innovation, 
                green chemistry, and performance optimization.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Research Focus Areas</h2>
              <ul className="space-y-3">
                {[
                  'Biodegradable Chemical Solutions',
                  'Water Treatment Technologies',
                  'Sustainable Manufacturing Processes',
                  'Performance Enhancement',
                  'Environmental Impact Reduction',
                ].map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-700 rounded-full" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Advanced R&D Facilities', description: 'Equipped with latest technology and equipment' },
              { title: 'Expert Team', description: 'Experienced scientists and researchers' },
              { title: 'Quality Testing', description: 'Comprehensive quality assurance protocols' },
            ].map((capability) => (
              <div key={capability.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-purple-700 mb-3">{capability.title}</h3>
                <p className="text-gray-700">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
