import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Emiya Consulting</h1>
      </div>
    </div>
  );
};
export default App;
