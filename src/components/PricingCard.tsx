"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export function PricingCard({ title, price, features, isPopular, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative bg-white/5 backdrop-blur-md border p-8 flex flex-col",
        isPopular ? "border-primary" : "border-gray-500/50 hover:border-gray-400"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold uppercase tracking-widest text-xs px-4 py-1">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-heading tracking-wide mb-2 uppercase">{title}</h3>
      <div className="mb-6 flex items-baseline">
        <span className="text-5xl font-heading text-primary">{price}</span>
        <span className="text-gray-400 ml-2">/mo</span>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        className={cn(
          "w-full py-4 font-bold uppercase tracking-widest transition-all",
          isPopular 
            ? "bg-primary text-black hover:bg-white" 
            : "border border-white/20 hover:border-primary hover:text-primary"
        )}
      >
        Choose Plan
      </button>
    </motion.div>
  );
}
