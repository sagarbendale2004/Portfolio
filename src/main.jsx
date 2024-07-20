import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import "./styles/mediaQueries.scss";
import Particle from "./components/Praticle";

const App = () => (
  <Router>
    <Particle />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="#about" element={<Home />} />
        <Route path="#education" element={<Home />} />
        <Route path="#portfolio" element={<Home />} />
        <Route path="#contact" element={<Home />} />
        <Route path="*" element={<div>Page Not Found 404</div>} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
