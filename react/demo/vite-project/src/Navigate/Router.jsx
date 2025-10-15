import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from '../Home.jsx';
import About from './About.jsx';
import Product from './Product.jsx';
import ProductDetails from './ProductDetails.jsx'; 
import Contact from './Contact.jsx';
import Login from './Login.jsx';
import ProtectedRoute from '../Protected.jsx';
import { AuthProvider } from './AuthContext.jsx';

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route 
            path="/product" 
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/products/:id" 
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
  