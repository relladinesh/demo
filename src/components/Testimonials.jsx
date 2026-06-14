import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { 
    quote: "Zip Foundry transformed our entire operations. The custom AI solutions they built are easily saving us hundreds of hours every week.",
    name: "Sarah Jenkins",
    role: "COO, NexusTech",
    rating: 5
  },
  { 
    quote: "Their understanding of both enterprise software architecture and cutting-edge AI is unmatched. A true partner in our digital transformation.",
    name: "David Chen",
    role: "VP Engineering, FinCore",
    rating: 5
  },
  {
    quote: "The automated risk assessment models they deployed decreased our fraud rates by 40% in just two months. Absolutely phenomenal execution.",
    name: "Marcus Wright",
    role: "Director of Risk, VaultBank",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const getCardAnimation = (index) => {
    const total = testimonials.length;
    if (index === current) {
      return { x: 0, scale: 1, rotate: 0, zIndex: 30, opacity: 1 };
    }
    if (index === (current - 1 + total) % total) {
      return { x: -160, scale: 0.85, rotate: -15, zIndex: 10, opacity: 0.5 };
    }
    if (index === (current + 1) % total) {
      return { x: 160, scale: 0.85, rotate: 15, zIndex: 10, opacity: 0.5 };
    }
    return { x: 0, scale: 0.5, rotate: 0, zIndex: 0, opacity: 0 };
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[70px] font-black uppercase text-slate-950 tracking-tighter mb-4"
        >
          Words of <span className="text-slate-300">Appreciation</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 font-bold text-xs uppercase tracking-widest max-w-lg mx-auto mb-20 leading-relaxed"
        >
          Thousands of businesses, from startups to enterprises, use Zip Foundry to handle their enterprise AI transformations.
        </motion.p>

        {/* Animation Container */}
        <div className="relative w-full max-w-[900px] mx-auto h-[450px] flex justify-center items-center mt-12 md:mt-16">
          
          {/* Envelope Back (Fades out after cards pop up) */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 0, y: 80 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none"
          >
            <div className="relative w-full max-w-[400px] h-[220px] flex items-end">
              {/* Envelope Top Flap */}
              <div 
                 className="absolute bottom-[219px] left-0 w-full h-[150px] bg-[#d5b3ff]"
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              />
              {/* Envelope Back Body */}
              <div className="absolute bottom-0 left-0 w-full h-[220px] bg-[#d5b3ff] rounded-b-2xl" />
            </div>
          </motion.div>

          {/* 3D Carousel Container Sliding Out */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.2, delay: 0.2 }}
            className="absolute z-20 w-full h-[380px] flex justify-center items-center pointer-events-none"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                animate={getCardAnimation(i)}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                className="absolute w-[90%] max-w-[360px] bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center pointer-events-auto"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-slate-200 rounded-2xl mb-6 overflow-hidden border-2 border-white shadow-sm shrink-0">
                   <img src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
                
                {/* Name & Role */}
                <h4 className="text-xl font-black text-slate-900 tracking-tight">{testimonial.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{testimonial.role}</p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-[#af60ff]">
                  {[...Array(testimonial.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>

                {/* Quote */}
                <p className="text-sm font-medium text-slate-600 text-center leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Envelope Front Pocket (Fades out with the back) */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 0, y: 80 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 flex justify-center items-end z-30 pointer-events-none"
          >
            <div 
               className="w-full max-w-[400px] h-[220px] bg-[#af60ff] rounded-b-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)] flex items-end justify-center pb-6"
               style={{ clipPath: 'polygon(0 0, 50% 35%, 100% 0, 100% 100%, 0 100%)' }}
            >
               <div className="w-24 h-1.5 bg-white/20 rounded-full" />
            </div>
          </motion.div>

        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-4 mt-8 relative z-40">
          <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#af60ff] hover:border-[#af60ff] text-slate-400 hover:text-white transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-[#af60ff] hover:border-[#af60ff] text-slate-400 hover:text-white transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
