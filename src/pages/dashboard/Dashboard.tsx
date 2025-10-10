import React from 'react';
import { Outlet} from 'react-router-dom';
import { SidebarProvider } from '../../context/sidebarContext';
import Sidebar from '../../components/Sidebar';

const Dashboard: React.FC = () => {

  

  return (

    <SidebarProvider>
      <div>
        <Sidebar/>
        <Outlet/>
      </div>
    </SidebarProvider>
    
  );
};

export default Dashboard;
