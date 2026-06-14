import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-[#d4ff1a] py-32 md:py-48 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] lg:text-[160px] font-black uppercase text-black leading-[0.8] tracking-tighter mb-10 hover:scale-105 transition-transform duration-700 cursor-default"
        >
          Let's Build<br/>The Future
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black/60 font-black text-sm md:text-lg uppercase tracking-widest max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Join industry leaders transforming their operations with our intelligent software solutions.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black text-white font-black text-sm md:text-base uppercase tracking-widest py-6 px-16 rounded-full hover:bg-[#ad66ff] transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-2xl"
        >
          Start Your Project
        </motion.button>
        
      </div>
    </section>
  );
};

export default CTA;
