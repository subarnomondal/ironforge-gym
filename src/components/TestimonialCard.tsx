"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  review: string;
  rating?: number;
  delay?: number;
}

export function TestimonialCard({ name, review, rating = 5, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-dark-gray border border-white/10 p-8 flex flex-col h-full"
    >
      <div className="flex text-primary mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-primary" : "text-gray-600"}`}
          />
        ))}
      </div>
      <p className="text-gray-300 italic mb-6 flex-grow">"{review}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border border-white/20">
          <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wider">{name}</h4>
          <span className="text-xs text-primary uppercase tracking-widest">Verified Member</span>
        </div>
      </div>
    </motion.div>
  );
}
