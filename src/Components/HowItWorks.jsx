import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, ShieldAlert, MessagesSquare, Banknote } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FileSearch className="w-6 h-6" />,
      title: "Submit & Review",
      description: "Provide details of your online transactions. Our system instantly audits the receipts, cross-checking for hidden charges, double-billing, or deceptive price markups.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Identify Exploits",
      description: "Whether it's an accidental click by a child, an unfulfilled delivery, or an outright scam platform, we isolate the exact transaction violation violating consumer protection laws.",
      color: "from-indigo-500 to-violet-500"
    },
    {
      id: 3,
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Automated Dispute",
      description: "We bypass standard first-tier customer support. Our legal-backed routing system contacts the platform or merchant directly with airtight, automated documentation demanding your money back.",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 4,
      icon: <Banknote className="w-6 h-6" />,
      title: "150% Reimbursement",
      description: "The base overpayment is sent straight back to your account safely. On top of that, we push to recover up to an additional 50% in statutory interest penalty structural fees.",
      color: "from-purple-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How Your Safety Net Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Recovering your money shouldn't be a second full-time job. We handle the entire dispute pipeline from discovery to bank transfer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Vertical Line (Desktop Only) */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-900 transform -translate-x-1/2 hidden md:block" />

          {/* Steps Loop */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node / Badge Accent */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content Card Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] pl-14 md:pl-0 ${
                      isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}
                  >
                    {/* Step Numeric Indicator */}
                    <span className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                      Step 0{step.id}
                    </span>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Empty spacer spacer to balance the flex layout layout grid on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;