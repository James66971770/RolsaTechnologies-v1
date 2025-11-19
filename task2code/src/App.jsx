// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";  

function App() {

  // COMMENT THIS OUT TO PREVENT SKIPPING LOGIN THROUGH DIRECTORY
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SignUp" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
