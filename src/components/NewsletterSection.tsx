"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-heading tracking-wider mb-6 text-black uppercase">
            Ready to Forge Your Limits?
          </h2>
          <p className="text-xl text-black/80 font-bold mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive training tips, nutrition guides, and early access to new programs.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              className="flex-grow bg-black text-white px-6 py-4 font-bold tracking-widest placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
              required
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-white text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {isSubmitted ? (
                <>Subscribed <CheckCircle2 className="w-5 h-5" /></>
              ) : (
                <>Subscribe <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
          
          <p className="text-sm text-black/60 mt-4 font-bold tracking-wider">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
