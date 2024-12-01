import React, { useState } from 'react';
import { Link } from 'react-router-dom';  


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </button>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/home" onClick={toggleMenu}>Categorías</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>Sobre mí</Link></li>
          <li><Link to="/asesorias" onClick={toggleMenu}>Asesorías</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
