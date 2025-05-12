import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterTable from "./pages/CharacterTable";
import Navbar from "./components/Navbar";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterTable />} />
      </Routes>
    </Router>
  );
};

export default App;
