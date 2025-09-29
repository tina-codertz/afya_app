import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-2">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Contact Us</h2>
      <p className="text-gray-700 dark:text-gray-300">Email: support@afyaconnect.example</p>
      <p className="text-gray-700 dark:text-gray-300">Phone: +254 700 000 000</p>
      <p className="text-gray-700 dark:text-gray-300">Address: Nairobi, Kenya</p>
    </div>
  );
};

export default Contact; 