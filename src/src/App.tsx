import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the Layout
import Layout from './components/Layout';

// Importing all the Pages we built
import Home from './pages/Home';
import Services from './pages/Services';
import AutoSales from './pages/AutoSales';
import SellMyCar from './pages/SellMyCar';
import Franchising from './pages/Franchising';
import ContactUs from './pages/ContactUs';
import BookService from './pages/BookService';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-zoox-mint text-zoox-dark font-bold tracking-widest uppercase">Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auto-service" element={<Services />} />
            <Route path="/cars" element={<AutoSales />} />
            <Route path="/sell-my-car" element={<SellMyCar />} />
            <Route path="/franchising" element={<Franchising />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/book" element={<BookService />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default App;