import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const items = [
    { title: 'General Consultation', path: '/dashboard/services/general', desc: 'Routine check-ups and primary care.' },
    { title: 'Specialist Care', path: '/dashboard/services/specialist', desc: 'Cardiology, orthopedics, and more.' },
    { title: 'AI assistance', path: '/dashboard/services/ai', desc: 'Symptom checker and triage guidance.' },
    { title: 'Mental Health', path: '/dashboard/services/mental-health', desc: 'Counseling and therapy services.' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {items.map((s) => (
            <Link key={s.path} to={s.path} className="block border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{s.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 