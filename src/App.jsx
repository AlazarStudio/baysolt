import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./Components/Pages/MainPage";
import ProductionPage from "./Components/Pages/ProductionPage";
import ProductPage from "./Components/Pages/ProductPage";
import AboutPage from "./Components/Pages/AboutPage";
import DocumentsPage from "./Components/Pages/DocumentsPage";
import ContactPage from "./Components/Pages/ContactPage";
import FeedbackPage from "./Components/Pages/FeedbackPage";
import NonFoundPage from "./Components/Pages/NonFoundPage";

import Layout from "./Components/Standart/Layout/Layout";
import ScrollToTop from "./Components/Standart/ScrollToTop/ScrollToTop";
import BuyPage from "./Components/Pages/BuyPage";

function App() {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/index.html" element={<MainPage />} />
          <Route path="/production" element={<ProductionPage />} />
          <Route path="/production/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          
          <Route path="*" element={<NonFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
