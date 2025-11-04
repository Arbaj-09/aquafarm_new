'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'HOME', href: '/' },
    {
      name: 'ABOUT US',
      href: '/about',
      dropdown: [
        { name: 'About us', href: '/about' },
        { name: 'Leadership Team', href: '/about/leadership-team' },
        { name: 'Our Journey', href: '/about/our-journey' },
        { name: 'Certifications', href: '/about/certifications' },
      ],
    },
    {
      name: 'PRODUCTS',
      href: '/products',
      dropdown: [
        { name: 'Phosphonates', href: '/products/phosphonates' },
        { name: 'Biodegradable/Green Chelates', href: '/products/biodegradable-green-chelates' },
        { name: 'Polymers', href: '/products/polymers' },
        { name: 'Questoll Detergent Additive', href: '/products/questoll-detergent-additive' },
        { name: 'Others', href: '/products/others' },
      ],
    },
    {
      name: 'INDUSTRY',
      href: '/industry',
      dropdown: [
        { name: 'Detergents', href: '/industry/detergents' },
        { name: 'Industrial Cleaners', href: '/industry/industrial-cleaners' },
        { name: 'Water Treatment', href: '/industry/water-treatment' },
        { name: 'Oil and Gas', href: '/industry/oil-and-gas' },
        { name: 'Textiles', href: '/industry/textiles' },
        { name: 'Others', href: '/industry/others' },
      ],
    },
    { name: 'INNOVATION CENTRE', href: '/innovation-centre' },
    { name: 'CSR', href: '/csr' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'INVESTOR RELATIONS', href: '/investor-relations' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar with Logos */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 via-orange-500 to-purple-600 rounded-sm flex items-center justify-center">
            <div className="text-white text-xs font-bold">RP</div>
          </div>
          <div>
            <div className="text-sm font-bold text-purple-700">RP - Sanjiv Goenka</div>
            <div className="text-sm font-bold text-purple-700">Group</div>
            <div className="text-xs text-gray-600">Growing Legacies</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L3 7v6c0 5.55 3.84 9.74 7 10 3.16-.26 7-4.45 7-10V7l-7-5z" />
            </svg>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            AQUAPHARM
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-5 text-white text-sm font-medium hover:bg-white/10 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon */}
            <button className="hidden lg:block text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="bg-gray-50 pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
