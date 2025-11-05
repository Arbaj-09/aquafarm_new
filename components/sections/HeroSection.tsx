'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import ImageWithFallback from '@/components/ImageWithFallback';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1920&auto=format&fit=crop&q=70"
          alt="Laboratory specialist chemicals"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 glass-light text-[#FFD166] font-semibold rounded-full mb-6 text-sm tracking-wide">Premium Global Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Aquapharm Chemical Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering global excellence in specialty chemicals with 40+ years of innovation, 
            sustainability, and world-class manufacturing
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 209, 102, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link href="/contact" className="px-10 py-4 bg-gradient-gold text-primary font-bold rounded-full text-lg shadow-2xl flex items-center space-x-3 group">
                <span>Get Started</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="px-10 py-4 glass-light text-white font-semibold rounded-full text-lg flex items-center space-x-3 group">
                <FaInfoCircle className="text-sm" />
                <span>Learn More</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '40+', label: 'Years of Excellence' },
              { value: '50+', label: 'Countries Served' },
              { value: '500+', label: 'Global Clients' },
              { value: '100+', label: 'Product Portfolio' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass-light p-5 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-[#FFD166] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
