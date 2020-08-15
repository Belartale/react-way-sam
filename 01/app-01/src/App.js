import React from "react";
import logo from "./logo.svg";
import "./App.css";
//jsx
import Header from "./js/header.js";
import Main from "./js/main.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <main>
      <p>foter111</p>
    </main>
  );
};

export default App;
