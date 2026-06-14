import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[#050505] border-b border-white/5 text-white px-4 py-2 text-xs md:text-sm text-center relative z-50 flex items-center justify-center gap-2 overflow-hidden">
      <span className="font-semibold text-slate-300 tracking-wide">New: Zip Foundry Enterprise AI Platform</span>
      <motion.a 
        href="#enterprise" 
        className="flex items-center gap-1 font-bold text-[#c084fc] hover:text-white transition-colors uppercase tracking-widest text-[10px] md:text-xs ml-2"
        whileHover={{ x: 3 }}
      >
        Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
      </motion.a>
    </div>
  );
};

export default AnnouncementBar;
