// src/pages/Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default Error404;
