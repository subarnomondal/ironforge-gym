"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const equipmentList = [
  {
    name: "Elite Power Racks",
    description: "Heavy-duty Rogue Fitness power racks designed for maximum safety and heavy lifting.",
    image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=800&auto=format&fit=crop",
    features: ["Adjustable safety pins", "Multi-grip pull-up bars", "Band pegs"],
  },
  {
    name: "Premium Dumbbells",
    description: "Complete sets of urethane-coated hex dumbbells ranging from 5 lbs to 150 lbs.",
    image: "https://images.unsplash.com/photo-1638202029582-73a7d4cbab00?q=80&w=800&auto=format&fit=crop",
    features: ["Ergonomic grip", "Urethane coating", "Micro-increments"],
  },
  {
    name: "Advanced Cardio",
    description: "Assault bikes, Concept2 rowers, and curved treadmills for elite conditioning.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907cb5f296?q=80&w=800&auto=format&fit=crop",
    features: ["Zero-motor treadmills", "Fan resistance bikes", "Performance tracking"],
  },
  {
    name: "Olympic Lifting Gear",
    description: "Competition-grade barbells, bumper plates, and lifting platforms for serious athletes.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    features: ["Needle bearing bars", "Calibrated plates", "Shock-absorbing platforms"],
  },
  {
    name: "Functional Trainers",
    description: "Dual cable cross machines with a wide variety of attachments for accessory work.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    features: ["Dual weight stacks", "Adjustable pulleys", "Extensive attachments"],
  },
  {
    name: "Plate-Loaded Machines",
    description: "Iso-lateral chest presses, rows, and heavy-duty leg press machines for targeted hypertrophy.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    features: ["Iso-lateral movement", "Heavy weight capacity", "Biomechanically correct"],
  }
];

export function EquipmentSection() {
  return (
    <section className="py-24 bg-dark-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Our <span className="text-primary">Arsenal</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don&apos;t compromise on quality. Our facility is fully equipped with top-tier, competition-grade machinery and free weights designed for elite performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-black border border-white/10 overflow-hidden group hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading tracking-wide uppercase text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  {item.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
