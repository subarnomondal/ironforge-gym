"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const phoneNumber = "919876543210"; // Replace with actual number

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSendToWhatsApp = (text: string) => {
    if (!text.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsChatOpen(false);
    setCustomMessage("");
  };

  const predefinedQuestions = [
    "I'd like to claim my free 1-day pass.",
    "What are your membership pricing plans?",
    "Do you offer personal training?",
    "Where is the gym located?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] bg-dark-gray border border-white/20 rounded-lg shadow-2xl overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-black border-b border-white/10 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold tracking-wide">IronForge Support</h4>
                  <p className="text-xs text-gray-400">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-4 bg-dark-gray min-h-[250px] flex flex-col justify-end border-b border-white/10 relative">
              <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop')] bg-cover mix-blend-overlay z-0" />
              
              <div className="bg-black border border-white/10 text-white p-3 rounded-lg rounded-tl-none self-start max-w-[85%] mb-4 shadow-sm text-sm relative z-10">
                Hi there! Welcome to IronForge Gym. 👋 <br/><br/>
                How can we help you today?
              </div>
              
              <div className="flex flex-col gap-2 mb-2 relative z-10">
                {predefinedQuestions.map((q, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSendToWhatsApp(q)}
                    className="bg-black hover:bg-primary border border-white/10 hover:border-primary text-gray-300 hover:text-black text-xs font-bold py-2 px-3 rounded-full text-left transition-colors self-end"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-black flex gap-2">
              <input 
                type="text" 
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendToWhatsApp(customMessage)}
                placeholder="Type a message..." 
                className="flex-grow rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary border border-white/10 bg-dark-gray text-white placeholder-gray-500"
              />
              <button 
                onClick={() => handleSendToWhatsApp(customMessage)}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black hover:bg-white transition-colors flex-shrink-0"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="w-14 h-14 bg-primary hover:bg-white text-black flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(255,32,32,0.5)] transition-all hover:scale-110"
        title="Chat with Support"
      >
        {isChatOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && !isChatOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-dark-gray border border-white/20 hover:border-primary text-white flex items-center justify-center rounded-full shadow-lg transition-colors hover:text-primary"
            title="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
