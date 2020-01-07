import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Hero from "./components/layout/Hero";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Hero />
    </div>
  );
};
export default App;
