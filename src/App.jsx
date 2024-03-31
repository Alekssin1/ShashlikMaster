import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import MenuPage from './pages/MenuPage';
import Landing from './pages/Landing';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu/*" element={<MenuPage />} />
      <Route path="/menu/:dishType/:productId" element={<ProductPage />} />
    </Routes>
  );
};



