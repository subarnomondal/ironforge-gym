"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <section className="py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading tracking-wide mb-6 uppercase"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-10" />
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to join the IronForge community? Drop us a message or visit the facility.
        </p>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-gray p-8 border border-white/10"
            >
              <h2 className="text-3xl font-heading tracking-wide mb-6 uppercase">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black border-b-2 border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black border-b-2 border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-black border-b-2 border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-black border-b-2 border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors"
                >
                  Submit Message
                </button>
              </form>
            </motion.div>

            {/* Gym Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              <div className="bg-dark-gray p-8 border border-white/10">
                <h2 className="text-3xl font-heading tracking-wide mb-6 uppercase">Facility Info</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Address</h4>
                      <p className="text-gray-400">123 Industrial Park Road<br />Mumbai, MH 400001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Phone</h4>
                      <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Email</h4>
                      <p className="text-gray-400">info@ironforgegym.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Working Hours</h4>
                      <p className="text-gray-400">Open 24/7 for Members<br />Staffed Hours: 6:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-64 border border-white/10 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d120638.06693527218!2d72.82229562479261!3d19.113645001704255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%, Maharashtra!5e0!3m2!1sen!2sin!4v1707038167389!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-dark-gray border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">What They <span className="text-primary">Say</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: "John D.", review: "Best gym I've ever been to. No nonsense, just hard work." },
              { name: "Emily R.", review: "The trainers are exceptional. They really pushed me past my limits." },
              { name: "Mike T.", review: "Love the raw, industrial vibe. It really gets you in the zone." },
              { name: "Sarah L.", review: "Incredible equipment and an amazing community of dedicated people." },
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-white/10 p-6 flex flex-col"
              >
                <div className="flex text-primary mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 flex-grow italic">"{review.review}"</p>
                <div className="font-bold text-white uppercase tracking-widest text-xs">- {review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
