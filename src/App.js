import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shoppage/Shoppage";
import Header from "./Components/Header/Header";
import SigninAndSignup from "./Pages/SigninAndSignup/SigninAndSignup";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/signin" element={<SigninAndSignup />} />
        </Routes>
      </div>
    </Router>
  );
}
