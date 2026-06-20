import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Star, CheckCircle2 } from 'lucide-react';

const FaqAndReviews = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you recover an extra 50% in interest?",
      answer: "When platforms or merchants overcharge consumers or delay a legitimate refund, consumer protection laws often mandate statutory interest penalties. We track down these specific violations and enforce them so you receive additional payment on top of your original loss."
    },
    {
      question: "What does this service cost me?",
      answer: "Nothing upfront. We operate strictly on a success-fee basis. We only take a small percentage if we successfully recover your money. If we don't get your refund back, you pay absolutely zero."
    },
    {
      question: "How far back can you audit my purchases?",
      answer: "We can securely review and dispute transaction records dating back up to 12 months, depending on the merchant platform's specific terms of service and your banking institution's regulatory policies."
    }
  ];

  const review = {
    quote: "My 10-year-old accidentally bought $300 worth of virtual currency on a gaming site. I thought that money was gone forever, but this platform handled everything and got the full amount back plus a statutory interest bonus within a week!",
    author: "Marthe E.",
    role: "Parent / Verified User",
    rating: 5
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Social Proof / Review Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 block mb-2">
                Real Protection
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Trusted by thousands of shoppers
              </h2>
            </div>

            {/* Testimonial Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed text-sm sm:text-base">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-800">
                <div className="p-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic FAQ Accordions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                Frequently Asked Questions
              </h3>
            </div>

            {faqs.map((faq, index) => {
              const isOpened = openFaq === index;

              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 flex items-center justify-between text-left font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpened ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-400 flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqAndReviews;