import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const industries = [
  { 
    name: 'Healthcare', 
    info: 'Predictive diagnostics, patient data orchestration, and automated medical claims processing.'
  },
  { 
    name: 'Fintech', 
    info: 'Algorithmic risk assessment, real-time fraud detection, and automated trading infrastructure.'
  },
  { 
    name: 'Banking', 
    info: 'Intelligent customer routing, loan origination automation, and regulatory compliance AI.'
  },
  { 
    name: 'Manufacturing', 
    info: 'Supply chain optimization, predictive maintenance, and computer vision quality control.'
  },
  { 
    name: 'Logistics', 
    info: 'Dynamic route optimization, automated inventory forecasting, and fleet management AI.'
  },
  { 
    name: 'Real Estate', 
    info: 'Automated property valuation, smart contract leasing, and intelligent lead scoring.'
  },
  { 
    name: 'Education', 
    info: 'Personalized learning algorithms, automated grading, and predictive student success modeling.'
  },
  { 
    name: 'Retail', 
    info: 'Dynamic pricing engines, hyper-personalized recommendation systems, and demand forecasting.'
  },
  { 
    name: 'GCC', 
    info: 'Customized localization models, regional compliance automation, and enterprise scale rollouts.'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[50px] md:text-[80px] lg:text-[90px] font-black uppercase text-slate-950 leading-[0.85] tracking-tighter"
          >
            Tailored For<br/>
            <span className="text-slate-300">Every Industry</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-bold max-w-xs text-left md:text-right uppercase tracking-widest text-xs leading-relaxed border-l-4 md:border-l-0 md:border-r-4 border-[#d4ff1a] pl-4 md:pl-0 md:pr-4 py-1"
          >
            We deploy specialized, domain-specific AI solutions that understand the nuances of your sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 md:gap-x-16 border-t-[3px] border-slate-900 pt-16">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col justify-between border-b-2 border-slate-100 pb-8 hover:border-[#af60ff] transition-colors duration-500 min-h-[140px]"
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-950 group-hover:text-[#af60ff] transition-colors duration-500">
                  {ind.name}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#af60ff] transition-colors duration-500">
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-500 group-hover:rotate-45" />
                </div>
              </div>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <p className="overflow-hidden text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed mt-0 group-hover:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {ind.info}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
