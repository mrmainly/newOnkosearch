import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from './pages/home';
import AboutPage from './pages/about'

import Breast from './pages/surveysInfo/breast'
import Breath from './pages/surveysInfo/breath'
import Liver from './pages/surveysInfo/liver'

import { Layout } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="breast" element={<Breast />} />
          <Route path="breath" element={<Breath />} />
          <Route path="liver" element={<Liver />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
