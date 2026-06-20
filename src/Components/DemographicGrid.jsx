import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Zap, UserCheck, HeartHandshake } from 'lucide-react';

const DemographicGrid = () => {
  const targets = [
    {
      id: 1,
      icon: <Baby className="w-6 h-6" />,
      title: "Kids & Children",
      problem: "Accidental in-app purchases or clicking wrong hidden buttons.",
      solution: "We intercept unauthorized digital transactions and dispute non-parental charges instantly.",
      color: "border-pink-500/20 bg-pink-500/5 text-pink-600 dark:text-pink-400"
    },
    {
      id: 2,
      icon: <Zap className="w-6 h-6" />,
      title: "Teenagers",
      problem: "Impulse buying via social media ads or fast checkout tricks.",
      solution: "Our system cross-references item delivery and matching descriptions to flag misleading sales.",
      color: "border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400"
    },
    {
      id: 3,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Adults",
      problem: "Falling victim to complex subscription traps and hidden platform fees.",
      solution: "We audit monthly terms of service updates to recover un-notified pricing escalations.",
      color: "border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400"
    },
    {
      id: 4,
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Grandparents",
      problem: "Stumbling into deceptive copycat domains or fake web storefronts.",
      solution: "We trace merchant IDs directly to processing banks to demand immediate fraud reversal.",
      color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Protection Built For Every Generation
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Online shopping mistakes happen regardless of age. Here is how we act as a dedicated safety net for your entire household.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {targets.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between transition-colors border-slate-100 dark:border-slate-800`}
            >
              <div>
                {/* Dynamic Generation Icon Area */}
                <div className={`p-3 rounded-xl inline-block mb-4 ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} ${item.color.split(' ')[2]}`}>
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-rose-500 dark:text-rose-400 mb-4 bg-rose-500/5 border border-rose-500/10 px-2 py-1 rounded-md inline-block">
                  Risk: {item.problem}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-50 dark:border-slate-800/50">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DemographicGrid;