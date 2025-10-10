import React from 'react';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {

  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAuth = location.pathname.startsWith("/auth")

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && !isAuth && <Navbar/>}
    
      <main className=" flex-1 pt-16">
        {children}
      </main>
      {!isDashboard && !isAuth && <Footer />}
    </div>
  );
};