import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, Workflow, Code2, ArrowUpRight } from 'lucide-react';

const servicesList = [
  { 
    id: '01', 
    title: 'Autonomous Agents', 
    desc: 'Custom AI agents that handle complex workflows, reasoning, and autonomous decision-making 24/7 without human intervention.',
    icon: <Bot className="w-12 h-12" />,
    color: 'bg-[#d4ff1a]',
    textColor: 'text-black'
  },
  { 
    id: '02', 
    title: 'Generative Models', 
    desc: 'Fine-tuned LLMs and generative capabilities tailored specifically to your proprietary data and security requirements.',
    icon: <Sparkles className="w-12 h-12" />,
    color: 'bg-[#ad66ff]',
    textColor: 'text-white'
  },
  { 
    id: '03', 
    title: 'Workflow Automation', 
    desc: 'Intelligent automation to streamline your most bottlenecked operations, connecting disparate systems instantly.',
    icon: <Workflow className="w-12 h-12" />,
    color: 'bg-[#ff556b]',
    textColor: 'text-white'
  },
  { 
    id: '04', 
    title: 'Enterprise Software', 
    desc: 'Scalable, secure, and robust applications built from the ground up to handle massive AI computational workloads.',
    icon: <Code2 className="w-12 h-12" />,
    color: 'bg-[#1a1a1a]',
    textColor: 'text-white'
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="bg-[#f8f9fa] pt-12 pb-32 relative overflow-hidden">
      
      {/* Horizontal subtle scanlines background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 15px, #cbd5e1 15px, #cbd5e1 16px)' 
        }} 
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Heading Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[90px] lg:text-[100px] font-black uppercase text-slate-950 leading-[0.8] tracking-tighter"
          >
            Capabilities<br />
            <span className="text-[#ad66ff]">Designed</span> For<br />
            The AI Era
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-end gap-4"
          >
            <p className="text-slate-500 font-bold max-w-xs text-right uppercase tracking-widest text-xs leading-relaxed">
              We architect sophisticated solutions that transform how your business operates at scale.
            </p>
            <div className="w-16 h-1 bg-slate-900 mt-2" />
          </motion.div>
        </div>

        {/* Massive Horizontal Rows */}
        <div className="w-full border-t-[3px] border-slate-900">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b-[3px] border-slate-900 relative overflow-hidden cursor-pointer"
            >
              {/* Hover Background Fill */}
              <motion.div 
                initial={{ height: "0%" }}
                animate={{ height: hoveredIndex === idx ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute bottom-0 left-0 w-full ${service.color} z-0 origin-bottom`}
              />

              <div className="relative z-10 flex flex-row items-center justify-between py-8 md:py-14 px-4 md:px-8">
                
                {/* Left Side: Number & Title */}
                <div className="flex items-center gap-4 md:gap-16 w-[80%] md:w-auto">
                  <span className={`text-2xl md:text-4xl font-black transition-colors duration-400 shrink-0 ${hoveredIndex === idx ? service.textColor : 'text-slate-300'}`}>
                    {service.id}
                  </span>
                  <h3 className={`text-3xl md:text-6xl lg:text-[80px] font-black uppercase tracking-tighter transition-colors duration-400 leading-[1] ${hoveredIndex === idx ? service.textColor : 'text-slate-950'} break-words`}>
                    {service.title}
                  </h3>
                </div>

                {/* Right Side: Description & Icon */}
                <div className="flex items-center justify-end gap-8 shrink-0">
                  <div className={`hidden lg:block max-w-sm transition-all duration-400 ${hoveredIndex === idx ? `opacity-100 translate-x-0 ${service.textColor}` : 'opacity-0 translate-x-10 text-slate-500'}`}>
                    <p className="font-bold text-sm uppercase tracking-widest leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className={`transition-transform duration-500 ${hoveredIndex === idx ? 'rotate-45 scale-110 ' + service.textColor : 'text-slate-300'}`}>
                    <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16" />
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

export default Services;
