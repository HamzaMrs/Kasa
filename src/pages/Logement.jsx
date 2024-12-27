// src/pages/Logement.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  return (
    <Layout>
      <div className="lodging-details">
        <h1 className="lodging-details-title">Détails du logement</h1>
        <p className="lodging-details-description">
          Afficher les détails pour le logement avec l'ID : {id}
        </p>
      </div>
    </Layout>
  );
};

export default Logement;


