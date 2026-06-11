"use client";

import { motion } from "framer-motion";
import { Clock, BarChart } from "lucide-react";

interface ProgramCardProps {
  title: string;
  duration: string;
  difficulty: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function ProgramCard({ title, duration, difficulty, description, icon, delay = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-dark-gray border border-white/10 p-8 flex flex-col h-full group"
    >
      <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-heading tracking-wide mb-3">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart className="w-4 h-4" />
          <span>{difficulty}</span>
        </div>
      </div>
      <p className="text-gray-400 flex-grow">{description}</p>
    </motion.div>
  );
}
