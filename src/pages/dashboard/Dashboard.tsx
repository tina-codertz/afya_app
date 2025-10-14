import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, useSidebar } from "../../context/sidebarContext";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


const LayoutContent:React.FC = () =>{
  const {isExpanded, isHovered, isMobileOpen} = useSidebar();

  return(
    <div className="min-h-screen xl:flex">
      <div>
         <Sidebar/>
      </div>

      <div className={`flex-1 transition-all duration-300 ease-in-out  ${
        isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
      } ${isMobileOpen ? "ml-0" : ""}` }
      >

        <Header/>
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet/>
        </div>
      </div>
    </div>

  );
};

const Dashboard:React.FC = ()=>{
  return(
    <SidebarProvider>
      <LayoutContent/>
    </SidebarProvider>
  )
}
export default Dashboard
