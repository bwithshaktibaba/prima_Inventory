import React, { useState } from 'react';
import Inventory from '../components/Inventry';
import Clients from '../components/clients';
import Calendar from '../components/calender';
import Chatbox from '../components/chatbox';
import OrderList from '../components/orderlist';

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { id: 'inventory', label: 'Inventory', icon: <BoxIcon /> },
    { id: 'orders', label: 'Orders', icon: <CartIcon /> },
    { id: 'clients', label: 'Clients', icon: <UsersIcon /> },
    { id: 'calendar', label: 'Calendar', icon: <CalendarIcon /> },
    { id: 'chat', label: 'Chat', icon: <ChatIcon /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inventory': return <Inventory />;
      case 'orders': return <OrderList />;
      case 'clients': return <Clients />;
      case 'calendar': return <Calendar />;
      case 'chat': return <Chatbox />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0e1a] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#0d1117] border-r border-white/5 flex flex-col transition-all duration-300 z-30`}>
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-5 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          {sidebarOpen && (
            <span className="text-lg font-bold whitespace-nowrap">
              <span className="gradient-text">Prima</span>
              <span className="text-slate-500 font-light text-sm ml-1">Inv</span>
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 text-sm font-medium group
                ${activeTab === item.id
                  ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/10 text-white border border-indigo-500/20 shadow-lg shadow-indigo-500/5'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-white/5 group-hover:bg-white/10'}`}>
                {item.icon}
              </span>
              {sidebarOpen && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-white/5">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/5 transition-all duration-200 text-sm font-medium"
          >
            <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </span>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6" style={{ background: 'rgba(13, 17, 23, 0.8)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h2 className="text-lg font-bold capitalize">{activeTab === 'dashboard' ? 'Dashboard Overview' : activeTab}</h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 w-64">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder="Search..." className="bg-transparent text-sm text-white placeholder-slate-500 outline-none flex-1" />
            </div>
            {/* Notification */}
            <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors relative">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-rose-500 rounded-full border-2 border-[#0d1117]"></div>
            </button>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-indigo-500/20">
              U
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

/* ========================== */
/* Dashboard Home (main view) */
/* ========================== */
const DashboardHome = () => {
  return (
    <div className="space-y-6 fade-in-up">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Sales Activity', val: '0', sub: 'Qty To be Packed', icon: <CartIcon />, gradient: 'from-indigo-600 to-blue-600', glow: 'shadow-indigo-500/20' },
          { title: 'Packages', val: '0', sub: 'To be Shipped', icon: <BoxIcon />, gradient: 'from-amber-500 to-orange-500', glow: 'shadow-amber-500/20' },
          { title: 'Deliveries', val: '0', sub: 'To be Delivered', icon: <TruckIcon />, gradient: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/20' },
          { title: 'Revenue', val: '₹0', sub: 'To be Invoiced', icon: <CurrencyIcon />, gradient: 'from-cyan-500 to-blue-500', glow: 'shadow-cyan-500/20' },
        ].map((card, i) => (
          <div key={i} className="glass-light rounded-2xl p-5 group hover:border-indigo-500/20 transition-all duration-300 cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg ${card.glow}`}>
                {card.icon}
              </span>
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">{card.title}</span>
            </div>
            <p className="text-3xl font-black text-white">{card.val}</p>
            <p className="text-xs text-slate-500 mt-1 font-medium">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 glass-light rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white text-base">Sales Order Summary (₹)</h3>
            <div className="flex gap-2">
              {['Week', 'Month', 'Year'].map(p => (
                <button key={p} className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${p === 'Month' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>{p}</button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-3 h-48">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-white/5 rounded-lg flex items-end justify-center h-36 overflow-hidden">
                  <div className="w-full bg-gradient-to-t from-indigo-600/50 to-purple-500/30 rounded-t-lg transition-all duration-500" style={{ height: `${h}%`, minHeight: '4px' }}></div>
                </div>
                <span className="text-[10px] text-slate-500 mt-2 font-medium">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'][i]}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-4 italic">No sales data yet. Start adding orders!</p>
        </div>

        {/* Inventory Summary */}
        <div className="glass-light rounded-2xl p-6">
          <h3 className="font-bold text-white text-base mb-6">Inventory Summary</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">In Hand</span>
                <span className="text-2xl font-bold text-white">0</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">To Be Received</span>
                <span className="text-2xl font-bold text-amber-400">0</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">Low Stock</span>
                <span className="text-2xl font-bold text-rose-400">0</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-pink-400 h-full rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-500 text-xs mt-6 italic">Add items to see inventory stats</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Details */}
        <div className="glass-light rounded-2xl p-6">
          <h3 className="font-bold text-white text-base mb-4">Product Details</h3>
          <div className="space-y-4">
            {[
              { label: 'Active Items', val: '0', pct: 0, color: 'from-indigo-500 to-blue-500' },
              { label: 'Inactive Items', val: '0', pct: 0, color: 'from-slate-500 to-gray-500' },
              { label: 'Low Stock Items', val: '0', pct: 0, color: 'from-rose-500 to-pink-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">{item.label}</span>
                  <span className="font-bold text-white">{item.val}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${item.color} h-full rounded-full transition-all`} style={{ width: `${item.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-light rounded-2xl p-6">
          <h3 className="font-bold text-white text-base mb-4">Recent Activity</h3>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-slate-500 text-sm font-medium">No recent activity</p>
            <p className="text-slate-600 text-xs mt-1">Activities will appear here as you use the system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========= */
/* SVG Icons */
/* ========= */
const HomeIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const BoxIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const CartIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>;
const UsersIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const CalendarIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ChatIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const TruckIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>;
const CurrencyIcon = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default Dashboard;
