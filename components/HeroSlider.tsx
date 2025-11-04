'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: 'Serving the industries across the world',
      subtitle: '',
      description: 'With an extensive network in 40+ countries, we are always close to our customers',
      buttonText: 'REACH US',
      buttonLink: '/contact',
      bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=600&fit=crop',
    },
    {
      title: 'Building a Sustainable Supply Chain',
      subtitle: '',
      description: 'We constantly adapt and customise to meet customer requirements and ensure timely supply delivery',
      buttonText: 'REACH US',
      buttonLink: '/contact',
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=600&fit=crop',
    },
    {
      title: 'Growing Legacies',
      subtitle: 'We are now part of RP-Sanjiv Goenka Group',
      description: '',
      buttonText: 'Know More',
      buttonLink: '/about',
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop',
    },
    {
      title: 'Globally trusted for quality products',
      subtitle: '',
      description: "Serving the world's largest manufacturers with proven products across wide range of water additive chemicals",
      buttonText: 'REACH US',
      buttonLink: '/contact',
      bgImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=600&fit=crop',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundColor: index === 0 ? '#e5e5e5' : index === 1 ? '#d0e7f9' : index === 2 ? '#f0e7d5' : '#e0f2f7',
            }}
          />

          {/* Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700 mb-4">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {slide.subtitle}
                </h2>
              )}
              {slide.description && (
                <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-xl">
                  {slide.description}
                </p>
              )}
              <Link
                href={slide.buttonLink}
                className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded hover:from-red-600 hover:to-orange-600 transition-all font-semibold"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 right-8 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-blue-500 w-8'
                : 'bg-orange-400 hover:bg-orange-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-4">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
        >
          Contact Us
        </Link>
        <Link
          href="/sales-enquiry"
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
        >
          Sales Enquiry
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
