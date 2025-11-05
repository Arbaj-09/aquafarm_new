'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: '',
    enquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['Aquapharm Chemical Limited', 'Pune, Maharashtra, India'],
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+91-20-XXXX-XXXX', '+91-98XXX-XXXXX'],
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['info@aquapharm.com', 'sales@aquapharm.com'],
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 glass-light text-accent font-semibold rounded-full mb-6 text-sm">
            Get In Touch
          </span>
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Let's Start a
            <br />
            <span className="text-accent">Conversation</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Connect with our team of experts for tailored chemical solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <info.icon className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl text-center bg-white/15 backdrop-blur-xl border border-white/25 shadow-xl"
            >
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-white font-semibold mb-1">Global Support</p>
              <p className="text-sm text-gray-300">Always here to help you</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="p-8 lg:p-12 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/25 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Region *</label>
                  <select
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all"
                  >
                    <option value="">Select Region</option>
                    <option value="asia">Asia Pacific</option>
                    <option value="europe">Europe</option>
                    <option value="americas">Americas</option>
                    <option value="africa">Africa</option>
                    <option value="middle-east">Middle East</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2 text-sm">Enquiry Type *</label>
                <select
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all"
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="product">Product Information</option>
                  <option value="quote">Request Quote</option>
                  <option value="partnership">Partnership</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2 text-sm">Message *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-gold text-primary font-bold rounded-full text-lg shadow-2xl hover:shadow-accent/50 transition-all flex items-center justify-center space-x-3 group"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
