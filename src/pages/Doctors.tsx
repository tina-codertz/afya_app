import React from 'react';

const Doctors: React.FC = () => {
  const doctors = [
    { name: 'Dr. Amina Yusuf', specialty: 'Cardiologist' },
    { name: 'Dr. Ravi Patel', specialty: 'Orthopedic Surgeon' },
    { name: 'Dr. Lian Chen', specialty: 'Dermatologist' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Doctors</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {doctors.map((d) => (
          <li key={d.name} className="py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">{d.name}</p>
              <p className="text-gray-600 dark:text-gray-300">{d.specialty}</p>
            </div>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors; 