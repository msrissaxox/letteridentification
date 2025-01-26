//passes message test!

import React from "react"
import ReactDOM from "react-dom";

export default function Message({message}) {
    return (
        <header className="text-center text-2xl sm:text-4xl font-semibold py-4 sm:py-8">
           <h1>{message}</h1>
        </header>
    );
}
