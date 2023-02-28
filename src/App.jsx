import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import BookOnline from './views/BookOnline';
import YoungLiving from './views/YoungLiving';
import PageLoader from './components/page-loader/PageLoader';
import About from './views/About';
// import TermsAndConditions from "./views/TermsAndConditions";
import Services from './views/Services';
import Contact from './views/Contact';

import './index.css';
import Blog from './views/Blog';
import FAQ from './views/FAQ';
import ResidentialCleaning from './views/ResidentialCleaning';
import VacationalCleaning from './views/VacationalCleaning';
import CommercialCleaning from './views/CommercialCleaning';
import OfficeCleaning from './views/OfficeCleaning';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appointments" element={<BookOnline />}></Route>
        <Route path="/living" element={<YoungLiving />}></Route>
        <Route path="/pageloader" element={<PageLoader />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/services/residential"
          element={<ResidentialCleaning />}
        ></Route>
        <Route
          path="/services/vacational"
          element={<VacationalCleaning />}
        ></Route>
        <Route
          path="/services/commercial"
          element={<CommercialCleaning />}
        ></Route>
        <Route path="/services/office" element={<OfficeCleaning />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
