import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'OpenAI', 'Claude', 'Gemini', 'LangChain', 
  'AWS', 'Azure', 'GCP', 
  'React', 'Next.js', 'Node.js', 'Python'
];

// Duplicate multiple times to ensure the marquee is long enough to seamlessly loop
const row1 = [...technologies, ...technologies, ...technologies, ...technologies];
const reversedTech = [...technologies].reverse();
const row2 = [...reversedTech, ...reversedTech, ...reversedTech, ...reversedTech];

const Technology = () => {
  return (
    <section id="technology" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-200">
      
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b-2 border-slate-100 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[80px] lg:text-[90px] font-black uppercase leading-[0.85] tracking-tighter text-slate-950"
          >
            Technology<br/>
            <span className="text-slate-300">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-bold max-w-sm text-left md:text-right uppercase tracking-widest text-xs leading-relaxed border-l-4 md:border-l-0 md:border-r-4 pl-4 md:pl-0 md:pr-4 py-1 text-slate-500 border-[#af60ff]"
          >
            We leverage best-in-class technologies to build robust, scalable, and intelligent solutions.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Block */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-12 py-16 bg-[#f8f9fa] border-y-2 border-slate-100 transform -rotate-2 scale-105">
        
        {/* Row 1: Left to Right */}
        <div className="flex w-max">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex items-center gap-8 md:gap-16 px-4 md:px-8"
          >
            {row1.map((tech, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-16 whitespace-nowrap">
                <span className="text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-slate-950">
                  {tech}
                </span>
                <span className="text-3xl text-[#d4ff1a]">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-max">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex items-center gap-8 md:gap-16 px-4 md:px-8"
          >
            {row2.map((tech, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-16 whitespace-nowrap">
                <span className="text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-slate-200">
                  {tech}
                </span>
                <span className="text-3xl text-[#af60ff]">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Technology;
