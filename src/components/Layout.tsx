
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  
  // Pages that handle their own header/footer
  const pagesWithOwnLayout = ['/', '/conetworking'];
  const hasOwnLayout = pagesWithOwnLayout.includes(location.pathname);

  if (hasOwnLayout) {
    return <Outlet />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
