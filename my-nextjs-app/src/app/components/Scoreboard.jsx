//Passes test!

import React from "react"
import ReactDOM from "react-dom";

export default function Scoreboard({score, highScore, errorClass}) {
    return (
        <header className="text-center text-3xl sm:text-5xl font-semibold py-6 sm:py-10">
           <h1>Score: {score} </h1>
           <h1>High Score: {highScore}</h1>
        </header>
    );
}
