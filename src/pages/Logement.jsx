// src/pages/LodgingDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const logement = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  return (
    <div>
      <h1>Détails du logement</h1>
      <p>Afficher les détails pour le logement avec l'ID : {id}</p>
    </div>
  );
};

export default logement;
