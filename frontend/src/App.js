import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Locations from "./Components/Locations";
import JoinUs from "./Components/JoinUs";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/locations" element={<Locations />} /> 
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/joinus" element={<JoinUs />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
