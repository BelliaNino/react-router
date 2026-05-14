import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  BrowserRouter, Routes, Route,
  Outlet
} from "react-router-dom"

import Index from './pages/Index';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

import Structure from './layouts/Structure';



function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Structure/>}>
            {/* http://localhost:5176/ */}
            <Route path="/" element={<Index />} />
            {/* http://localhost:5176/Contact */}
            <Route path="/Contact" element={<Contact />} />
            {/* http://localhost:5176/Products */}
            <Route path="/Products" element={<Products />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
