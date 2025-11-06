'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaIndustry, FaGlobe, FaWarehouse } from 'react-icons/fa';

export default function FacilitiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const facilities = [
    {
      name: 'Pune Headquarters',
      location: 'Pune, Maharashtra, India',
      type: 'HQ & Manufacturing',
      description: 'Corporate headquarters with advanced R&D and production facilities',
      icon: FaIndustry,
    },
    {
      name: 'Mahad Plant',
      location: 'Mahad, Maharashtra, India',
      type: 'Manufacturing',
      description: 'Large-scale production facility with cutting-edge technology',
      icon: FaIndustry,
    },
    {
      name: 'Pirangut Facility',
      location: 'Pirangut, Maharashtra, India',
      type: 'Specialty Production',
      description: 'Specialized manufacturing unit for custom chemical solutions',
      icon: FaIndustry,
    },
    {
      name: 'USA Plant',
      location: 'United States',
      type: 'International Hub',
      description: 'Strategic manufacturing base serving North American markets',
      icon: FaGlobe,
    },
    {
      name: 'Global Warehouses',
      location: 'Worldwide',
      type: 'Distribution',
      description: 'Strategic warehousing across 50+ countries for rapid delivery',
      icon: FaWarehouse,
    },
  ];

  return (
    <section id="facilities" ref={ref} className="relative py-32 bg-gradient-to-br from-coolGray to-white overflow-hidden">
      {/* World map background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,150 Q200,100 300,150 T500,150 T700,150 T900,150 L1100,150" stroke="#002D72" strokeWidth="2"/>
          <path d="M100,300 Q250,250 400,300 T700,300 T1000,300" stroke="#002D72" strokeWidth="2"/>
          <path d="M150,450 Q350,400 550,450 T950,450" stroke="#002D72" strokeWidth="2"/>
          <circle cx="300" cy="200" r="5" fill="#00B4D8"/>
          <circle cx="500" cy="250" r="5" fill="#00B4D8"/>
          <circle cx="750" cy="300" r="5" fill="#00B4D8"/>
          <circle cx="900" cy="200" r="5" fill="#00B4D8"/>
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-secondary/10 text-secondary font-semibold rounded-full mb-6 text-sm">
            Global Presence
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            World-Class
            <br />
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Manufacturing Facilities
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic locations across continents enabling rapid delivery and exceptional service
          </p>
        </motion.div>

        {/* Interactive Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="glass-light rounded-3xl p-12 relative overflow-hidden">
            {/* Animated connecting lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 200 + 100}px`,
                  }}
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                    x: [-50, 50],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative text-center py-16">
              <FaGlobe className="text-8xl text-secondary/20 mx-auto mb-6 animate-float" />
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Serving 50+ Countries
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our global network spans across 6 continents with strategic manufacturing and distribution hubs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-light p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-premium flex items-center justify-center group-hover:animate-glow">
                  <facility.icon className="text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-2">
                    {facility.type}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {facility.name}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <FaMapMarkerAlt className="mr-2 text-secondary" />
                    {facility.location}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-light p-8 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5+', label: 'Manufacturing Units' },
              { value: '50+', label: 'Countries Served' },
              { value: '100K+', label: 'MT Annual Capacity' },
              { value: '24/7', label: 'Global Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
