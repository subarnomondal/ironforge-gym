"use client";

import { motion } from "framer-motion";
import { Dumbbell, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-gray-800 animate-pulse absolute inset-0 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym texture" 
            className="w-full h-full object-cover grayscale relative z-10"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              target.previousElementSibling?.remove();
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading tracking-wide mb-6 uppercase"
          >
            The <span className="text-primary">IronForge</span> Story
          </motion.h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-10" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Founded in 2015, IronForge was built on a simple philosophy: no shortcuts, no excuses, just hard work and heavy iron. We wanted to create an environment where athletes could train without the distractions of a commercial gym.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-dark-gray border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading tracking-wide mb-4">Our Mission</h3>
              <p className="text-gray-400">To forge stronger, more resilient individuals through expert coaching and a community that demands excellence.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6 text-primary">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading tracking-wide mb-4">The Facility</h3>
              <p className="text-gray-400">10,000 sq ft of pure training space. Power racks, Olympic lifting platforms, and strongman equipment.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6 text-primary">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading tracking-wide mb-4">The Atmosphere</h3>
              <p className="text-gray-400">Loud music, chalk in the air, and a culture of mutual respect. This is where PRs are made.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
