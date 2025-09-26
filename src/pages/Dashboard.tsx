import React from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Navbar } from '../components/Navbar';
const Dashboard: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      
      <Navbar/>
   
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-green-700">Afya Connect Dashboard</h1>
        <p className="mt-4 text-gray-700">
          Welcome, {user?.fullName || user?.primaryEmailAddress?.emailAddress}!
        </p>
        <Outlet />
      </div>
      <button
        onClick={() => navigate('/')}
        className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
