import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HomePage from "./pages/homePage";
import AboutProject from "./pages/aboutProject";
import VirtualTour from "./pages/virtualTour";
import ScrollTop from "./component/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutProject />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
