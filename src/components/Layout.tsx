import React from 'react';

// import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className=" flex-1 pt-16">
        {children}
        
      </main>
      <Footer />
    </div>
  );
};