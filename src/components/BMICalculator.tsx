"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus("Normal weight");
      else if (bmiValue >= 25 && bmiValue <= 29.9) setStatus("Overweight");
      else setStatus("Obesity");
    }
  };

  return (
    <section className="py-24 bg-dark-gray border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="var(--color-primary)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97.7,-2.5C97.4,13,90.2,28.3,79.5,40.5C68.8,52.7,54.6,61.8,40.1,68.6C25.6,75.4,10.8,79.9,-4.5,85.1C-19.8,90.3,-35.6,96.2,-48.6,90.2C-61.6,84.2,-71.8,66.3,-79.8,50.1C-87.8,33.9,-93.6,19.4,-94.1,4.7C-94.6,-10,-89.8,-24.9,-81.4,-36.5C-73,-48.1,-61,-56.4,-48,-64.1C-35,-71.8,-21,-78.9,-5.8,-71.4C9.4,-63.9,28.8,-61,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-heading tracking-wide mb-4">Calculate Your <span className="text-primary">BMI</span></h2>
            <div className="w-24 h-1 bg-primary mb-6" />
            <p className="text-gray-400 mb-8 max-w-lg">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Enter your weight and height to find out your BMI.
            </p>

            <table className="w-full max-w-md text-left border-collapse border border-white/10 mb-8">
              <thead>
                <tr className="bg-black text-white text-sm uppercase tracking-widest">
                  <th className="p-3 border border-white/10">BMI</th>
                  <th className="p-3 border border-white/10 text-primary">Weight Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-400 text-sm">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 border border-white/10">Below 18.5</td>
                  <td className="p-3 border border-white/10">Underweight</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 border border-white/10">18.5 - 24.9</td>
                  <td className="p-3 border border-white/10">Normal</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 border border-white/10">25.0 - 29.9</td>
                  <td className="p-3 border border-white/10">Overweight</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 border border-white/10">30.0 and Above</td>
                  <td className="p-3 border border-white/10 text-red-500">Obese</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-black border border-white/10 p-8 md:p-12"
          >
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Weight / kg</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full bg-dark-gray border border-white/10 text-white p-4 focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Height / cm</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-dark-gray border border-white/10 text-white p-4 focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors"
              >
                Calculate Now
              </button>
            </form>

            {bmi !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-dark-gray border border-primary/30 text-center"
              >
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Your BMI is</p>
                <div className="text-5xl font-heading text-primary mb-2">{bmi}</div>
                <p className="text-white font-bold tracking-wide uppercase">
                  Status: <span className={status === "Normal weight" ? "text-green-500" : "text-yellow-500"}>{status}</span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
