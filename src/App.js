import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shoppage/Shoppage";
import Header from "./Components/Header/Header";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shoppage />} />
        </Routes>
      </div>
    </Router>
  );
}
