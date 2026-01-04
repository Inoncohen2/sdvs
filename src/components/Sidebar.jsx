import React from 'react';

const Sidebar = () => {
  return (
    <div className="sticky top-24 space-y-10">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal">
        <h3 className="font-bold mb-4">חיפוש</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="מצא סיפורים..." 
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-black transition outline-none"
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal">
        <h3 className="font-bold mb-6">קטגוריות</h3>
        <ul className="space-y-4 text-sm">
          {[ 
            { name: 'ארכיטקטורה', count: 12 },
            { name: 'טיפוגרפיה', count: 8 },
            { name: 'פרודוקטיביות', count: 24 },
            { name: 'צילום', count: 15 }
          ].map((cat) => (
            <li key={cat.name}>
              <a href="#" className="flex justify-between text-gray-500 hover:text-black transition">
                <span>{cat.name}</span>
                <span className="text-gray-300">{cat.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-black text-white p-8 rounded-3xl shadow-xl reveal">
        <h3 className="font-bold mb-4">ניוזלטר</h3>
        <p className="text-sm text-white/70 mb-6">קבלו מחשבות נבחרות על עיצוב וטכנולוגיה פעם בשבוע.</p>
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-sm mb-4 placeholder:text-white/40 focus:ring-1 focus:ring-white outline-none"
        />
        <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-100 transition">הרשמה</button>
      </div>
    </div>
  );
};

export default Sidebar;