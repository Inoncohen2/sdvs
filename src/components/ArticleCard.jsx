import React from 'react';

const ArticleCard = ({ category, title, excerpt, date, readTime, image }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-5 gap-6 hover-lift p-4 rounded-2xl reveal">
      <div className="md:col-span-2">
        <img src={image} className="rounded-xl w-full h-48 object-cover shadow-sm" alt={title} />
      </div>
      <div className="md:col-span-3 flex flex-col justify-center">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{category}</span>
        <h2 className="text-2xl font-bold mb-3 hover:text-gray-600 transition cursor-pointer">{title}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center text-xs text-gray-400">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;