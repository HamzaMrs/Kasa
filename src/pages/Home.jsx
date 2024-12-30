import React from "react";
import { Link } from "react-router-dom"; // Importation du composant Link
import Layout from "../components/Layout";
import logements from "../data/logements.json"; // Importation des données JSON
import "./Home.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home-banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <section className="home-gallery">
        {logements.map((logement) => (
          <Link to={`/lodging/${logement.id}`} key={logement.id} className="home-card">
            <img src={logement.cover} alt={logement.title} className="home-card-image"/>
            <h2 className="home-card-title">{logement.title}</h2>
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
