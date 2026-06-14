import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Box, Zap, Command, Infinity as InfinityIcon } from 'lucide-react';

const Particles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-brand-300 rounded-full blur-[1px]"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ y: [0, -150], opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
        transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
      />
    ))}
  </div>
);

const FloatingElement = ({ x, y, delay, duration = 6, children, className = "" }) => (
  <div className={`absolute left-1/2 top-[40%] z-20 ${className}`} style={{ transform: `translate(calc(-50% + ${x}), calc(-50% + ${y}))` }}>
    <motion.div
      initial={{ y: 150, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 + delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  </div>
);

const CardLeft = ({ children, className }) => (
  <div 
    className={`rounded-3xl flex items-center justify-center relative group ${className}`} 
    style={{ transform: 'perspective(1200px) rotateX(55deg) rotateY(25deg) rotateZ(35deg)' }}
  >
    <div className="transform -rotate-[35deg]">{children}</div>
  </div>
);

const CardRight = ({ children, className }) => (
  <div 
    className={`rounded-3xl flex items-center justify-center relative group ${className}`} 
    style={{ transform: 'perspective(1200px) rotateX(55deg) rotateY(-25deg) rotateZ(-35deg)' }}
  >
    <div className="transform rotate-[35deg]">{children}</div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-32 overflow-hidden flex flex-col items-center justify-start min-h-[100vh] bg-[#07070a] font-sans">

      {/* Background Gradients & Particles */}
      <Particles />
      {/* STATIC Massive Blur - Animating this causes massive scrolling jank on many GPUs */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1000px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-[150px] rounded-full z-0 pointer-events-none opacity-40" />

      {/* Main Content */}
      <div className="relative z-30 w-full px-4 md:px-6 lg:px-32 text-center mt-32 md:mt-40 flex flex-col items-center pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 text-[10px] md:text-xs font-semibold tracking-widest uppercase">Next-Gen AI Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11.5vw] md:text-[100px] font-black leading-[0.85] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 w-full max-w-[100vw] overflow-hidden px-2"
        >
          IDEAS MEET<br />PURPOSE WITH<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">ZIP FOUNDRY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-slate-400 text-[13px] md:text-lg mt-8 max-w-[90%] md:max-w-xl mx-auto font-medium leading-relaxed"
        >
          We architect and deploy intelligent software that transforms operations. Built for performance, designed for impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pointer-events-auto w-full px-6"
        >
          <button className="w-full sm:w-auto bg-white text-black font-extrabold text-[12px] tracking-widest uppercase py-4 px-10 rounded-full hover:bg-slate-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Explore Platform
          </button>
          <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/20 font-extrabold text-[12px] tracking-widest uppercase py-4 px-10 rounded-full hover:bg-white/10 transition-all hover:scale-105">
            Book a Call
          </button>
        </motion.div>
      </div>

      {/* Floating 3D Elements Formation - EXACT COLOR MATCH */}
      
      {/* ================= LEFT SIDE ================= */}
      
      {/* 1. Top Left "WEB" Card */}
      <FloatingElement x="-620px" y="-180px" delay={0.2} duration={5} className="hidden xl:block">
        <CardLeft className="w-24 h-24 bg-[#0f244a] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <span className="text-[#3b82f6] font-black text-xl tracking-widest">WEB</span>
        </CardLeft>
      </FloatingElement>

      {/* 2. Middle Far-Left Dark Card (Behind) */}
      <FloatingElement x="-720px" y="-20px" delay={0.5} duration={6.5} className="hidden xl:block">
        <CardLeft className="w-32 h-32 bg-[#07070a] shadow-[0_30px_50px_rgba(0,0,0,0.8)]">
          {/* Empty background card */}
        </CardLeft>
      </FloatingElement>

      {/* 3. Main Purple Card (High Inner) */}
      <FloatingElement x="-480px" y="-20px" delay={0} duration={4.5} className="hidden lg:block">
        <CardLeft className="w-40 h-40 bg-gradient-to-br from-[#af60ff] to-[#7f22fe] shadow-[0_20px_60px_rgba(127,34,254,0.4)]">
          {/* Custom Staggered Block Icon matching solid image */}
          <div className="flex flex-col gap-2 opacity-100">
            <div className="w-12 h-2.5 bg-white rounded-full ml-6" />
            <div className="w-12 h-2.5 bg-white rounded-full ml-3" />
            <div className="w-12 h-2.5 bg-white rounded-full ml-6" />
          </div>
        </CardLeft>
      </FloatingElement>

      {/* 4. Bottom Left Loading Card */}
      <FloatingElement x="-550px" y="160px" delay={0.3} duration={5.5} className="hidden lg:block">
        <CardLeft className="w-44 h-32 bg-[#3e1f76] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-center w-full h-full relative">
             <div className="w-12 h-12 rounded-full border-[3px] border-dashed border-[#9b72cf] animate-[spin_10s_linear_infinite]" />
             <div className="w-5 h-5 rounded-full bg-[#9b72cf] absolute" />
          </div>
        </CardLeft>
      </FloatingElement>


      {/* ================= RIGHT SIDE ================= */}
      
      {/* 1. Top Right "UI" Card */}
      <FloatingElement x="620px" y="-160px" delay={0.4} duration={5.5} className="hidden xl:block">
        <CardRight className="w-24 h-24 bg-[#1a0b2e] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <span className="text-[#c084fc] font-black text-xl tracking-widest">UI</span>
        </CardRight>
      </FloatingElement>

      {/* 2. Middle Far-Right Dark Card (Behind) */}
      <FloatingElement x="720px" y="-10px" delay={0.6} duration={6} className="hidden xl:block">
        <CardRight className="w-32 h-32 bg-[#07070a] shadow-[0_30px_50px_rgba(0,0,0,0.8)]">
          {/* Empty background card */}
        </CardRight>
      </FloatingElement>

      {/* 3. Main Purple Card (High Inner) */}
      <FloatingElement x="480px" y="-10px" delay={0.1} duration={4.8} className="hidden lg:block">
        <CardRight className="w-40 h-40 bg-gradient-to-br from-[#c084fc] to-[#7f22fe] shadow-[0_20px_60px_rgba(127,34,254,0.4)]">
          <Sparkles className="w-16 h-16 text-white" fill="currentColor" />
        </CardRight>
      </FloatingElement>

      {/* 4. Bottom Right Deep Purple Card */}
      <FloatingElement x="550px" y="150px" delay={0.5} duration={5} className="hidden lg:block">
        <CardRight className="w-44 h-32 bg-[#3e1f76] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <InfinityIcon className="w-14 h-14 text-[#9b72cf]" />
        </CardRight>
      </FloatingElement>

      {/* The Stage */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[450px] z-10 perspective-[1200px] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: 60, y: 100 }}
          animate={{ opacity: 1, scale: 1, rotateX: 75, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-[120%] -ml-[10%] h-full rounded-[100%] border-[4px] border-white/50 bg-gradient-to-b from-purple-500/40 via-purple-900/40 to-transparent shadow-[0_-20px_150px_rgba(168,85,247,0.4)] flex items-center justify-center relative overflow-hidden"
        >
          {/* Inner Stage Rings for Depth */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[96%] h-[88%] rounded-[100%] border border-white/20 absolute border-dashed"
          />
          <div className="w-[85%] h-[75%] rounded-[100%] border-[2px] border-white/30 absolute shadow-inner" />
          <div className="w-[100%] h-[100%] absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/30" />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
