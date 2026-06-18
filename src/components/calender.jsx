import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', time: '', type: 'delivery' });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isToday = (day) => today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const getEventsForDay = (day) => events.filter(e => e.day === day && e.month === month && e.year === year);

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: Date.now(), day: selectedDay, month, year }]);
    setNewEvent({ title: '', time: '', type: 'delivery' });
    setShowAddModal(false);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowAddModal(true);
  };

  const typeColors = {
    delivery: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pickup: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    meeting: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    other: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  };

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="space-y-6 fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Calendar</h2>
          <p className="text-sm text-slate-500 mt-1">Schedule deliveries and pickups</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={prevMonth} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <span className="text-lg font-bold text-white min-w-[180px] text-center">{monthNames[month]} {year}</span>
          <button onClick={nextMonth} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="glass-light rounded-2xl overflow-hidden">
        {/* Day Names */}
        <div className="grid grid-cols-7 border-b border-white/5">
          {dayNames.map(name => (
            <div key={name} className="px-2 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">{name}</div>
          ))}
        </div>
        {/* Day Cells */}
        <div className="grid grid-cols-7">
          {days.map((day, i) => {
            const dayEvents = day ? getEventsForDay(day) : [];
            return (
              <div
                key={i}
                onClick={() => day && handleDayClick(day)}
                className={`min-h-[100px] p-2 border-b border-r border-white/5 transition-all cursor-pointer ${
                  day ? 'hover:bg-white/[0.03]' : ''
                } ${isToday(day) ? 'bg-indigo-500/5' : ''}`}
              >
                {day && (
                  <>
                    <span className={`inline-flex w-7 h-7 rounded-lg items-center justify-center text-sm font-semibold ${
                      isToday(day) ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 hover:text-white'
                    }`}>
                      {day}
                    </span>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map(ev => (
                        <div key={ev.id} className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${typeColors[ev.type]} truncate`}>
                          {ev.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-[10px] text-slate-500 font-medium">+{dayEvents.length - 2} more</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="glass-light rounded-2xl p-6">
        <h3 className="font-bold text-white text-base mb-4">Upcoming Events</h3>
        {events.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-500 text-sm">No events scheduled. Click on a date to add one.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {events.slice(-5).reverse().map(ev => (
              <div key={ev.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm ${typeColors[ev.type]}`}>
                  {ev.type === 'delivery' ? '🚚' : ev.type === 'pickup' ? '📦' : ev.type === 'meeting' ? '🤝' : '📌'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{ev.title}</p>
                  <p className="text-xs text-slate-500">{monthNames[ev.month]} {ev.day}, {ev.year} {ev.time && `• ${ev.time}`}</p>
                </div>
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${typeColors[ev.type]}`}>{ev.type}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)}>
          <div className="glass rounded-3xl p-8 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Add Event — {monthNames[month]} {selectedDay}</h3>
              <button onClick={() => setShowAddModal(false)} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">Event Title</label>
                <input type="text" required value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} placeholder="e.g. Ship Order #123" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Time</label>
                  <input type="time" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1">Type</label>
                  <select value={newEvent.type} onChange={e => setNewEvent({...newEvent, type: e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option value="delivery" className="bg-slate-800">Delivery</option>
                    <option value="pickup" className="bg-slate-800">Pickup</option>
                    <option value="meeting" className="bg-slate-800">Meeting</option>
                    <option value="other" className="bg-slate-800">Other</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Add Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
