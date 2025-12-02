import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertySingle from './pages/PropertySingle';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Preloader show={!ready} />
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertySingle />} />
          </Routes>
        </div>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;