import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Academy from './pages/Academy';
import Clubs from './pages/Clubs';
import CoNetWorKing from './pages/CoNetWorKing';
import AlienTrip from './pages/AlienTrip';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/alien-trip" element={<AlienTrip />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/conetworking" element={<CoNetWorKing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
