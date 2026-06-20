import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight,Phone } from 'lucide-react';

// Validation Schemas using Yup
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const registerSchema = yup.object().shape({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  phone: yup.string().required('Phone number is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirming your password is required'),
});

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Separate forms for Login and Register to keep state distinct
  const { register: registerLogin, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const { register: registerSignUp, handleSubmit: handleSignUpSubmit, formState: { errors: signUpErrors } } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onLoginSubmit = (data) => {
    console.log("Login Data Submitted:", data);
    // Integrate backend API authentication processing here
  };

  const onSignUpSubmit = (data) => {
    console.log("Registration Data Submitted:", data);
    // Integrate backend user creation API pipeline here
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 pt-24">
      {/* Decorative Blur Background Elements */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden p-8">
        
        {/* Header Icon & Brand Description */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-2xl mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {isLogin ? 'Welcome Back' : 'Create Your Safety Net'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 max-w-[280px]">
            {isLogin ? 'Access your automated refund dashboard tracking utilities.' : 'Join to secure up to 150% back on overpaid online transactions.'}
          </p>
        </div>

        {/* Dynamic Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl mb-6 relative">
          <button 
            onClick={() => { setIsLogin(true); setShowPassword(false); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg relative z-10 transition-colors ${isLogin ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}
          >
            Sign In
          </button>
          <button 
            onClick={() => { setIsLogin(false); setShowPassword(false); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg relative z-10 transition-colors ${!isLogin ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}
          >
            Sign Up
          </button>
          
          {/* Slider Background Indicator element */}
          <motion.div 
            className="absolute top-1 bottom-1 left-1 bg-white dark:bg-slate-800 shadow rounded-lg z-0"
            animate={{ x: isLogin ? '0%' : '96%', width: '50%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Animated Form container window */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login-form"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleLoginSubmit(onLoginSubmit)}
              className="space-y-4"
              noValidate
            >
              {/* Email Input Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type="email"
                    {...registerLogin('email')}
                    placeholder="name@example.com"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${loginErrors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                </div>
                {loginErrors.email && <p className="text-[11px] text-rose-500 mt-1">{loginErrors.email.message}</p>}
              </div>

              {/* Password Input Field */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <a href="#" className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Forgot?</a>
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    {...registerLogin('password')}
                    placeholder="••••••••"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${loginErrors.password ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-10 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {loginErrors.password && <p className="text-[11px] text-rose-500 mt-1">{loginErrors.password.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 text-xs transition-all mt-6"
              >
                Sign In to Account
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.form
              key="signup-form"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSignUpSubmit(onSignUpSubmit)}
              className="space-y-4"
              noValidate
            >
              {/* Full Name Input Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type="text"
                    {...registerSignUp('name')}
                    placeholder="John Doe"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${signUpErrors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                </div>
                {signUpErrors.name && <p className="text-[11px] text-rose-500 mt-1">{signUpErrors.name.message}</p>}
              </div>

              {/* Email Input Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type="email"
                    {...registerSignUp('email')}
                    placeholder="name@example.com"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${signUpErrors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                </div>
                {signUpErrors.email && <p className="text-[11px] text-rose-500 mt-1">{signUpErrors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type="tel"
                    {...registerSignUp('phone')}
                    placeholder="123-456-7890"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${signUpErrors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                </div>
                {signUpErrors.phone && <p className="text-[11px] text-rose-500 mt-1">{signUpErrors.phone.message}</p>}
              </div>

              {/* Password Input Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    {...registerSignUp('password')}
                    placeholder="Minimum 8 characters"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${signUpErrors.password ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-10 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {signUpErrors.password && <p className="text-[11px] text-rose-500 mt-1">{signUpErrors.password.message}</p>}
              </div>

              {/* Confirm Password Input Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Confirm Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    {...registerSignUp('confirmPassword')}
                    placeholder="Repeat password"
                    className={`w-full bg-slate-50 dark:bg-slate-950 border ${signUpErrors.confirmPassword ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'} rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 dark:text-slate-100 outline-none transition-colors`}
                  />
                </div>
                {signUpErrors.confirmPassword && <p className="text-[11px] text-rose-500 mt-1">{signUpErrors.confirmPassword.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 text-xs transition-all mt-6"
              >
                Register Account
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default AuthPages;