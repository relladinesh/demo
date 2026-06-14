import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  { company: 'GlobalHealth', result: '300% faster processing', type: 'AI Automation', hoverColor: 'group-hover:bg-[#ccff00]' },
  { company: 'FinCore', result: '$2M saved annually', type: 'Data Engineering', hoverColor: 'group-hover:bg-[#af60ff]' }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-slate-200 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[60px] md:text-[90px] lg:text-[100px] font-black uppercase text-slate-950 leading-[0.8] tracking-tighter"
          >
            Proven<br/>
            <span className="text-slate-300">Results.</span>
          </motion.h2>
          <button className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-slate-950 hover:text-[#ad66ff] transition-colors group">
            View All Cases 
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#ad66ff] transition-colors">
              <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:text-white" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer bg-[#f8f9fa] border-2 border-slate-200 relative overflow-hidden transition-all duration-500 hover:border-transparent"
            >
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${c.hoverColor}`} />
              
              <div className="h-[400px] lg:h-[450px] relative z-10 flex flex-col justify-between p-8 md:p-12">
                <div className="flex justify-between items-start">
                   <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-black/60 transition-colors duration-500">{c.type}</div>
                   <ArrowUpRight className="w-8 h-8 text-slate-300 group-hover:text-black transition-colors duration-500 group-hover:scale-110" />
                </div>
                
                <div>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 mb-4 uppercase tracking-tighter group-hover:text-black transition-colors duration-500">{c.company}</h3>
                  <div className="text-xl md:text-2xl text-slate-500 font-bold tracking-tight group-hover:text-black/80 transition-colors duration-500 uppercase">
                    Outcome: {c.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
