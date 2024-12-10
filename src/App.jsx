import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import Home from "./components/Home";
import RollDice from "./components/RollDice";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roll-dice" element={<RollDice />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
    </>
  );
}

export default App;