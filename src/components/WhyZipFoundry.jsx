import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Award, ArrowRight } from 'lucide-react';

const differentiators = [
  { 
    icon: <Zap className="w-8 h-8 md:w-12 md:h-12" />, 
    title: 'AI Native Architecture', 
    desc: 'We natively embed advanced AI capabilities at the absolute core of your systems, ensuring your infrastructure is future-proofed from day one.',
    color: 'hover:bg-[#d4ff1a]'
  },
  { 
    icon: <Award className="w-8 h-8 md:w-12 md:h-12" />, 
    title: 'Founder-Led Precision', 
    desc: 'Direct access to senior leadership on every major project. No junior teams, just elite engineering and strategic oversight.',
    color: 'hover:bg-[#ad66ff]'
  },
  { 
    icon: <ShieldCheck className="w-8 h-8 md:w-12 md:h-12" />, 
    title: 'Enterprise-Grade Security', 
    desc: 'Bank-grade security protocols, robust compliance frameworks, and highly scalable architecture standards built for the Fortune 500.',
    color: 'hover:bg-[#ff556b]'
  },
  { 
    icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />, 
    title: 'Global Talent Density', 
    desc: 'Access to a highly curated, world-class talent pool distributed across major tech hubs, ensuring round-the-clock elite execution.',
    color: 'hover:bg-[#1a1a1a] hover:text-white'
  }
];

const WhyZipFoundry = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[90px] lg:text-[100px] font-black uppercase text-slate-950 leading-[0.8] tracking-tighter"
          >
            Intelligent<br/>
            <span className="text-slate-300">Solutions</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-auto flex flex-col gap-6 lg:items-end"
          >
             <p className="text-slate-500 font-bold max-w-sm text-left lg:text-right uppercase tracking-widest text-xs leading-relaxed border-l-4 lg:border-l-0 lg:border-r-4 border-slate-900 pl-4 lg:pl-0 lg:pr-4 py-1">
               We don't just write code. We architect intelligent systems designed to drive measurable business value and outpace the competition.
             </p>
             <button className="flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-[#ad66ff] transition-colors w-fit">
               Discover Our Approach <ArrowRight className="w-4 h-4" />
             </button>
          </motion.div>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {differentiators.map((diff, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-[#f8f9fa] border-2 border-slate-100 p-6 md:p-12 lg:p-16 flex flex-col justify-between min-h-[350px] lg:min-h-[450px] transition-colors duration-500 cursor-pointer ${diff.color}`}
            >
              <div className="flex justify-between items-start mb-16">
                 <div className="text-slate-900 group-hover:scale-110 transition-transform duration-500 group-hover:text-inherit">
                   {diff.icon}
                 </div>
                 <span className="font-black text-2xl md:text-4xl text-slate-200 group-hover:text-black/20 transition-colors duration-500">
                   0{i + 1}
                 </span>
              </div>
              
              <div className="w-full">
                <h3 className="text-[26px] md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-950 mb-6 group-hover:text-inherit transition-colors duration-500 leading-[0.9] break-words">
                  {diff.title}
                </h3>
                <p className="text-slate-500 font-bold text-[10px] md:text-sm uppercase tracking-widest leading-relaxed group-hover:text-inherit opacity-80 transition-colors duration-500">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyZipFoundry;
