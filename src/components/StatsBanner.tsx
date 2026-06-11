"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Members" },
  { value: "20+", label: "Expert Trainers" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Open Access" },
];

export function StatsBanner() {
  return (
    <div className="bg-primary py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-heading text-black mb-2">
                {stat.value}
              </div>
              <div className="text-black font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
