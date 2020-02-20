import React from "react";
import "./App.css";
import Display from "./components/display.js";
import DrumPad from "./components/drumPad.js";
import ReactFCCtest from "react-fcctest";

function App() {
  return (
    <div id="drum-machine">
      <Display idText="display" />
      <div id="pad-div">
        <DrumPad
          idText="q-pad"
          keyText="Q"
          keyCode="113"
          keyCodeCaps="81"
          descriptionText="drum1"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
        <DrumPad
          idText="w-pad"
          keyText="W"
          keyCode="119"
          keyCodeCaps="87"
          descriptionText="drum2"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        />
        <DrumPad
          idText="e-pad"
          keyText="E"
          keyCode="101"
          keyCodeCaps="69"
          descriptionText="drum3"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        />
        <DrumPad
          idText="a-pad"
          keyText="A"
          keyCode="97"
          keyCodeCaps="65"
          descriptionText="drum4"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        />
        <DrumPad
          idText="s-pad"
          keyText="S"
          keyCode="115"
          keyCodeCaps="83"
          descriptionText="drum5"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        />
        <DrumPad
          idText="d-pad"
          keyText="D"
          keyCode="100"
          keyCodeCaps="68"
          descriptionText="drum6"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        />
        <DrumPad
          idText="z-pad"
          keyText="Z"
          keyCode="122"
          keyCodeCaps="90"
          descriptionText="drum7"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        />
        <DrumPad
          idText="x-pad"
          keyText="X"
          keyCode="120"
          keyCodeCaps="88"
          descriptionText="drum8"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        />
        <DrumPad
          idText="c-pad"
          keyText="C"
          keyCode="99"
          keyCodeCaps="67"
          descriptionText="drum9"
          audioFile="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        />
        <ReactFCCtest />
      </div>
    </div>
  );
}

export default App;
