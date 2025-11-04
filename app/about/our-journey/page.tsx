import React from 'react';

export default function OurJourneyPage() {
  const milestones = [
    { year: '1974', title: 'Desalting Kits & Water Treatment Formulations', description: '' },
    { year: '1981-1983', title: 'Developed Process for AMP, HEDP (Phosphonates)', description: 'Developed Polymers/Dispersants, Biocides (MBT, DCP, QAC) (Backward Integration)' },
    { year: '1987', title: 'Pirangut Plant Commissioned', description: 'First Major Capacity Expansion' },
    { year: '1996', title: 'JV with Houseman', description: 'Seperation of Manufacturing & Marketing' },
    { year: '1998', title: 'Formulation Business Sold to Nalco - Ecolab', description: 'Aquapharm Changes Focus to Manufaturing Products for WT Formulators' },
    { year: '1998-2002', title: 'New Applications for Phosphonates & Polymers', description: 'Decision to Invest in a New Facility' },
    { year: '2002', title: 'Tie up with Rhodia', description: 'For Toll Manufacture of MBT' },
    { year: '2003', title: 'Mahad Phosphonate Plant Commissioned', description: '' },
    { year: '2005-2020', title: 'Mahad Capacity Expansion', description: 'Continuous growth through 2005, 2008, 2016, 2018, 2020' },
    { year: '2015', title: 'Aquapharm Europe B.V.', description: 'Amsterdam, Netherlands' },
    { year: '2017', title: 'Acquisition of APChem, USA', description: '' },
    { year: '2019', title: 'APChem Commences Commercial Production', description: 'Texas, USA' },
    { year: '2019', title: 'Acquisition of USCI', description: 'Saudi Arabia' },
    { year: '2020', title: 'Aquapharm Specialty Chemicals, LLC', description: 'Texas, USA' },
    { year: '2023', title: 'Became a Part of RP-Sanjiv Goenka Group', description: '' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=500&fit=crop" 
          alt="Our Journey" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Journey</h1>
            <p className="text-2xl">Growing Legacies</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-6 items-start scroll-fade-in-up scroll-delay-${Math.min(index * 100, 500)}`}>
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-md">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    {milestone.description && (
                      <p className="text-gray-700">{milestone.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RP Sanjiv Goenka Group Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl scroll-fade-in-left">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                alt="RP-Sanjiv Goenka Group Partnership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg scroll-fade-in-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Part of RP-Sanjiv Goenka Group (2023)</h2>
              <p className="text-gray-700 mb-4">
                In 2023, Aquapharm became a part of the RP-Sanjiv Goenka Group, marking a significant milestone in our journey.
              </p>
              <p className="text-gray-700 mb-4">
                The RP-Sanjiv Goenka Group is one of India's leading business conglomerates with interests spanning power and energy, carbon black manufacturing, retail, IT-enabled services, FMCG, media and entertainment, education, and sports.
              </p>
              <p className="text-gray-700">
                This strategic partnership combines our 50 years of expertise in specialty chemicals with the group's extensive resources and market presence, positioning us for accelerated growth in the global market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
