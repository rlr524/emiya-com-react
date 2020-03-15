import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Card from "./components/layout/Card";

const App = () => {
  return (
    <div className="App container">
      <Navbar />
      <Main />
      <Card />
    </div>
  );
};
export default App;
