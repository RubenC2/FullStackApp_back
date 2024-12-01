import React, { useState, useEffect } from 'react';
import Logo from './Logo/Logo';
import Nav from "./Nav/Nav"

const Header = () => {

  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header; 
