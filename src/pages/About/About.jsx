// src/pages/About.jsx
import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import "./About.scss";
import Collapse from "../../components/Collapse/Collapse.jsx";

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="home-banner"></div>
        <div className="about-collapses">
          <Collapse title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapse>
          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondamentales de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </Collapse>
          <Collapse title="Service">
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement respecte les critères de sécurité établis par nos services.</p>
          </Collapse>
        </div>
      </div>
    </Layout>
  );
};

export default About;


