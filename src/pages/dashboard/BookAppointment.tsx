import React from 'react';

const BookAppointment: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Book Appointment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="p-2 border rounded bg-transparent" placeholder="Full name" />
        <input className="p-2 border rounded bg-transparent" placeholder="Email" />
        <select className="p-2 border rounded bg-transparent">
          <option>General Consultation</option>
          <option>Specialist Care</option>
          <option>AI assistance</option>
          <option>Mental Health</option>
        </select>
        <input className="p-2 border rounded bg-transparent" type="date" />
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
    </div>
  );
};

export default BookAppointment; 