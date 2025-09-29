import React from 'react';
import { Outlet} from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Navbar } from '../components/Navbar';
const Dashboard: React.FC = () => {
  const { user } = useUser();
  

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      
      <Navbar/>
   
      <div className="flex-1 p-6 overflow-y-auto">

       
        <Outlet />
      </div>
     
    </div>
  );
};

export default Dashboard;
