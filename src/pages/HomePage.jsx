import React, { useState, useEffect } from 'react';

const HomePage = ({ onNavigateLogin, onNavigateSignup, onNavigateAbout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 md:px-12 py-5 flex items-center justify-between" style={{background: 'rgba(10, 14, 26, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Prima</span>
            <span className="text-slate-400 font-light">Inventory</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
          <a href="#dashboard" className="hover:text-white transition-colors duration-300">Dashboard</a>
          <button onClick={onNavigateAbout} className="hover:text-white transition-colors duration-300">About Us</button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateLogin}
            className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-indigo-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            Log In
          </button>
          <button
            onClick={onNavigateSignup}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Smart Inventory Management
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Manage Your
              <br />
              <span className="gradient-text">Inventory</span>
              <br />
              Smarter.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Track stock levels, manage orders, analyze sales trends, and streamline your entire supply chain — all from one powerful, beautiful dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onNavigateSignup}
                className="group px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 text-base font-semibold text-slate-300 border border-slate-700 rounded-2xl hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {['bg-indigo-500', 'bg-purple-500', 'bg-cyan-500', 'bg-emerald-500'].map((bg, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full ${bg} border-2 border-[#0a0e1a] flex items-center justify-center text-xs font-bold`}>
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-1">Trusted by 2,000+ businesses</p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className={`relative ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="float">
              <DashboardPreview />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -left-8 top-20 glass rounded-2xl p-4 shadow-xl fade-in-up delay-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Revenue</p>
                  <p className="text-lg font-bold text-emerald-400">+24.5%</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-24 glass rounded-2xl p-4 shadow-xl fade-in-up delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Stock Items</p>
                  <p className="text-lg font-bold text-white">12,847</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Everything You <span className="gradient-text">Need</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Powerful tools to manage your inventory, track orders, and grow your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📦', title: 'Inventory Tracking', desc: 'Real-time stock levels with low-stock alerts and automatic reorder points.', color: 'from-indigo-500/20 to-purple-500/20' },
              { icon: '📊', title: 'Sales Analytics', desc: 'Beautiful charts and reports to understand your business performance.', color: 'from-cyan-500/20 to-blue-500/20' },
              { icon: '🛒', title: 'Order Management', desc: 'Track purchase orders, sales orders, and deliveries in one place.', color: 'from-emerald-500/20 to-teal-500/20' },
              { icon: '👥', title: 'Client Management', desc: 'Manage client information, contact details, and purchase history.', color: 'from-amber-500/20 to-orange-500/20' },
              { icon: '📅', title: 'Calendar & Scheduling', desc: 'Plan deliveries, schedule pickups, and manage your timeline.', color: 'from-rose-500/20 to-pink-500/20' },
              { icon: '💬', title: 'Team Chat', desc: 'Built-in messaging to coordinate with your warehouse team.', color: 'from-violet-500/20 to-purple-500/20' },
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Powerful <span className="gradient-text">Dashboard</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything at a glance. Sales activity, inventory summary, charts, and more.</p>
          </div>
          <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/10">
            <FullDashboardPreview />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Get <span className="gradient-text">Started?</span></h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">Join thousands of businesses managing their inventory smarter. Free to start, no credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onNavigateSignup}
              className="px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              Create Free Account
            </button>
            <button
              onClick={onNavigateLogin}
              className="px-10 py-4 text-base font-semibold text-slate-300 border border-slate-700 rounded-2xl hover:border-slate-500 transition-all duration-300"
            >
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="font-bold text-sm">PrimaInventory</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 PrimaInventory. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <button onClick={onNavigateAbout} className="hover:text-white transition-colors">About</button>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ======================== */
/* Dashboard Preview Card   */
/* ======================== */
const DashboardPreview = () => (
  <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#111827] shadow-2xl shadow-indigo-500/10">
    {/* Mini header */}
    <div className="h-8 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center px-4 gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
      <span className="ml-3 text-[10px] text-white/70 font-medium">Dashboard — PrimaInventory</span>
    </div>
    <div className="flex">
      {/* Mini sidebar */}
      <div className="w-12 bg-[#0d1117] flex flex-col items-center py-4 gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-6 h-6 rounded-md ${i === 0 ? 'bg-indigo-500' : 'bg-white/5'}`}></div>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 p-4 space-y-3">
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { val: '458', label: 'Orders', color: 'text-indigo-400' },
            { val: '₹2.4L', label: 'Revenue', color: 'text-emerald-400' },
            { val: '14', label: 'Pending', color: 'text-amber-400' },
            { val: '97%', label: 'Delivered', color: 'text-cyan-400' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-2 text-center">
              <p className={`text-sm font-bold ${s.color}`}>{s.val}</p>
              <p className="text-[8px] text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-[9px] text-slate-400 font-medium mb-2">Sales Overview</p>
          <div className="flex items-end gap-1 h-14">
            {[35, 55, 40, 70, 50, 85, 60, 75, 45, 90, 65, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-sm opacity-70 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        {/* Table preview */}
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-[9px] text-slate-400 font-medium mb-2">Recent Orders</p>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
              <div className="w-4 h-4 rounded-full bg-white/10"></div>
              <div className="flex-1 h-2 bg-white/5 rounded"></div>
              <div className="w-8 h-2 bg-emerald-500/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ================================== */
/* Full Dashboard Preview (lower CTA) */
/* ================================== */
const FullDashboardPreview = () => (
  <div className="bg-[#111827]">
    {/* Header */}
    <div className="h-12 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center px-6">
      <span className="text-white font-bold text-sm tracking-wide">📦 PrimaInventory Dashboard</span>
    </div>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-16 bg-[#0d1117] flex flex-col items-center py-6 gap-4">
        {['🏠', '📦', '🛒', '👥', '📅', '💬'].map((icon, i) => (
          <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30' : 'hover:bg-white/5'}`}>
            {icon}
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-6 space-y-4">
        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { title: 'Sales Activity', val: '458', sub: 'Qty To be Packed', color: 'from-indigo-500 to-blue-500' },
            { title: 'Packages', val: '14', sub: 'To be Shipped', color: 'from-amber-500 to-orange-500' },
            { title: 'Deliveries', val: '15', sub: 'To be Delivered', color: 'from-emerald-500 to-teal-500' },
            { title: 'Revenue', val: '₹20,789', sub: 'To be Invoiced', color: 'from-cyan-500 to-blue-500' },
          ].map((card, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">{card.title}</p>
              <p className={`text-2xl font-black mt-1 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>{card.val}</p>
              <p className="text-xs text-slate-500 mt-1">{card.sub}</p>
            </div>
          ))}
        </div>
        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-5 border border-white/5">
            <p className="text-sm font-bold text-white mb-4">Sales Order Summary (₹)</p>
            <div className="flex items-end gap-2 h-28">
              {[40, 65, 35, 80, 55, 90, 45, 70, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-indigo-600/80 to-purple-500/60 rounded-md hover:from-indigo-500 hover:to-purple-400 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-slate-500">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-5 border border-white/5">
            <p className="text-sm font-bold text-white mb-4">Inventory Summary</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">In Hand</span>
                <span className="text-xl font-bold text-white">1,04,604</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">To Be Received</span>
                <span className="text-xl font-bold text-amber-400">356</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
