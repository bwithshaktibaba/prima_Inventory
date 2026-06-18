import React, { useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState({ customer: '', product: '', quantity: '', total: '', status: 'Pending' });

  const handleAdd = (e) => {
    e.preventDefault();
    setOrders([...orders, { ...newOrder, id: Date.now(), date: new Date().toLocaleDateString(), orderId: `ORD-${String(orders.length + 1).padStart(4, '0')}` }]);
    setNewOrder({ customer: '', product: '', quantity: '', total: '', status: 'Pending' });
    setShowAddModal(false);
  };

  const statusColors = {
    'Pending': 'bg-amber-500/10 text-amber-400',
    'Processing': 'bg-blue-500/10 text-blue-400',
    'Shipped': 'bg-indigo-500/10 text-indigo-400',
    'Delivered': 'bg-emerald-500/10 text-emerald-400',
    'Cancelled': 'bg-rose-500/10 text-rose-400',
  };

  return (
    <div className="space-y-6 fade-in-up">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders', val: orders.length, icon: '📋', gradient: 'from-indigo-600 to-blue-600' },
          { label: 'Pending', val: orders.filter(o => o.status === 'Pending').length, icon: '⏳', gradient: 'from-amber-500 to-orange-500' },
          { label: 'Shipped', val: orders.filter(o => o.status === 'Shipped').length, icon: '🚚', gradient: 'from-blue-500 to-cyan-500' },
          { label: 'Delivered', val: orders.filter(o => o.status === 'Delivered').length, icon: '✅', gradient: 'from-emerald-500 to-teal-500' },
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
          <h2 className="text-xl font-bold text-white">Order List</h2>
          <p className="text-sm text-slate-500 mt-1">Track and manage all orders</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          New Order
        </button>
      </div>

      {/* Orders Table */}
      <div className="glass-light rounded-2xl overflow-hidden">
        {orders.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <p className="text-slate-400 font-semibold text-lg">No orders yet</p>
            <p className="text-slate-600 text-sm mt-1">Create your first order to start tracking</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {['Order ID', 'Date', 'Customer', 'Product', 'Qty', 'Total', 'Status'].map(h => (
                  <th key={h} className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4 text-sm font-mono text-indigo-400 font-bold">{order.orderId}</td>
                  <td className="px-5 py-4 text-sm text-slate-400">{order.date}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-white">{order.customer}</td>
                  <td className="px-5 py-4 text-sm text-slate-300">{order.product}</td>
                  <td className="px-5 py-4 text-sm text-white font-bold">{order.quantity}</td>
                  <td className="px-5 py-4 text-sm text-emerald-400 font-bold">₹{Number(order.total).toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${statusColors[order.status]}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)}>
          <div className="glass rounded-3xl p-8 w-full max-w-lg shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Create New Order</h3>
              <button onClick={() => setShowAddModal(false)} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">Customer Name</label>
                <input type="text" required value={newOrder.customer} onChange={e => setNewOrder({...newOrder, customer: e.target.value})} placeholder="Customer name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">Product</label>
                <input type="text" required value={newOrder.product} onChange={e => setNewOrder({...newOrder, product: e.target.value})} placeholder="Product name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Quantity</label>
                  <input type="number" required min="1" value={newOrder.quantity} onChange={e => setNewOrder({...newOrder, quantity: e.target.value})} placeholder="0" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Total (₹)</label>
                  <input type="number" required min="0" value={newOrder.total} onChange={e => setNewOrder({...newOrder, total: e.target.value})} placeholder="0" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">Status</label>
                <select value={newOrder.status} onChange={e => setNewOrder({...newOrder, status: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                  {Object.keys(statusColors).map(s => <option key={s} value={s} className="bg-slate-800">{s}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Create Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;
