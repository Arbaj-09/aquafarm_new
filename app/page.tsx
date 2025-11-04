import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in-left">
              <h2 className="text-4xl font-bold text-purple-700 mb-6">Leading the Way in Specialty Chemicals</h2>
              <p className="text-gray-700 text-lg mb-6">
                Aquapharm is a leading manufacturer of specialty chemicals, serving industries across the globe with innovative and sustainable solutions. 
                With over two decades of excellence, we have established ourselves as a trusted partner for businesses worldwide.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                With an extensive network spanning over 40+ countries across six continents, we are committed to delivering quality products, 
                exceptional service, and technical expertise that helps our customers achieve their goals.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                Our state-of-the-art manufacturing facilities, combined with continuous R&D innovation, ensure we stay at the forefront of the specialty chemicals industry.
              </p>
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded hover:from-red-600 hover:to-orange-600 transition-all font-semibold text-lg"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl scroll-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop" 
                alt="Chemical manufacturing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Our Premium Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of specialty chemicals designed to meet the diverse needs of global industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Phosphonates', 
                href: '/products/phosphonates',
                image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
                desc: 'Advanced scale and corrosion inhibitors for water treatment applications'
              },
              { 
                name: 'Biodegradable/Green Chelates', 
                href: '/products/biodegradable-green-chelates',
                image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400&h=300&fit=crop',
                desc: 'Environmentally responsible chelating agents for sustainable operations'
              },
              { 
                name: 'Polymers', 
                href: '/products/polymers',
                image: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=400&h=300&fit=crop',
                desc: 'High-performance polymers for industrial water treatment'
              },
              { 
                name: 'Questoll Detergent Additive', 
                href: '/products/questoll-detergent-additive',
                image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop',
                desc: 'Premium additives for enhanced detergent performance'
              },
              { 
                name: 'Water Treatment Chemicals', 
                href: '/products/others',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
                desc: 'Comprehensive solutions for all water treatment needs'
              },
              { 
                name: 'Specialty Chemicals', 
                href: '/products/others',
                image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop',
                desc: 'Custom formulations for unique industrial applications'
              },
            ].map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.desc}</p>
                  <div className="mt-4 text-purple-700 font-semibold flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading manufacturers worldwide across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Detergents', href: '/industry/detergents', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
              { name: 'Industrial Cleaners', href: '/industry/industrial-cleaners', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
              { name: 'Water Treatment', href: '/industry/water-treatment', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { name: 'Oil and Gas', href: '/industry/oil-and-gas', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { name: 'Textiles', href: '/industry/textiles', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
              { name: 'Others', href: '/industry/others', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
            ].map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-lg text-center hover:shadow-xl transition-all group hover:from-orange-100 hover:to-purple-100"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-purple-600 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={industry.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-orange-600 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-xl">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Global Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Why Choose Aquapharm?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for innovative chemical solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Global Reach',
                desc: 'Serving 40+ countries with reliable distribution network',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Quality Standards',
                desc: 'ISO certified processes ensuring premium quality',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              },
              {
                title: 'Innovation First',
                desc: 'Continuous R&D for cutting-edge solutions',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              },
              {
                title: 'Expert Support',
                desc: 'Dedicated technical team for customer success',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-purple-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 relative overflow-hidden scroll-fade-in">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and discover how our innovative solutions can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl"
            >
              Contact Us
            </Link>
            <Link
              href="/sales-enquiry"
              className="inline-block bg-purple-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors shadow-xl hover:shadow-2xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
