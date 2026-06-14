import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({ name: '', company: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-us" className="bg-[#f8f9fa] border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Typography & Contact Info */}
          <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className="text-[50px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter text-slate-950 leading-[0.9]"
              >
                Let's <br/> <span className="text-[#af60ff]">Talk.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ margin: "-100px" }}
                className="mt-8 text-slate-500 font-bold uppercase tracking-widest text-xs md:text-sm max-w-sm leading-relaxed"
              >
                We're ready to engineer your enterprise AI transformation. Send us a brief and our team will be in touch.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="mt-20 space-y-10"
            >
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Inquiries</p>
                <a href="mailto:hello@zipfoundry.com" className="text-xl md:text-3xl font-black text-slate-950 hover:text-[#af60ff] transition-colors tracking-tight">
                  hello@zipfoundry.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Direct Line</p>
                <a href="tel:+18005550199" className="text-xl md:text-3xl font-black text-slate-950 hover:text-[#af60ff] transition-colors tracking-tight">
                  +1 (800) 555-0199
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Brutalist Form */}
          <div className="p-8 md:p-16 lg:p-24 bg-white">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col justify-center items-center text-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-[#af60ff]/10 text-[#af60ff] rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-950 mb-4">Request Received</h3>
                  <p className="font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Our engineering team will review your details and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setFormState('idle'); setFormData({name: '', company: '', details: ''}); }}
                    className="mt-10 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors"
                  >
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-100px" }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col justify-center h-full space-y-12"
                >
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-slate-200 pb-4 text-2xl md:text-3xl font-bold text-slate-900 focus:outline-none focus:border-[#af60ff] transition-colors placeholder-slate-200" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-slate-200 pb-4 text-2xl md:text-3xl font-bold text-slate-900 focus:outline-none focus:border-[#af60ff] transition-colors placeholder-slate-200" 
                      placeholder="Acme Corp" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Project Details</label>
                    <textarea 
                      id="details"
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      rows={3} 
                      className="w-full bg-transparent border-b-2 border-slate-200 pb-4 text-2xl md:text-3xl font-bold text-slate-900 focus:outline-none focus:border-[#af60ff] transition-colors placeholder-slate-200 resize-none" 
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-slate-950 text-white font-black uppercase tracking-widest text-sm py-6 hover:bg-[#af60ff] transition-colors flex justify-center items-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Submitting...' : 'Submit Request'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
