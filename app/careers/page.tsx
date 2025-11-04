import React from 'react';

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=500&fit=crop" 
          alt="Careers at Aquapharm" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Work with us</h1>
            <p className="text-2xl">Join Our Team of Excellence</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 scroll-fade-in">
            <p className="text-xl text-gray-700 mb-6">
              Does the idea of working with one of the leading speciality chemicals manufacturer in the world excite you? Then you are at the right place.
            </p>
            <p className="text-gray-700 mb-4">
              At Aquapharm we are constantly looking for people who are passionate about chemicals and changing lives for the better. We are a company on the fast track of growth and we are looking for ambitious, growth-oriented people who want to be part of our journey.
            </p>
            <p className="text-gray-700 mb-4">
              Aquapharm offers you the opportunity of working in a highly professional environment and serving the world's most famous and best multinationals as clients. We encourage our employees to build organizational capabilities in the areas of R&D, SCM, Manufacturing, Logistics and Corporate functions, and be part of a bright and exciting future.
            </p>
            <p className="text-gray-700 mb-4">
              Currently across India, Europe and USA, the Aquapharm footprint is set to spread further across the globe opening up global careers. We are committed to creating one of the most diverse, inclusive and innovative workforces in the industry.
            </p>
            <p className="text-gray-700 mb-4">
              If you are a professional who is passionate about creating real value for our customers and committed to excellence, then we should talk.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              Please reach out to us at <a href="mailto:hrd@aquapharm.net" className="text-purple-700 hover:text-orange-500 underline">hrd@aquapharm.net</a> to join our team.
            </p>
            <p className="text-gray-700 font-semibold">
              We offer challenging work, an empowering work environment and competitive compensation.
            </p>
          </div>
          
          <div className="relative h-64 rounded-lg overflow-hidden shadow-xl mb-12 scroll-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=400&fit=crop" 
              alt="Aquapharm India team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sales Enquiry Form */}
      <section className="py-16 bg-gray-50 scroll-fade-in">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Sales Enquiry</h2>
          <p className="text-center text-gray-700 mb-8">
            We would like to hear from you. Please send us a message by filling out the form below and we will get back to you shortly.
          </p>
          
          <form className="bg-white p-8 rounded-lg shadow-lg scroll-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter First Name" 
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter Last Name" 
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mobile Phone *</label>
                <input 
                  type="tel" 
                  placeholder="Enter Mobile Number" 
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Name of the company *</label>
              <input 
                type="text" 
                placeholder="Enter Name of the Company" 
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Region *</label>
                <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>--None--</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Africa</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Request As *</label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="requestAs" value="buyer" className="mr-2" />
                    <span className="text-gray-700">Buyer</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="requestAs" value="seller" className="mr-2" />
                    <span className="text-gray-700">Seller</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Select Enquiry Type *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Phosphonates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Polymer</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Biocides</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Green Chelates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Others</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea 
                placeholder="Enter the Message" 
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-12 py-3 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-orange-600 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
