import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const productCategories = [
    {
      name: 'Phosphonates',
      href: '/products/phosphonates',
      description: 'High-performance scale and corrosion inhibitors for water treatment applications.',
    },
    {
      name: 'Biodegradable/Green Chelates',
      href: '/products/biodegradable-green-chelates',
      description: 'Environmentally friendly chelating agents for various industrial applications.',
    },
    {
      name: 'Polymers',
      href: '/products/polymers',
      description: 'Specialty polymers for water treatment and industrial processes.',
    },
    {
      name: 'Questoll Detergent Additive',
      href: '/products/questoll-detergent-additive',
      description: 'Advanced additives for enhanced detergent performance.',
    },
    {
      name: 'Others',
      href: '/products/others',
      description: 'Additional specialty chemical solutions for diverse applications.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-purple-600 to-orange-500 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Innovative Chemical Solutions for Global Industries</p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-6">Quality Products, Proven Performance</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer a comprehensive range of specialty chemicals designed to meet the diverse needs of industries worldwide. 
              Our products are known for their quality, reliability, and environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">{category.name}</h3>
                <p className="text-gray-700 text-center">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-12">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality Assured', description: 'All products meet international quality standards' },
              { title: 'Eco-Friendly', description: 'Sustainable and environmentally responsible solutions' },
              { title: 'Proven Performance', description: 'Trusted by leading industries worldwide' },
              { title: 'Technical Support', description: 'Expert guidance and support available' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-purple-700 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
