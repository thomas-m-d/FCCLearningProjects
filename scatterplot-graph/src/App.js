import React from "react";
import ReactFCCtest from "react-fcctest";
import createChart from "./d3Chart.js";
import "./App.css";

createChart();

function App() {
  return (
    <div className="App">
      <ReactFCCtest />

      <div id="chartDiv">
        <h1 id="title">
          Doping Allegations against Fastest Cyclists up Alpe d'Huez
        </h1>
        <div id="chartAreaDiv">
          <p id="debugP"></p>
          <svg id="chartArea"></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
