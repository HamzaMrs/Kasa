import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error';
import Logement from './pages/Logement';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodging/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} /> {/* Route pour gérer les 404 */}
    </Routes>
  );
};

export default App;
