import React from 'react';

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Upcoming Appointments</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">3</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Unread Messages</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Prescriptions</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">2</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Health Score</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">82</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Recent Activity</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Appointment with Dr. Amina confirmed for Oct 10, 10:00 AM</li>
          <li>• New message from Dr. Patel about lab results</li>
          <li>• Prescription refill approved: Atorvastatin 10mg</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome; 