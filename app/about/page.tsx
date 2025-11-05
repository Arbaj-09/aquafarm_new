import React from 'react';
import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback 
          src="/images/Aquapharm Chemical.jpg" 
          alt="About Aquapharm" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">About Aquapharm</h1>
            <p className="text-2xl">Building a sustainable supply chain</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We supply unique chemistries which maximise the productivity & efficiency of our customer's formulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 scroll-fade-in-up">
            <div>
              <p className="text-gray-700 mb-4 text-lg">
                For last 40 years we are supplying our clients across the world to enhance the lives of their customers with our Phosphonates, Polymers, Oil field Chemicals and Biodegradable chelating agents.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Our primary focus continues to be the manufacture and supply of best in class performance chemicals to the world.
              </p>
              <p className="text-gray-700 text-lg">
                Aquapharm Chemical Limited is a part of RP-Sanjiv Goenka Group. To know more about the Group, visit: <a href="https://www.rpsg.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">www.rpsg.in</a>
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&auto=format&fit=crop&q=70" 
                alt="Chemical manufacturing facility" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about#quality" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center scroll-fade-in-up scroll-delay-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality at Aquapharm</h3>
              <p className="text-blue-600 font-semibold">READ MORE</p>
            </Link>
            
            <Link href="/about#hse" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center scroll-fade-in-up scroll-delay-200">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Health, Safety and Environment at Aquapharm</h3>
              <p className="text-green-600 font-semibold">READ MORE</p>
            </Link>
            
            <Link href="/about#service" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center scroll-fade-in-up scroll-delay-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Service Excellence</h3>
              <p className="text-purple-600 font-semibold">READ MORE</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6 scroll-fade-in">Our facilities</h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-4xl mx-auto scroll-fade-in scroll-delay-100">
            We have put in place an infrastructure backbone that can service various parts of our value chain that spans across continents and keeps us close to our customers and their markets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-100">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop" alt="Innovation Centre" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation Centre</h3>
                <p className="text-gray-700">A LEED certified building, located in the largest industrial area of Pune, India</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-200">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" alt="Headquarters" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Headquarters</h3>
                <p className="text-gray-700">A spacious and modern office space located in the heart of the city centre in Pune, India</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop" alt="Pirangut Plant" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pirangut Plant</h3>
                <p className="text-gray-700">State of the art manufacturing plant making high quality products at Pirangut, India</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-400">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop" alt="Mahad Plant" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mahad Plant</h3>
                <p className="text-gray-700">State of the art manufacturing plant making high quality products at Mahad, India</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-500">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop" alt="USA Plant" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">USA Plant</h3>
                <p className="text-gray-700">Located in Latexo, Houston, Texas</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow scroll-fade-in-up scroll-delay-600">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop" alt="Warehouses" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Warehouses</h3>
                <p className="text-gray-700">Close to the customers with warehouses all over the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RP Sanjiv Goenka Group */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center scroll-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Part of RP-Sanjiv Goenka Group</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Aquapharm Chemical Limited is a part of RP-Sanjiv Goenka Group. To know more about the Group, visit: <a href="https://www.rpsg.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">www.rpsg.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 scroll-fade-in">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about/leadership-team" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border border-gray-200 scroll-fade-in-up scroll-delay-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Leadership Team</h3>
              <p className="text-gray-700">Meet the people driving our success</p>
            </Link>
            <Link href="/about/our-journey" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border border-gray-200 scroll-fade-in-up scroll-delay-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Journey</h3>
              <p className="text-gray-700">Discover our history and milestones</p>
            </Link>
            <Link href="/about/certifications" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border border-gray-200 scroll-fade-in-up scroll-delay-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Certifications</h3>
              <p className="text-gray-700">View our quality certifications</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
