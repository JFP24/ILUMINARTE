import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { Products } from "./Components/Productos/Products.jsx";
import { About } from "./Components/About/About.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
export default App;
