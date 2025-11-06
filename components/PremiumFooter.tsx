'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function PremiumFooter() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Aquapharm Chemical</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              A leading global manufacturer of specialty chemicals with 40+ years of excellence in innovation and quality.
            </p>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-12 h-12 rounded-full glass-tint-teal flex items-center justify-center transition-all"
                >
                  <Icon className="text-xl text-accent" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Facilities', 'Quality & HSE', 'Innovation', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Products</h4>
            <ul className="space-y-3">
              {['Phosphonates', 'Polymers', 'Biocides', 'Green Chelates', 'Oilfield Chemicals', 'Custom Solutions'].map((product) => (
                <li key={product}>
                  <a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Aquapharm Industries Ltd.<br />
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <span className="text-sm text-gray-300">+91-20-XXXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <span className="text-sm text-gray-300">info@aquapharm.com</span>
              </li>
            </ul>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block px-6 py-2.5 glass-tint-teal text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Aquapharm Chemical Limited. Part of RP-Sanjiv Goenka Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
