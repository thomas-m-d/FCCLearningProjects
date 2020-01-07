import React from "react";
import createChart from "./d3Chart.js";
import ReactFCCtest from "react-fcctest";
import "./App.css";

createChart();

function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <div id="chartDiv">
        <h1 id="title">Global Land-Surface Temperatures Over Time</h1>
        <h3 id="description">Description Text...</h3>
        <div id="chartAreaDiv">
          <p id="debugP"></p>
          <svg id="chartArea"></svg>
          <svg id="legend"></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
