import React from "react"
import ReactDOM from "react-dom";

export default function Scoreboard({message}) {
    return (
        <header className="text-center text-5xl font-semibold py-10">
           <h1>{message}</h1>

        </header>
    );
}
