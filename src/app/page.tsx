"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Dumbbell, Users, Utensils, Phone } from "lucide-react";
import { StatsBanner } from "@/components/StatsBanner";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EquipmentSection } from "@/components/EquipmentSection";
import { BMICalculator } from "@/components/BMICalculator";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Gym background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-wider mb-6 text-white"
          >
            FORGE YOUR <span className="text-primary">LIMITS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Unleash your potential in an environment designed for raw power and elite performance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/pricing" className="bg-primary text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2">
              Join Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/programs" className="bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest px-8 py-4 hover:border-primary hover:text-primary transition-all">
              View Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Why Choose <span className="text-primary">IronForge</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-gray border border-white/10 p-10 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                <Dumbbell className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading tracking-wide mb-4 uppercase">Modern Equipment</h3>
              <p className="text-gray-400">State-of-the-art machines and free weights designed for serious strength training.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-gray border border-white/10 p-10 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading tracking-wide mb-4 uppercase">Expert Trainers</h3>
              <p className="text-gray-400">Professional coaches dedicated to pushing your limits and perfecting your form.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-gray border border-white/10 p-10 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading tracking-wide mb-4 uppercase">Nutrition Plans</h3>
              <p className="text-gray-400">Customized meal plans to fuel your workouts and accelerate your recovery.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-24 bg-dark-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Elite <span className="text-primary">Programs</span></h2>
              <div className="w-24 h-1 bg-primary" />
            </div>
            <Link href="/programs" className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard 
              title="Strength Training" 
              duration="60 Min" 
              difficulty="Intermediate" 
              description="Build pure power with heavy compound movements and periodized progression."
              icon={<Dumbbell className="w-8 h-8" />}
              delay={0}
            />
            <ProgramCard 
              title="HIIT Burn" 
              duration="45 Min" 
              difficulty="Advanced" 
              description="High-intensity intervals designed to incinerate fat and boost cardiovascular endurance."
              icon={<Utensils className="w-8 h-8" />}
              delay={0.1}
            />
            <ProgramCard 
              title="Cardio Blast" 
              duration="40 Min" 
              difficulty="All Levels" 
              description="Fast-paced routines focusing on stamina, heart health, and sustained energy."
              icon={<Users className="w-8 h-8" />}
              delay={0.2}
            />
          </div>
          
          <div className="mt-10 md:hidden text-center">
            <Link href="/programs" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Member <span className="text-primary">Stories</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Marcus T." 
              review="IronForge isn't just a gym, it's a battleground. The equipment is top tier and the trainers actually care about your progress." 
              delay={0} 
            />
            <TestimonialCard 
              name="Sarah J." 
              review="I've completely transformed my body here in 6 months. The HIIT programs are brutal but the results speak for themselves." 
              delay={0.1} 
            />
            <TestimonialCard 
              name="David K." 
              review="Finally, a gym without distractions. Just heavy iron and a community of people dedicated to getting stronger." 
              delay={0.2} 
            />
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 bg-dark-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Simple <span className="text-primary">Pricing</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">No hidden fees, no complicated contracts. Choose the plan that fits your goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Basic" 
              price="₹999" 
              features={["Access to gym floor", "Standard equipment", "Locker room access", "1 Free assessment"]} 
              delay={0} 
            />
            <PricingCard 
              title="Pro" 
              price="₹1999" 
              features={["All Basic features", "Group classes included", "Nutrition guide", "1 PT session/month"]} 
              isPopular 
              delay={0.1} 
            />
            <PricingCard 
              title="Elite" 
              price="₹3499" 
              features={["All Pro features", "Unlimited PT sessions", "Custom diet plan", "Recovery room access"]} 
              delay={0.2} 
            />
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <BMICalculator />

      {/* Interactive Schedule Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Class <span className="text-primary">Schedule</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse border border-white/10 min-w-[800px]">
              <thead>
                <tr className="bg-dark-gray text-white uppercase tracking-widest text-sm">
                  <th className="p-4 border border-white/10">Time</th>
                  <th className="p-4 border border-white/10 text-primary">Monday</th>
                  <th className="p-4 border border-white/10">Tuesday</th>
                  <th className="p-4 border border-white/10 text-primary">Wednesday</th>
                  <th className="p-4 border border-white/10">Thursday</th>
                  <th className="p-4 border border-white/10 text-primary">Friday</th>
                  <th className="p-4 border border-white/10">Weekend</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-white">06:00 AM</td>
                  <td className="p-4 border border-white/10">CrossFit</td>
                  <td className="p-4 border border-white/10">Strength</td>
                  <td className="p-4 border border-white/10">HIIT Burn</td>
                  <td className="p-4 border border-white/10">CrossFit</td>
                  <td className="p-4 border border-white/10">Cardio Blast</td>
                  <td className="p-4 border border-white/10">Open Gym</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-white">08:00 AM</td>
                  <td className="p-4 border border-white/10">Yoga</td>
                  <td className="p-4 border border-white/10">HIIT Burn</td>
                  <td className="p-4 border border-white/10">Strength</td>
                  <td className="p-4 border border-white/10">Cardio Blast</td>
                  <td className="p-4 border border-white/10">CrossFit</td>
                  <td className="p-4 border border-white/10">Yoga</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-white">05:00 PM</td>
                  <td className="p-4 border border-white/10">Boxing</td>
                  <td className="p-4 border border-white/10">CrossFit</td>
                  <td className="p-4 border border-white/10">Strength</td>
                  <td className="p-4 border border-white/10">HIIT Burn</td>
                  <td className="p-4 border border-white/10">Boxing</td>
                  <td className="p-4 border border-white/10">-</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-white">07:00 PM</td>
                  <td className="p-4 border border-white/10">Strength</td>
                  <td className="p-4 border border-white/10">Boxing</td>
                  <td className="p-4 border border-white/10">CrossFit</td>
                  <td className="p-4 border border-white/10">Yoga</td>
                  <td className="p-4 border border-white/10">Strength</td>
                  <td className="p-4 border border-white/10">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trainer Profiles Section */}
      <section className="py-24 bg-dark-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Meet The <span className="text-primary">Experts</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">Elite coaches with proven track records. No fluff, just results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jaxson Stone", role: "Head Strength Coach", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop", cert: "CSCS, Olympic Lifting" },
              { name: "Elena Rostova", role: "CrossFit & HIIT", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop", cert: "CrossFit L3, Nutrition" },
              { name: "Marcus Reed", role: "Combat & Conditioning", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop", cert: "Muay Thai, ACE PT" }
            ].map((trainer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden border border-white/10 bg-black"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-2xl font-heading tracking-wide uppercase text-white">{trainer.name}</h3>
                  <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">{trainer.role}</p>
                  <p className="text-gray-400 text-xs">{trainer.cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment / Arsenal Section */}
      <EquipmentSection />

      {/* Facility Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Tour The <span className="text-primary">Forge</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`aspect-square overflow-hidden border border-white/10 ${i === 0 || i === 3 ? 'md:col-span-2 md:aspect-[2/1]' : ''}`}
              >
                <img src={img} alt="Facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-gray border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Common <span className="text-primary">Questions</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <FAQAccordion items={[
            { question: "Can I try the facility before committing?", answer: "Absolutely. We offer a Free 1-Day Pass so you can experience the equipment, the vibe, and the community." },
            { question: "Is parking available?", answer: "Yes, we have a dedicated underground parking lot exclusively for members." },
            { question: "What are the locker room amenities?", answer: "Our premium locker rooms include digital lockers, private showers, fresh towels, and a sauna in the Elite tier." },
            { question: "Are personal trainers included in the basic tier?", answer: "The Basic plan covers gym access. Personal training sessions can be added à la carte, or you can upgrade to Elite for unlimited sessions." },
            { question: "Can I pause my membership?", answer: "Yes, Pro and Elite members can freeze their membership for up to 2 months per year at no extra cost." }
          ]} />
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

    </div>
  );
}
