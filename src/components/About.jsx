import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="bg-white py-24 md:py-32 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[40px] md:text-[80px] font-black uppercase text-slate-950 tracking-tighter leading-[0.9] mb-8">
              We Are <br/><span className="text-[#af60ff]">Zip Foundry.</span>
            </h2>
            <p className="text-xl font-medium text-slate-500 leading-relaxed mb-8">
              We don't just build software; we architect the future of enterprise intelligence. Born from a collective of elite engineers, we exist to bridge the gap between bleeding-edge AI research and practical, scalable business solutions.
            </p>
            <p className="text-xl font-medium text-slate-500 leading-relaxed mb-12">
              Our mission is simple: eliminate inefficiencies, automate the mundane, and empower human creativity through flawless engineering.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black text-slate-950 mb-2">2023</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Founded</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-slate-950 mb-2">Global</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Remote Team</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl bg-slate-100 overflow-hidden"
          >
             {/* Awwwards style image replacement (gradient/shape abstract) */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-slate-200" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#af60ff]/10 blur-[80px] rounded-full mix-blend-multiply" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                  <Zap className="w-12 h-12 text-[#af60ff]" />
                </div>
             </div>
             
             {/* Abstract floating elements */}
             <div className="absolute top-10 left-10 w-24 h-24 bg-white/50 backdrop-blur-md rounded-full shadow-lg border border-white flex items-center justify-center animate-[bounce_8s_infinite]">
                <Users className="w-8 h-8 text-slate-400" />
             </div>
             <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg border border-white flex items-center justify-center animate-[bounce_6s_infinite_reverse]">
                <Target className="w-8 h-8 text-slate-400" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
