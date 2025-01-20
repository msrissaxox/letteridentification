import React from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./components/Scoreboard";
import './globals.css'
import MainLetter from "./components/MainLetter";
import Options from "./components/Options";
import NewLetterButton from "./components/NewLetterButton";

export default function Page() {
  return (
<div className="md:container md:mx-auto">
  <div>
    < Scoreboard />
    < MainLetter />
    <Options />
    <NewLetterButton />
  </div>
  </div>

 
 
  );
}


