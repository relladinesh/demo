import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discover', desc: 'Understand business goals, data landscape, and technical requirements to define scope.' },
  { id: '02', title: 'Architect', desc: 'Design highly scalable, secure infrastructure and map out AI model architectures.' },
  { id: '03', title: 'Build', desc: 'Develop, train, and integrate intelligent solutions using iterative agile sprints.' },
  { id: '04', title: 'Validate', desc: 'Rigorous stress testing, QA automation, and strict user acceptance testing.' },
  { id: '05', title: 'Launch', desc: 'Seamless enterprise-wide deployment, monitoring, and ongoing optimization.' }
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col relative z-10">
        
        {/* Top Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b-2 border-slate-100 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[60px] md:text-[80px] lg:text-[90px] font-black uppercase leading-[0.85] tracking-tighter text-slate-950"
          >
            Delivery<br/>
            <span className="text-slate-300">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-bold max-w-sm text-left md:text-right uppercase tracking-widest text-xs leading-relaxed border-l-4 md:border-l-0 md:border-r-4 pl-4 md:pl-0 md:pr-4 py-1 text-slate-500 border-[#af60ff]"
          >
            We don't guess. We follow a rigorous, battle-tested methodology to ensure every AI integration succeeds at enterprise scale.
          </motion.p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col border-t-4 border-slate-900 w-full">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 border-b-2 border-slate-100 hover:border-[#af60ff] transition-colors duration-500 cursor-default relative overflow-hidden"
            >
              <div className="absolute right-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none -mr-12">
                <span className="text-[200px] font-black text-slate-900 leading-none">{step.id}</span>
              </div>

              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <span className="text-5xl md:text-6xl font-black text-slate-200 group-hover:text-[#af60ff] transition-colors duration-500">
                  {step.id}
                </span>
              </div>
              
              <div className="w-full md:w-3/4 flex flex-col">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-950 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-lg group-hover:text-slate-700 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-transparent group-hover:border-[#af60ff] group-hover:bg-[#f8f9fa] transition-all duration-500 shrink-0 ml-4">
                <ArrowRight className="w-5 h-5 text-transparent group-hover:text-[#af60ff] -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
