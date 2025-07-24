import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CanadaImmigration from './pages/CanadaImmigration';
import AustraliaImmigration from './pages/AustraliaImmigration';
import USAImmigration from './pages/USAImmigration';
import UKImmigration from './pages/UKImmigration';
import GermanyImmigration from './pages/GermanyImmigration';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/canada-immigration" element={<CanadaImmigration />} />
            <Route path="/australia-immigration" element={<AustraliaImmigration />} />
            <Route path="/usa-immigration" element={<USAImmigration />} />
            <Route path="/uk-immigration" element={<UKImmigration />} />
            <Route path="/germany-immigration" element={<GermanyImmigration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;