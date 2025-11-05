'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHistory, FaGlobeAmericas, FaAward, FaUsers } from 'react-icons/fa';

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: FaHistory,
      title: '40+ Years Heritage',
      description: 'Pioneering specialty chemicals since 1980s with continuous innovation',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Global Presence',
      description: 'Serving 50+ countries across 6 continents with excellence',
    },
    {
      icon: FaAward,
      title: 'Quality Excellence',
      description: 'ISO certified with world-class manufacturing standards',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: '500+ dedicated professionals driving innovation',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-gradient-to-b from-white to-coolGray overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"
                alt="Chemical Laboratory"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 glass-light p-8 rounded-3xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-gray-700 font-semibold">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-2 bg-secondary/10 text-secondary font-semibold rounded-full mb-6 text-sm">
              About Aquapharm
            </span>
            
            <h2 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Leading Global Manufacturer of
              <span className="bg-gradient-gold bg-clip-text text-transparent"> Specialty Chemicals</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Aquapharm Chemical Limited, part of the prestigious <strong>RP-Sanjiv Goenka Group</strong>, 
              stands as a beacon of excellence in specialty chemical manufacturing. With over four decades 
              of unwavering commitment to innovation and quality, we have established ourselves as a trusted 
              global partner.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our state-of-the-art facilities in <strong>Pune, Mahad, Pirangut, and USA</strong>, combined 
              with a robust global distribution network, enable us to deliver world-class products and 
              services to industries across water treatment, oil & gas, textile, and more.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-light p-6 rounded-2xl group hover:shadow-xl transition-all"
                >
                  <feature.icon className="text-4xl text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading font-semibold text-primary mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 inline-block px-10 py-4 bg-gradient-premium text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              Partner With Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
