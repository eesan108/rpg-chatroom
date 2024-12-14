import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import Home from "./components/Home";
import RollDice from "./components/RollDice";
import Navbar from "./components/Navbar";
import Playersheet from "./components/Playersheet";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roll-dice" element={<RollDice />} />
        <Route path="/playersheet" element={<Playersheet />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
    </>
  );
}

export default App;