// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.scss";
import logo from "../photos/logo.png";
import logoFooter from "../photos/logo-footer.png";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <img src={logo} alt="Kasa Logo" className="layout-logo" />
        <nav className="layout-nav">
          <Link to="/" className="layout-nav-link">Accueil</Link>
          <Link to="/about" className="layout-nav-link">À Propos</Link>
        </nav>
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <img src={logoFooter} alt="Kasa Logo" className="logo-footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
