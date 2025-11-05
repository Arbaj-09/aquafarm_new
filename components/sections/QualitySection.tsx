'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaShieldAlt, FaLeaf, FaUsers, FaAward, FaRecycle } from 'react-icons/fa';

export default function QualitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    { icon: FaCertificate, name: 'ISO 9001:2015', desc: 'Quality Management' },
    { icon: FaShieldAlt, name: 'ISO 14001:2015', desc: 'Environmental Management' },
    { icon: FaUsers, name: 'ISO 45001:2018', desc: 'Occupational Health & Safety' },
    { icon: FaAward, name: 'GMP Certified', desc: 'Good Manufacturing Practices' },
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      description: 'Unwavering commitment to workplace safety and employee well-being',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaLeaf,
      title: 'Environmental Stewardship',
      description: 'Sustainable practices minimizing environmental impact',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaRecycle,
      title: 'Sustainable Innovation',
      description: 'Eco-friendly products and circular economy initiatives',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaAward,
      title: 'Quality Excellence',
      description: 'Rigorous quality control at every production stage',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="quality" ref={ref} className="relative py-32 bg-gradient-to-b from-white to-coolGray overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-green-500/10 text-green-600 font-semibold rounded-full mb-6 text-sm">
            Quality, Health, Safety & Environment
          </span>
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Committed to
            <br />
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Excellence & Sustainability
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting industry benchmarks in quality, safety, and environmental responsibility
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-light p-12 rounded-3xl">
            <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
              International Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-premium flex items-center justify-center group-hover:shadow-2xl transition-all">
                    <cert.icon className="text-3xl text-white" />
                  </div>
                  <h4 className="font-semibold text-primary mb-1">{cert.name}</h4>
                  <p className="text-xs text-gray-600">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="glass-light p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-500">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 glass-light p-12 rounded-3xl text-center"
        >
          <FaLeaf className="text-6xl text-green-500 mx-auto mb-6" />
          <h3 className="text-3xl font-heading font-bold text-primary mb-4">
            Our Environmental Pledge
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to reducing our carbon footprint, minimizing waste, and developing 
            eco-friendly products that contribute to a sustainable future. Our green chemistry initiatives 
            and responsible manufacturing processes reflect our dedication to protecting our planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
