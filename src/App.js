//import logo from './logo.svg';
import React, { useState } from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Layout from './pages/Layout';
import Services from './pages/Services'
import Contact from './pages/Contact';
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
