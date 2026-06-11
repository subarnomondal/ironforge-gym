"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";

const faqs = [
  {
    question: "Is there a joining fee?",
    answer: "No, we believe in straightforward pricing. There are no hidden joining fees or annual maintenance charges."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, Pro and Elite members can freeze their membership for up to 2 months per year without any additional cost."
  },
  {
    question: "Are classes included in the basic plan?",
    answer: "The Basic plan gives you access to the gym floor. Group classes are included in the Pro and Elite plans."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes! Our Elite plan includes unlimited personal training sessions. You can also purchase single sessions as an add-on to any plan."
  },
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel your month-to-month membership at any time with a 30-day notice. No questions asked."
  }
];

export default function Pricing() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <section className="py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading tracking-wide mb-6 uppercase"
        >
          Membership <span className="text-primary">Plans</span>
        </motion.h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-10" />
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          No hidden fees, no complicated contracts. Choose the plan that fits your goals and commit to your transformation.
        </p>
      </section>

      <section className="pb-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-24 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />
          
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
