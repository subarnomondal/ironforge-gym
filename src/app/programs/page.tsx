"use client";

import { motion } from "framer-motion";
import { Dumbbell, Utensils, Users, HeartPulse, Shield, Flame } from "lucide-react";
import { ProgramCard } from "@/components/ProgramCard";

const programs = [
  {
    title: "Strength Training",
    duration: "60 Min",
    difficulty: "Intermediate",
    description: "Build pure power with heavy compound movements and periodized progression models. Focus on squat, bench, and deadlift.",
    icon: <Dumbbell className="w-8 h-8" />
  },
  {
    title: "Cardio Blast",
    duration: "40 Min",
    difficulty: "All Levels",
    description: "Fast-paced routines focusing on stamina, heart health, and sustained energy. Incorporates rowing, biking, and running.",
    icon: <HeartPulse className="w-8 h-8" />
  },
  {
    title: "HIIT Burn",
    duration: "45 Min",
    difficulty: "Advanced",
    description: "High-intensity intervals designed to incinerate fat and boost cardiovascular endurance. Short bursts of max effort.",
    icon: <Flame className="w-8 h-8" />
  },
  {
    title: "Combat / Boxing",
    duration: "60 Min",
    difficulty: "All Levels",
    description: "Learn striking fundamentals, improve footwork, and get an incredible conditioning workout on the heavy bags.",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "CrossFit Elements",
    duration: "50 Min",
    difficulty: "Advanced",
    description: "The ultimate test of fitness. Combining Olympic weightlifting, gymnastics, and metabolic conditioning in one WOD.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Recovery & Yoga",
    duration: "45 Min",
    difficulty: "All Levels",
    description: "Active recovery sessions focusing on mobility, flexibility, and reducing muscle soreness to keep you training hard.",
    icon: <Utensils className="w-8 h-8" />
  }
];

export default function Programs() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <section className="py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading tracking-wide mb-6 uppercase"
        >
          Our <span className="text-primary">Programs</span>
        </motion.h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-10" />
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose your battlefield. We offer specialized training modalities to help you achieve your specific fitness goals.
        </p>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <ProgramCard 
                key={idx}
                title={prog.title}
                duration={prog.duration}
                difficulty={prog.difficulty}
                description={prog.description}
                icon={prog.icon}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
