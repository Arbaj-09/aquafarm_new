'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFlask, FaWater, FaLeaf, FaOilCan, FaIndustry, FaAtom } from 'react-icons/fa';

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const products = [
    {
      icon: FaAtom,
      name: 'Phosphonates',
      description: 'Advanced scale and corrosion inhibitors for water treatment and industrial applications',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaFlask,
      name: 'Polymers',
      description: 'High-performance polymers for water treatment, oil field, and industrial processes',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaWater,
      name: 'Biocides',
      description: 'Eco-friendly biocides ensuring microbial control in various industrial applications',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: FaLeaf,
      name: 'Green Chelates',
      description: 'Sustainable chelating agents for environmentally conscious industrial solutions',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: FaOilCan,
      name: 'Oilfield Chemicals',
      description: 'Specialized chemicals for enhanced oil recovery and production optimization',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: FaIndustry,
      name: 'Custom Solutions',
      description: 'Tailored chemical formulations designed for specific industry requirements',
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="products" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #002D72 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-6 text-sm">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Comprehensive Chemical
            <br />
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Product Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative specialty chemicals designed to meet the evolving needs of global industries
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative glass-light p-8 rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-500">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <product.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="relative text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Learn more link */}
                <motion.a
                  href="#contact"
                  className="relative inline-flex items-center text-secondary font-semibold group-hover:text-primary transition-colors"
                >
                  <span>Learn More</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${product.gradient} rounded-bl-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-premium text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            View Complete Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
