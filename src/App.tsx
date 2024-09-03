import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import "./style.css";
import Navbar from "./components/Navbar";
import BeASponsor from "./components/BeASponsor";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/be-a-sponsor" element={<BeASponsor />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
