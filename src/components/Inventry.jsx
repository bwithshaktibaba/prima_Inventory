import React, { useState } from 'react';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', sku: '', category: '', quantity: '', price: '', status: 'In Stock' });

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: Date.now(), quantity: Number(newItem.quantity), price: Number(newItem.price) }]);
    setNewItem({ name: '', sku: '', category: '', quantity: '', price: '', status: 'In Stock' });
    setShowAddModal(false);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalValue = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const lowStock = items.filter(item => item.quantity < 10).length;

  return (
    <div className="space-y-6 fade-in-up">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Products', val: items.length, icon: '📦', gradient: 'from-indigo-600 to-blue-600' },
          { label: 'Total Quantity', val: totalItems.toLocaleString(), icon: '📊', gradient: 'from-emerald-500 to-teal-500' },
          { label: 'Total Value', val: `₹${totalValue.toLocaleString()}`, icon: '💰', gradient: 'from-amber-500 to-orange-500' },
          { label: 'Low Stock', val: lowStock, icon: '⚠️', gradient: 'from-rose-500 to-pink-500' },
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

      {/* Header + Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">All Products</h2>
          <p className="text-sm text-slate-500 mt-1">Manage your inventory items</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add Item
        </button>
      </div>

      {/* Table */}
      <div className="glass-light rounded-2xl overflow-hidden">
        {items.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <p className="text-slate-400 font-semibold text-lg">No items yet</p>
            <p className="text-slate-600 text-sm mt-1">Click "Add Item" to start building your inventory</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {['Product', 'SKU', 'Category', 'Qty', 'Price', 'Value', 'Status', ''].map(h => (
                  <th key={h} className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">
                        {item.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-semibold text-white text-sm">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-400 font-mono">{item.sku}</td>
                  <td className="px-5 py-4 text-sm text-slate-400">{item.category}</td>
                  <td className="px-5 py-4 text-sm font-bold text-white">{item.quantity}</td>
                  <td className="px-5 py-4 text-sm text-slate-300">₹{item.price.toLocaleString()}</td>
                  <td className="px-5 py-4 text-sm font-bold text-emerald-400">₹{(item.quantity * item.price).toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      item.quantity < 10 ? 'bg-rose-500/10 text-rose-400' :
                      item.quantity < 50 ? 'bg-amber-500/10 text-amber-400' :
                      'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {item.quantity < 10 ? 'Low Stock' : item.quantity < 50 ? 'Medium' : 'In Stock'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button onClick={() => handleDelete(item.id)} className="w-8 h-8 rounded-lg hover:bg-rose-500/10 flex items-center justify-center transition-colors group">
                      <svg className="w-4 h-4 text-slate-500 group-hover:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
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
              <h3 className="text-xl font-bold text-white">Add New Item</h3>
              <button onClick={() => setShowAddModal(false)} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleAddItem} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Product Name</label>
                  <input type="text" required value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} placeholder="e.g. Widget A" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">SKU</label>
                  <input type="text" required value={newItem.sku} onChange={e => setNewItem({...newItem, sku: e.target.value})} placeholder="e.g. WDG-001" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">Category</label>
                <input type="text" required value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})} placeholder="e.g. Electronics" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Quantity</label>
                  <input type="number" required min="0" value={newItem.quantity} onChange={e => setNewItem({...newItem, quantity: e.target.value})} placeholder="0" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Price (₹)</label>
                  <input type="number" required min="0" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} placeholder="0" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Add to Inventory
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
