import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error404 from './pages/Error/Error';
import Logement from './pages/Logement/Logement';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodging/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
