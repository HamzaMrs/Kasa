import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false); // Contenu masqué par défaut
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (

        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <i className="fa-solid fa-chevron-up" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} aria-hidden="true"></i>   
            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
  };
  
  export default Collapse;
