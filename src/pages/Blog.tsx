import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { id: 1, title: 'Healthy Living Tips', excerpt: 'Simple ways to stay healthy every day.' },
    { id: 2, title: 'Understanding Cholesterol', excerpt: 'Good vs bad cholesterol explained.' },
  ];

  return (
    <div className="space-y-4">
      {posts.map((p) => (
        <div key={p.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{p.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog; 