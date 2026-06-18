import React, { useState } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '', company: '', type: 'Customer' });

  const handleAdd = (e) => {
    e.preventDefault();
    setClients([...clients, { ...newClient, id: Date.now(), joined: new Date().toLocaleDateString() }]);
    setNewClient({ name: '', email: '', phone: '', company: '', type: 'Customer' });
    setShowAddModal(false);
  };

  const handleDelete = (id) => setClients(clients.filter(c => c.id !== id));

  return (
    <div className="space-y-6 fade-in-up">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Clients', val: clients.length, icon: '👥', gradient: 'from-indigo-600 to-blue-600' },
          { label: 'Customers', val: clients.filter(c => c.type === 'Customer').length, icon: '🛒', gradient: 'from-emerald-500 to-teal-500' },
          { label: 'Suppliers', val: clients.filter(c => c.type === 'Supplier').length, icon: '🏭', gradient: 'from-amber-500 to-orange-500' },
        ].map((stat, i) => (
          <div key={i} className="glass-light rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-sm shadow-lg`}>{stat.icon}</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{stat.label}</span>
            </div>
            <p className="text-2xl font-black text-white">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Client Directory</h2>
          <p className="text-sm text-slate-500 mt-1">Manage customers and suppliers</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add Client
        </button>
      </div>

      {/* Client Cards */}
      {clients.length === 0 ? (
        <div className="glass-light rounded-2xl py-20 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <p className="text-slate-400 font-semibold text-lg">No clients yet</p>
          <p className="text-slate-600 text-sm mt-1">Add your first client to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map(client => (
            <div key={client.id} className="glass-light rounded-2xl p-5 group hover:border-indigo-500/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold shadow-lg shadow-indigo-500/20">
                    {client.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-white">{client.name}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${client.type === 'Supplier' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{client.type}</span>
                  </div>
                </div>
                <button onClick={() => handleDelete(client.id)} className="w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-rose-500/10 flex items-center justify-center transition-all">
                  <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-slate-400"><svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>{client.email}</p>
                <p className="flex items-center gap-2 text-slate-400"><svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>{client.phone}</p>
                {client.company && <p className="flex items-center gap-2 text-slate-400"><svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>{client.company}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)}>
          <div className="glass rounded-3xl p-8 w-full max-w-lg shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Add New Client</h3>
              <button onClick={() => setShowAddModal(false)} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">Full Name</label>
                <input type="text" required value={newClient.name} onChange={e => setNewClient({...newClient, name: e.target.value})} placeholder="John Doe" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Email</label>
                  <input type="email" required value={newClient.email} onChange={e => setNewClient({...newClient, email: e.target.value})} placeholder="john@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Phone</label>
                  <input type="tel" required value={newClient.phone} onChange={e => setNewClient({...newClient, phone: e.target.value})} placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Company</label>
                  <input type="text" value={newClient.company} onChange={e => setNewClient({...newClient, company: e.target.value})} placeholder="Optional" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Type</label>
                  <select value={newClient.type} onChange={e => setNewClient({...newClient, type: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option value="Customer" className="bg-slate-800">Customer</option>
                    <option value="Supplier" className="bg-slate-800">Supplier</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Add Client
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
