import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Wallet, 
  History, 
  Menu, 
  X, 
  LogOut, 
  Bell, 
  User 
} from 'lucide-react';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Sidebar navigation menu options
  const menuItems = [
    { id: 'request', label: 'Request Money', icon: <ArrowDownLeft className="w-4 h-4" /> },
    { id: 'deposit', label: 'Deposit Money', icon: <Wallet className="w-4 h-4" /> },
    { id: 'withdrawals', label: 'Withdrawals', icon: <ArrowUpRight className="w-4 h-4" /> },
    { id: 'transactions', label: 'Transactions', icon: <History className="w-4 h-4" /> },
  ];

  // Render content based on selected sidebar item
  const renderContent = () => {
    switch (activeTab) {
      case 'request':
        return (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Request Money</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Inbound payment configurations and request generation panels.</p>
          </div>
        );
      case 'deposit':
        return (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Deposit Money</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Secure wallet loading options and gateway integrations.</p>
          </div>
        );
      case 'withdrawals':
        return (
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Withdrawals</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Outbound payout pipelines and account settlements.</p>
          </div>
        );
      case 'transactions':
      default:
        return (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline cursor-pointer">View all</span>
            </div>
            <div className="p-6 text-xs text-slate-500 dark:text-slate-400">
              Transaction history logs and activity audits will display here...
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex overflow-x-hidden">
      
      {/* ================= SIDEBAR (DESKTOP) ================= */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 fixed inset-y-0 left-0 z-20">
        {/* Brand Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800 gap-2.5">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">RefundGuard</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-950 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom Sign Out Area */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ================= MOBILE SIDEBAR DRAWER ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Side Drawer Body */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-50 md:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Mobile Header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
                  <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">RefundGuard</span>
                </div>
                <button 
                  onClick={() => setIsMobileOpen(false)} 
                  className="p-1.5 rounded-xl text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950 border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Mobile Links */}
              <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileOpen(false); // Closes menu automatically on link click
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === item.id
                        ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'
                        : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-950 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Drawer Bottom Sign Out */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-colors">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= MAIN DISPLAY CONTENT WINDOW ================= */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0">
        
        {/* Top Sticky Header Navbar */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            
            {/* Mobile Hamburger Toggle Trigger */}
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="p-2 -ml-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950 md:hidden block focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <h2 className="text-sm font-bold text-slate-900 dark:text-white capitalize tracking-tight">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h2>
          </div>

          {/* Quick Info & Notifications Area */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-600 rounded-full" />
            </button>
            <div className="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 cursor-pointer text-slate-600 dark:text-slate-300">
              <User className="w-4 h-4" />
            </div>
          </div>
        </header>

        {/* Dynamic Display Canvas */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;