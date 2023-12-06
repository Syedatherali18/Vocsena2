import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Premium from './components/premium';
import Website from './components/inbuild/website';
import Graphics from './components/inbuild/Graphics';
import Branding from './components/inbuild/Branding';
import Pricing from './components/inbuild/pricing';
import Testi from './components/inbuild/testi';
import CreateYourService from './components/Upload/Createyourservice'
import Contact from './components/inbuild/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/home" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/Graphics" element={<Graphics/>} />
        <Route path="/Branding" element={<Branding/>} />
        <Route path="/Upload" element={<CreateYourService/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testi />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
