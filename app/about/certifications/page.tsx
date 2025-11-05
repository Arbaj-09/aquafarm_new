import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function CertificationsPage() {
  const certifications = [
    { name: 'ISO 9001: 2015', description: 'Quality Management System' },
    { name: 'ISO 14001:2015', description: 'Environmental Management System' },
    { name: 'ISO 45001: 2018', description: 'Occupational Health and Safety Management' },
    { name: 'Responsible Care', description: 'Chemical Industry Initiative' },
    { name: 'Aquapharm Pchem ISO 14001:2015', description: 'Environmental Management' },
    { name: 'Aquapharm Pchem ISO 45001:2018', description: 'Health and Safety Management' },
    { name: 'Aquapharm Pchem ISO 9001:2015', description: 'Quality Management' },
    { name: 'RCMC Federation of Indian Export Organisations', description: 'Export Certification' },
    { name: 'MCCIA Certificate', description: 'Chamber Certification' },
    { name: 'ECOCERT', description: 'Organic Certification' },
    { name: 'COSMOS', description: 'Cosmetics Standard' },
    { name: 'Kosher – Pirangut', description: 'Kosher Certification for Pirangut Plant' },
    { name: 'Kosher – Mahad', description: 'Kosher Certification for Mahad Plant' },
    { name: 'Halal', description: 'Halal Certification' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback 
          src="/images/certification hero.jpg" 
          alt="Certifications" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Certifications</h1>
            <p className="text-2xl">Quality Assured, Globally Recognized</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-fade-in">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our certifications demonstrate our unwavering commitment to quality, safety, environmental responsibility, and excellence in manufacturing. We continuously strive to meet and exceed international standards in all aspects of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-blue-600 scroll-fade-in-up scroll-delay-${Math.min(index * 100, 500)}`}>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{cert.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl scroll-fade-in-left bg-gray-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&auto=format&fit=crop&q=70" 
                alt="Quality Assurance" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="scroll-fade-in-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment to Excellence</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 scroll-fade-in-up scroll-delay-100">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">100% Quality Assurance</h3>
                    <p className="text-gray-700">Every product undergoes rigorous testing to ensure compliance with international standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 scroll-fade-in-up scroll-delay-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Quality Monitoring</h3>
                    <p className="text-gray-700">Continuous quality control throughout the manufacturing process</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 scroll-fade-in-up scroll-delay-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Global Standards Compliance</h3>
                    <p className="text-gray-700">Adherence to international quality, safety, and environmental standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
