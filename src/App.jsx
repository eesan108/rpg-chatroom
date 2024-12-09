import React from "react";
import "./styles.css"
import { Home } from "./components/Home";
import RollDice from "./components/RollDice";
import Navbar from "./components/Navbar";

const App = () => {
  return (
  <div>
    <Navbar />
    "Hello world"
    <Home />
    <RollDice />
  </div>
  );
}

export default App;