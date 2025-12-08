import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertySection from './components/PropertySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import PropertySingle from './pages/PropertySingle';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PropertySection />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertySingle />} />
      </Routes>
    </Router>
  );
}

export default App;