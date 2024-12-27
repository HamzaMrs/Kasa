import React from "react";
import { Link } from "react-router-dom"; // Importation du composant Link
import Layout from "../components/Layout";
import "./Home.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home-banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <section className="home-gallery">
        {[...Array(6)].map((_, index) => (
          <Link to={`/lodging/${index + 1}`} key={index} className="home-card">
            <h2 className="home-card-title">Titre de la location</h2>
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
