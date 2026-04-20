import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import ScrollUtilities from './components/ScrollUtilities';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollUtilities />
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
