import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/logements.json"; // Assurez-vous d'importer les données correctement
import Layout from "../../components/Layout/Layout.jsx";
import "./Logement.scss";
import Collapse from "../../components/Collapse/Collapse.jsx";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.jsx";

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = logementsData.find((logement) => logement.id === id); // Cherche le logement avec cet ID

  // Si le logement n'est pas trouvé, afficher une page 404 ou une erreur
  if (!logement) {
    return (
      <Layout>
        <div className="lodging-not-found">
          <h2>Logement non trouvé</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="lodging-details">
        <ImageCarousel pictures={logement.pictures}  alt={logement.title} className="lodging-cover"/>
        <div className="lodging-details-content">
          <div className="lodging-info">
            <h1 className="lodging-details-title">{logement.title}</h1>
            <p className="lodging-location">{logement.location}</p>
            <div className="lodging-tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="lodging-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lodging-host">
            <div className="host-header">
              <p className="lodging-host-name">  {logement.host.name.split(" ")[0]}<br />{logement.host.name.split(" ")[1]}</p>
              <img src={logement.host.picture} alt={logement.host.name} className="lodging-host-image"/>
            </div>
            <div className="lodging-rating">
              {Array.from({ length: 5 }, (_, i) => (<i key={i} className={`fa-solid fa-star ${i < logement.rating ? "filled" : ""}`}></i>))}
            </div>
          </div>
        </div>
        <div className="lodging-collapse">
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Équipements">
            <ul className="equipment-list">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>

            </Collapse>
          </div>
      </div>
    </Layout>
  );
};

export default Logement;
