import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';

// Centralized Validation Schema using Yup
const contactSchema = yup.object().shape({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Your name is required'),
  email: yup.string().email('Invalid email address').required('Email address is required'),
  subject: yup.string().min(5, 'Subject should be more descriptive').required('Subject is required'),
  message: yup.string().min(15, 'Message must be at least 15 characters').required('Please type out your message'),
});

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    console.log("Contact Form Data Submitted:", data);
    
    // Simulate backend API network lifecycle latency
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitted(true);
    reset();
  };

  const infoItems = [
    {
      icon: <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Email Support",
      details: "support@refundguard.com",
      subtext: "Response within 24 hours"
    },
    {
      icon: <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Direct Helpline",
      details: "+1 (555) 234-5678",
      subtext: "Mon-Fri from 9am - 6pm"
    },
    {
      icon: <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Average Audit Speed",
      details: "Under 15 Minutes",
      subtext: "For automated claim routing"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Background Blur Graphic Elements */}
      <div className="absolute top-10 right-10 -z-10 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page/Section Header Area */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 block mb-2">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            We’re here to help you get your money back.
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions about a specific charge, terms of service violation, or an active dispute claim? Drop us a message and our support team will secure your pipeline.
          </p>
        </div>

        {/* Asymmetric Content Columns splitting Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Outreach / Support Channels */}
          <div className="lg:col-span-5 space-y-4">
            {infoItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 flex gap-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">{item.details}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{item.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Reactive Context Contact Form Window */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl"
            >
              {isSubmitted ? (
                /* Success View State Window */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl inline-block">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. An automation agent or support advocate has received your ticket and will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-2 block mx-auto"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* Base Operational Form Layout */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Your Name</label>
                      <input 
                        type="text"
                        {...register('name')}
                        placeholder="John Doe"
                        className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email Input Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                      <input 
                        type="email"
                        {...register('email')}
                        placeholder="name@example.com"
                        className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Subject Input Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                    <input 
                      type="text"
                      {...register('subject')}
                      placeholder="e.g., Question about dynamic 50% interest metrics"
                      className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                    />
                    {errors.subject && <p className="text-[11px] text-rose-500 mt-1">{errors.subject.message}</p>}
                  </div>

                  {/* Descriptive Message Area Box */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message / Claim Context</label>
                    <textarea 
                      rows={5}
                      {...register('message')}
                      placeholder="Please explain the billing details or support issues you are experiencing..."
                      className={`w-full bg-slate-50 dark:bg-slate-950 border ${errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Dynamic Submit Execution Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs transition-all disabled:opacity-50 disabled:pointer-events-none mt-2"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;