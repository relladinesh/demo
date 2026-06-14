import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Zap, CheckCircle2 } from 'lucide-react';

const TransformationJourney = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden border-t border-slate-200">
      
      {/* Horizontal subtle scanlines background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 15px, #cbd5e1 15px, #cbd5e1 16px)' 
        }} 
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[90px] lg:text-[100px] font-black uppercase text-slate-950 leading-[0.8] tracking-tighter"
          >
            The Phase<br/>
            <span className="text-slate-300">Shift.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-auto flex flex-col gap-6 items-start md:items-end"
          >
             <p className="text-slate-500 font-bold max-w-sm text-left md:text-right uppercase tracking-widest text-xs leading-relaxed border-l-4 md:border-l-0 md:border-r-4 border-[#af60ff] pl-4 md:pl-0 md:pr-4 py-1">
               See exactly how Zip Foundry fundamentally changes your operational reality.
             </p>
          </motion.div>
        </div>

        {/* The 3-Step Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Step 1: Before */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white border-2 border-slate-200 p-8 md:p-12 flex flex-col min-h-[400px] relative overflow-hidden group hover:border-slate-300 transition-colors duration-500 shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <AlertCircle className="w-32 h-32 text-slate-900" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-slate-400 font-black text-sm uppercase tracking-widest mb-4">Phase 01</h3>
                <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-950 mb-12 leading-[0.9]">The<br/>Legacy<br/>State</h4>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#ff556b]" /> Manual Data Entry
                </li>
                <li className="flex items-center gap-4 text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#ff556b]" /> Siloed Systems
                </li>
                <li className="flex items-center gap-4 text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#ff556b]" /> Reactive Decisions
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 2: The Catalyst */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-[#ad66ff] p-8 md:p-12 flex flex-col min-h-[400px] relative overflow-hidden group lg:-translate-y-4 shadow-[0_20px_40px_rgba(173,102,255,0.25)] hover:shadow-[0_30px_60px_rgba(173,102,255,0.35)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <Zap className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-white/80 font-black text-sm uppercase tracking-widest mb-4">Phase 02</h3>
                <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-12 leading-[0.9]">Zip Foundry<br/>AI Layer</h4>
              </div>
              <div className="bg-black/10 backdrop-blur-md p-6 border border-white/20 hover:bg-black/20 transition-colors duration-500">
                <p className="text-white font-bold text-xs uppercase tracking-widest leading-relaxed">
                  Intelligent orchestration that permanently bridges the gap between legacy data and exponential scalability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3: After */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-[#d4ff1a] p-8 md:p-12 flex flex-col min-h-[400px] relative overflow-hidden group hover:bg-[#cbf518] transition-colors duration-500 shadow-[0_20px_40px_rgba(212,255,26,0.15)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-110">
              <CheckCircle2 className="w-32 h-32 text-black" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-black/40 font-black text-sm uppercase tracking-widest mb-4">Phase 03</h3>
                <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-12 leading-[0.9]">The<br/>Automated<br/>Future</h4>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-black/80 font-bold text-xs md:text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-black" /> Automated Workflows
                </li>
                <li className="flex items-center gap-4 text-black/80 font-bold text-xs md:text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-black" /> Unified Intelligence
                </li>
                <li className="flex items-center gap-4 text-black/80 font-bold text-xs md:text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-black" /> Real-time Insights
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;
