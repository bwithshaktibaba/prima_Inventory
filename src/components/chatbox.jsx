import React, { useState, useRef, useEffect } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'System', text: 'Welcome to Team Chat! Coordinate with your warehouse team here.', time: '09:00 AM', isSystem: true },
  ]);
  const [inputText, setInputText] = useState('');
  const [userName] = useState('You');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { id: Date.now(), sender: userName, text: inputText.trim(), time, isSystem: false }]);
    setInputText('');
  };

  const quickMessages = [
    'Order ready for pickup',
    'Stock count updated',
    'New shipment arrived',
    'Need restock ASAP',
  ];

  return (
    <div className="fade-in-up h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Team Chat</h2>
          <p className="text-sm text-slate-500 mt-1">Coordinate with your warehouse team</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs text-slate-500 font-medium">Online</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass-light rounded-2xl flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.isSystem ? 'justify-center' : msg.sender === userName ? 'justify-end' : 'justify-start'}`}>
              {msg.isSystem ? (
                <div className="bg-white/5 rounded-xl px-4 py-2 text-xs text-slate-500 font-medium">
                  {msg.text}
                </div>
              ) : (
                <div className={`max-w-[70%] ${msg.sender === userName ? 'order-2' : ''}`}>
                  <div className={`rounded-2xl px-5 py-3 ${
                    msg.sender === userName
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-md'
                      : 'bg-white/5 text-white border border-white/5 rounded-tl-md'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <p className={`text-[10px] text-slate-500 mt-1 ${msg.sender === userName ? 'text-right' : ''}`}>
                    {msg.sender} • {msg.time}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Messages */}
        <div className="px-6 py-3 border-t border-white/5 flex gap-2 overflow-x-auto">
          {quickMessages.map((qm, i) => (
            <button
              key={i}
              onClick={() => setInputText(qm)}
              className="px-3 py-1.5 bg-white/5 hover:bg-indigo-600/20 border border-white/5 hover:border-indigo-500/30 rounded-xl text-xs text-slate-400 hover:text-indigo-300 font-medium whitespace-nowrap transition-all"
            >
              {qm}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-white/5 flex items-center gap-3">
          <button type="button" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all disabled:opacity-40 flex-shrink-0 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
