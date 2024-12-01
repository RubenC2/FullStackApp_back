
import React from 'react';
import logo from '../../../../public/img/logo.svg';  // Ajusta la ruta a tu imagen


const Logo = () => {
  return (
    <div className="tituloLogo">
      <img src={logo} alt="Logo" className="logo-img" />
    </div>
  );
};

export default Logo;

