import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'How It Works', href: '#' },
      { name: 'Refund Calculator', href: '#' },
      { name: 'Coverage Fees', href: '#' },
      { name: 'Success Stories', href: '#' },
    ],
    demographics: [
      { name: 'For Kids & Parents', href: '#' },
      { name: 'For Teenagers', href: '#' },
      { name: 'For Adults', href: '#' },
      { name: 'For Grandparents', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Consumer Rights', href: '#' },
      { name: 'Contact Security', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Description Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="p-2 bg-indigo-600 rounded-xl text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                RefundGuard
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Your trusted online shopping insurance safety net. We protect families from hidden charges, unfair scams, and accidental digital purchases with automated recoveries.
            </p>
            
            {/* Social Icons Stack */}
            {/* <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors p-2 bg-slate-800 rounded-xl">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-slate-800 rounded-xl">
                <Linkedin className="w-4 h-4" />
              </a> */}
              {/* <a href="#" className="hover:text-white transition-colors p-2 bg-slate-800 rounded-xl">
                <Globe className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Dynamic Map Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">Platform</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-indigo-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">Protection</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.demographics.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-indigo-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">Legal</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-indigo-400 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} RefundGuard. All rights reserved.</p>
          <p className="text-slate-500 text-center sm:text-right">
            Disclaimer: RefundGuard is an independent consumer protection advocacy framework and is not directly affiliated with any banking merchant network.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;