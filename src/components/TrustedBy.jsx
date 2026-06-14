import React from 'react';

const logos = [
  "Microsoft", "Google", "Amazon", "Meta", "Stripe", "Vercel", "OpenAI"
];

const TrustedBy = () => {
  return (
    <section className="py-12 border-b border-slate-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-slate-800">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
