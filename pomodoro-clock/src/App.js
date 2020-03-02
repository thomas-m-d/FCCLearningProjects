import React from "react";
import "./App.css";
import ReactFCCtest from "react-fcctest";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";

function App() {
  return (
    <div id="clock">
      <Break />
      <Session />
      <Timer />
      <ReactFCCtest />
    </div>
  );
}

export default App;
