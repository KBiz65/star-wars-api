import React from "react";
import "./App.css";
import Header from "./components/Header";
import InputContent from "./components/InputContent";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <div className="App">
      <Header />
      <InputContent />
      <DisplayData />
    </div>
  );
}

export default App;
