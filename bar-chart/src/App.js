import React from "react";
import ReactFCCtest from "react-fcctest";
import "./App.css";
import createChart from "./d3chart.js";

createChart();

function App() {
  return (
    <div className="App">
      <ReactFCCtest />

      <div id="chartDiv">
        <h1 id="title">United States' GDP Over Time</h1>
        <div id="chartAreaDiv">
          <p id="chartP"></p>
          <svg id="chartArea"></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
