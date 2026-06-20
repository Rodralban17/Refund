import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Coins, Sparkles } from 'lucide-react';

const Hero = () => {
  // Animation container configurations for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] rounded-full bg-violet-500/10 dark:bg-violet-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-center lg:text-left space-y-6"
          >
            {/* Safety Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                <ShieldCheck className="w-4 h-4" />
                Your Online Shopping Insurance
              </span>
            </motion.div>

            {/* Main Catchy Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Shop without fear.{' '}
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Get your money back.
              </span>
            </motion.h1>

            {/* Core Value Pitch */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From hidden fees and scams to accidental clicks, online mistakes happen to everyone. We act as your safety net—recovering your overpayments, handling the platforms, and reclaiming your funds plus up to <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">50% added interest</strong>.
            </motion.p>

            {/* Interactive Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium rounded-2xl shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all"
              >
                Claim Your Refund
                <ArrowRight className="w-4 h-4" />
                </motion.button>
              
              <motion.button
                whileHover={{ bg: "rgba(99, 102, 241, 0.05)" }}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-2xl transition-all"
              >
                How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Floating Card Dashboard Showcase Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Base Core Showcase Card */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="w-full max-w-[400px] p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> +50% Interest Recovered
                </span>
              </div>

              <div className="space-y-1 mb-6">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-wide uppercase">Active Settlement</span>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">$240.00</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Reclaimed from hidden subscription pricing</p>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>Reviewing Order</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Refund Transferred</span>
                </div>
              </div>
            </motion.div>

            {/* Back Accent Card Decorative layer */}
            <div className="absolute top-4 -right-2 -z-10 w-full max-w-[400px] h-full border border-slate-200/50 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-900/40 rounded-3xl transform rotate-3 pointer-events-none hidden sm:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;