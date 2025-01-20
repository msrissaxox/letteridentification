import React from "react";
import ReactDOM from "react-dom";

export default function Options () { 
    return(
<div className="grid grid-cols-2 gap-4 place-content-stretch h-48">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">A</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">B</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">C</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">D</button>
</div>
)}