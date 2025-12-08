
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Briefs from '@/pages/Briefs';
import Creative from '@/pages/Creative';
import Business from '@/pages/Business';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Mar Digital - Impulsa tu marca con diseño y estrategia digital</title>
        <meta name="description" content="En Mar Digital unimos creatividad y estrategia: desde páginas web y branding que hacen brillar tu negocio, hasta consultoría avanzada para que tu empresa crezca con bases sólidas." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/briefs" element={<Briefs />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/business" element={<Business />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
