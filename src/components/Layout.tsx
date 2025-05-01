
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../global.css';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content-container">
        <img 
          src="/public/lovable-uploads/ALogo.png" 
          alt="AlienFlowSpace Logo" 
          className="background-logo" 
        />
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
