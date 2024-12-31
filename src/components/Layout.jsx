// src/components/Layout.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.scss";
import logo from "../photos/logo.png";
import logoFooter from "../photos/logo-footer.png";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <img src={logo} alt="Kasa Logo" className="layout-logo" />
        <nav className="layout-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "layout-nav-link active-link" : "layout-nav-link"}>Accueil</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "layout-nav-link active-link" : "layout-nav-link"}>À Propos</NavLink>
        </nav>
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <img src={logoFooter} alt="Kasa Logo" className="logo-footer" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
