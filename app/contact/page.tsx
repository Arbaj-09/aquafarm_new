'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=300&fit=crop" 
          alt="Contact Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-2xl">We're here to help</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded hover:from-red-600 hover:to-orange-600 transition-all font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Corporate Office</h3>
                  <p className="text-gray-700">Aquapharm Chemicals Private Limited</p>
                  <p className="text-gray-700">India</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-700">info@aquapharm.com</p>
                  <p className="text-gray-700">sales@aquapharm.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-700">+91 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-purple-100 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Global Presence</h3>
                <p className="text-gray-700">
                  With operations in 40+ countries, we are always close to our customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
