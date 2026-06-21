import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Framer Motion Variants for Mobile Menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { stagerChildren: 0.1, duration: 0.3, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 dark:bg-slate-950/80 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              RefundGuard
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group py-2"
              >
                {link.name}
                {/* Animated underline indicator */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/auth" 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Sign in
            </a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/auth"
              className="text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-4 py-2 rounded-xl shadow-md shadow-indigo-500/10 transition-all"
            >
              Sign up
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 px-4 pt-4 pb-6 space-y-4 shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <motion.a
                  variants={linkVariants}
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <hr className="border-slate-100 dark:border-slate-900" />

            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="/auth"
                className="flex items-center justify-center text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors"
              >
                Sign in
              </a>
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="/auth"
                className="flex items-center justify-center text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 rounded-xl shadow-md"
              >
                Sign up
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;