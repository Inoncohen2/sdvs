import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import Sidebar from './components/Sidebar';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reveal',
          start: 'top 85%',
        }
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen">
      <Cursor />
      <Navbar />
      
      <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
          <div className="lg:col-span-8 space-y-12">
            <ArticleCard 
              category="עיצוב"
              title="מינימליזם אינו רק חלל ריק"
              excerpt="הבנת עקרונות הליבה של מינימליזם פונקציונלי בעיצוב ממשקים מודרני..."
              date="12 במאי, 2024"
              readTime="5 דקות קריאה"
              image="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&w=600&q=80"
            />
            <ArticleCard 
              category="טכנולוגיה"
              title="הנדסת תוכנה בת קיימא"
              excerpt="כיצד נוכל לבנות כלים טובים יותר תוך הפחתת טביעת הרגל הפחמנית של התשתית הדיגיטלית שלנו..."
              date="10 במאי, 2024"
              readTime="8 דקות קריאה"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
            />
          </div>

          <aside className="lg:col-span-4">
            <Sidebar />
          </aside>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm italic">© 2024 Lumina Journal. נבנה מתוך כוונה.</p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-black transition">טוויטר</a>
            <a href="#" className="text-gray-400 hover:text-black transition">אינסטגרם</a>
            <a href="#" className="text-gray-400 hover:text-black transition">RSS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;