import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'index.css';
import MenuPage from 'pages/MenuPage';
import Landing from 'pages/Landing';
import ProductPage from 'pages/ProductPage';

export default function App() {
  return (
    <Routes>
      <Route path="/ShashlikMaster/" element={<Landing />} />
      <Route path="/ShashlikMaster/menu/*" element={<MenuPage />} />
      <Route path="/ShashlikMaster/menu/:dishType/:productId" element={<ProductPage />} />
    </Routes>
  );
};



