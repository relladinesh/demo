import React from 'react';
import { motion } from 'framer-motion';
import { Hourglass, CheckCircle2, Globe2 } from 'lucide-react';

const Stats = () => {
  return (
    <section className="bg-[#f8f9fa] py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      
      {/* Horizontal subtle scanlines background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 15px, #cbd5e1 15px, #cbd5e1 16px)' 
        }} 
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-8 items-center relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
          }}
          className="flex flex-col text-slate-950 font-black uppercase tracking-tighter w-full"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }} 
            className="text-[12vw] md:text-[120px] lg:text-[115px] leading-[0.8] mb-3"
          >
            Creative
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }} 
            className="text-[12vw] md:text-[120px] lg:text-[115px] leading-[0.8] mb-3"
          >
            Solutions
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }} 
            className="text-[12vw] md:text-[120px] lg:text-[115px] leading-[0.8] mb-3 flex justify-between w-full lg:w-[85%] pr-4"
          >
            <span>Built</span>
            <span>For</span>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }} 
            className="text-[12vw] md:text-[120px] lg:text-[115px] leading-[0.8]"
          >
            Real Impact
          </motion.div>
        </motion.div>

        {/* Right Column: Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-full w-full max-w-[600px] mx-auto lg:ml-auto">
          
          {/* Top Green Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 sm:col-span-2 bg-[#d4ff1a] p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px] shadow-sm hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex justify-between items-start">
              <p className="text-black font-bold text-xs md:text-sm w-32 uppercase leading-snug tracking-widest">
                Total Projects<br/>This Year
              </p>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Hourglass className="text-[#d4ff1a] w-5 h-5" />
              </div>
            </div>
            <h3 className="text-black text-[110px] md:text-[140px] font-black tracking-tighter leading-[0.8]">
              54<span className="text-6xl md:text-7xl align-top relative top-3 md:top-6 ml-1">++</span>
            </h3>
          </motion.div>

          {/* Bottom Left Purple Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#ad66ff] p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[280px] shadow-sm hover:-translate-y-2 transition-transform duration-500"
          >
             <div className="flex justify-between items-start">
              <p className="text-white font-bold text-[10px] md:text-xs w-32 uppercase leading-snug tracking-widest">
                Client Problems<br/>Successfully<br/>Solved
              </p>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-[#ad66ff] w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            <h3 className="text-white text-[60px] md:text-[90px] font-black tracking-tighter leading-[0.8] mt-8">
              44<span className="text-4xl md:text-5xl">%</span>
            </h3>
          </motion.div>

          {/* Bottom Right Coral Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#ff556b] p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[280px] shadow-sm hover:-translate-y-2 transition-transform duration-500"
          >
             <div className="flex justify-between items-start">
              <p className="text-white font-bold text-[10px] md:text-xs w-36 uppercase leading-snug tracking-widest">
                Trusted By<br/>Numerous<br/>Clients Worldwide
              </p>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Globe2 className="text-[#ff556b] w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            <h3 className="text-white text-[60px] md:text-[90px] font-black tracking-tighter leading-[0.8] mt-8">
              20<span className="text-4xl md:text-5xl align-top relative top-2 ml-1">++</span>
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
