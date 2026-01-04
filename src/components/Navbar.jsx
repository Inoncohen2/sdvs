import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tighter">LUMINA.</a>
        <div className="hidden md:flex space-x-8 space-x-reverse text-sm font-medium">
          <a href="/" className="hover:text-gray-500 transition">יומן</a>
          <a href="/about" className="hover:text-gray-500 transition">אודות</a>
          <a href="/contact" className="hover:text-gray-500 transition">צור קשר</a>
        </div>
        <button className="md:hidden font-bold">תפריט</button>
      </div>
    </nav>
  );
};

export default Navbar;