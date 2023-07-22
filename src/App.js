import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Banner } from './components/banner';
import { Form } from './components/form';
import { Footer } from './components/footer';
import { Price } from './components/prices';
export default function App() {
  const [activeGallery, setActiveGallery] = useState(null);

  const handleGalleryChange = (gallery) => {
    setActiveGallery(gallery);
  };

  return (
    <Router>
      <div>
        <Navbar handleGalleryChange={handleGalleryChange} />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/price" element={<Price />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


