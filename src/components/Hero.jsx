import React from 'react';

const Hero = () => {
  return (
    <section className="reveal">
      <a href="#" className="group block relative overflow-hidden rounded-3xl bg-black aspect-[21/9]">
        <img 
          src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-1000" 
          alt="Featured"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
          <span className="text-white/70 text-sm font-medium mb-3 uppercase tracking-widest">סיפור נבחר</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            אמנות החיים המכוונים בעידן הדיגיטלי
          </h1>
          <p className="text-white/80 max-w-lg mb-6 hidden md:block">
            כיצד החזרנו לעצמנו את הריכוז על ידי הסרת הרעש מהרשת המודרנית והתמקדות במה שחשוב באמת.
          </p>
          <span className="text-white font-medium underline decoration-2 underline-offset-4">קרא את הכתבה</span>
        </div>
      </a>
    </section>
  );
};

export default Hero;