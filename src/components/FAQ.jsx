import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "How long does a typical project take?", a: "Depending on complexity, an initial MVP takes 4-8 weeks. Full enterprise deployments average 3-6 months." },
  { q: "Do you build custom AI models?", a: "Yes, we build, fine-tune, and deploy custom models based on open-source solutions like Llama and Mistral, as well as integrating with proprietary APIs like OpenAI and Claude." },
  { q: "How do you handle data security?", a: "We follow enterprise-grade security standards, ensuring data encryption at rest and in transit. We can also deploy on-premise or in private clouds for sensitive environments." }
];

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-slate-900">{q}</span>
        <span className="text-slate-400">
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-surface-50">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
