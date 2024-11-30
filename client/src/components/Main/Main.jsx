import React, { useState, useEffect } from 'react';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home";
import Card from './Home/Card/Card';

const Main = () => {

  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/categoria/:catId" element={<Card />} />
        {/* <Route path="/article/:articleId" element={<ArticleDetail />} /> */}
      </Routes>

    </div>
  );
};

export default Main; 

