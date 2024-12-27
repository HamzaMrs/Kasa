// src/pages/Error404.jsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Error.scss";

const Error404 = () => {
  return (
    <Layout>
      <div className="error404">
        <h1 className="error404-title">404</h1>
        <p className="error404-message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error404-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Layout>
  );
};

export default Error404;
