import React from "react";
import FAQCard from "./components/FAQCard/FAQCard";
import "./stylesheets/index.css";
import AtBox from "./images/illustration-box-desktop.svg";

function App() {
  console.log("hello from App!");
  return (
    <div className="App">
      <FAQCard />
      <img src={AtBox} className="at-box" />
    </div>
  );
}

export default App;
