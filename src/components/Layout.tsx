
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 content-container relative">
        <img 
          src="/lovable-uploads/ALogo.png" 
          alt="AlienFlowSpace Logo" 
          className="background-logo" 
        />
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
