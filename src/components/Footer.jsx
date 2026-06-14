import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 overflow-hidden border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Giant Footer Logo */}
        <div className="mb-24 flex justify-center md:justify-start border-b border-slate-200 pb-16">
          <h2 className="text-[15vw] md:text-[180px] font-black text-slate-900 uppercase leading-[0.8] tracking-tighter opacity-5">
            FOUNDRY
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-20">
          <div className="col-span-2 md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#af60ff] to-[#7f22fe] flex items-center justify-center text-white shadow-inner">
                <Zap className="w-5 h-5" fill="currentColor" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-950 uppercase">Zip Foundry</span>
            </div>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest max-w-sm leading-relaxed">
              AI-Powered Software, Automation & Digital Transformation for the modern enterprise.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">AI Agents</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Custom Software</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Generative AI</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Data Engineering</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#af60ff] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} Zip Foundry. All rights reserved.</div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-slate-950 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-950 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-slate-950 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
