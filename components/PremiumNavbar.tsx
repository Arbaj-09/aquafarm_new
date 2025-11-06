'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PremiumNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setActiveDropdown(null); // Close dropdowns on scroll
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    // initialize state on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ensure consistent navbar background after route changes
  useEffect(() => {
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership Team', href: '/about/leadership-team' },
        { name: 'Our Journey', href: '/about/our-journey' },
        { name: 'Certification', href: '/about/certifications' },
      ],
    },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Phosphonates', href: '/products/phosphonates' },
        { name: 'Polymers', href: '/products/polymers' },
        { name: 'Biodegradable / Green Chelates', href: '/products/biodegradable-green-chelates' },
        { name: 'Questoll Detergent Additive', href: '/products/questoll-detergent-additive' },
        { name: 'Others', href: '/products/others' },
      ],
    },
    {
      name: 'Industry',
      href: '/industry',
      dropdown: [
        { name: 'Detergents', href: '/industry/detergents' },
        { name: 'Industrial Cleaners', href: '/industry/industrial-cleaners' },
        { name: 'Water Treatment', href: '/industry/water-treatment' },
        { name: 'Oil & Gas', href: '/industry/oil-and-gas' },
        { name: 'Textiles', href: '/industry/textiles' },
        { name: 'Others', href: '/industry/others' },
      ],
    },
    { name: 'Facilities', href: '/innovation-centre' },
    { name: 'CSR', href: '/csr' },
    { name: 'Investor Relations', href: '/investor-relations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-dark shadow-2xl ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-full glass-ultra flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-white font-heading font-bold text-xl lg:text-2xl">
                  Aquapharm Chemical
                </h1>
                <p className="text-secondary text-xs font-light">Premium Global Solutions</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div ref={dropdownRef} className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="text-white font-medium text-sm tracking-wide hover:text-accent transition-all duration-300 relative group flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <FaChevronDown
                          className={`text-xs transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 glass-light rounded-2xl shadow-2xl overflow-hidden z-50"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            className="block"
                          >
                            <Link
                              href={subItem.href}
                              className="block px-6 py-3 text-primary hover:bg-secondary/10 hover:text-secondary transition-all duration-200 font-medium text-sm border-b border-white/10 last:border-0 relative group"
                            >
                              <span className="relative z-10">{subItem.name}</span>
                              <span className="absolute left-0 top-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-300"></span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=""
              >
                <Link href="/sales-enquiry" className="px-6 py-2.5 bg-gradient-gold text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-glow">
                  Get Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white text-2xl z-50"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 glass-dark backdrop-blur-2xl overflow-y-auto">
              <div className="flex flex-col items-center justify-start h-full pt-32 pb-12 space-y-6">
                {menuItems.map((item, index) => (
                  <div key={item.name} className="w-full max-w-sm">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center"
                    >
                      <Link
                        href={item.href}
                        onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                        className="text-white text-xl font-heading font-semibold hover:text-accent transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>{item.name}</span>
                        {item.dropdown && <FaChevronDown className="text-sm" />}
                      </Link>
                    </motion.div>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="mt-3 space-y-2 pl-6"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-300 text-sm hover:text-accent transition-colors py-1"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6"
                >
                  <Link
                    href="/sales-enquiry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-8 py-3 bg-gradient-gold text-primary font-bold rounded-full text-lg shadow-2xl"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
