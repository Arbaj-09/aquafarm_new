'use client';

import React, { useState } from 'react';

export default function SalesEnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Our sales team will contact you soon.');
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=300&fit=crop" 
          alt="Sales Enquiry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Sales Enquiry</h1>
            <p className="text-2xl">Request a quote or product information</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 scroll-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Company *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Product of Interest *</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              >
                <option value="">Select a product</option>
                <option value="Phosphonates">Phosphonates</option>
                <option value="Biodegradable/Green Chelates">Biodegradable/Green Chelates</option>
                <option value="Polymers">Polymers</option>
                <option value="Questoll Detergent Additive">Questoll Detergent Additive</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Estimated Quantity</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Information</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded hover:from-red-600 hover:to-orange-600 transition-all font-semibold"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
