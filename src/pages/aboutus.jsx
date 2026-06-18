import React from 'react';

const AboutUs = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 md:px-12 py-5 flex items-center justify-between" style={{ background: 'rgba(10, 14, 26, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <button onClick={onNavigateHome} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Prima</span>
            <span className="text-slate-400 font-light">Inventory</span>
          </span>
        </button>
        <button onClick={onNavigateHome} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We're building the future of inventory management — powerful, beautiful, and accessible to businesses of every size.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl mb-6">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To empower businesses with intelligent inventory tools that save time, reduce waste, and boost profitability. We believe every business deserves enterprise-grade inventory management without the enterprise price tag.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-2xl mb-6">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              A world where supply chain chaos is replaced by clarity. Where every product is tracked, every order is on time, and every business decision is backed by real data.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '2,000+', label: 'Businesses', icon: '🏢' },
              { val: '99.9%', label: 'Uptime', icon: '⚡' },
              { val: '50M+', label: 'Items Tracked', icon: '📦' },
              { val: '24/7', label: 'Support', icon: '🛡️' },
            ].map((stat, i) => (
              <div key={i} className="text-center glass rounded-2xl p-6">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <p className="text-3xl font-black gradient-text">{stat.val}</p>
                <p className="text-sm text-slate-400 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Meet the <span className="gradient-text">Team</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Rahul Sharma', role: 'Founder & CEO', color: 'from-indigo-500 to-purple-500' },
              { name: 'Priya Patel', role: 'Lead Developer', color: 'from-cyan-500 to-blue-500' },
              { name: 'Amit Kumar', role: 'Design Lead', color: 'from-emerald-500 to-teal-500' },
            ].map((member, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center group hover:border-indigo-500/30 transition-all duration-300">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-8 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">© 2026 PrimaInventory. Built with ❤️</p>
      </footer>
    </div>
  );
};

export default AboutUs;
