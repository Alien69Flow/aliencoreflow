
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Academy from './pages/Academy';
import AlienTrip from './pages/AlienTrip';
import Clubs from './pages/Clubs';
import CoNetWorKing from './pages/CoNetWorKing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';
import './global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="academy" element={<Academy />} />
          <Route path="alien-trip" element={<AlienTrip />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="conetworking" element={<CoNetWorKing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
