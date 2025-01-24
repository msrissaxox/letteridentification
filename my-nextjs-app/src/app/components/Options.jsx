import React from "react";
import ReactDOM from "react-dom";

export default function Options ({ correct, four, onClick}){

    return(
<div className="flex justify-center items-center h-full">
  <div className="grid grid-cols-2 gap-4 max-w-sm w-full">
  
 {four.map((letter, index) => (
  <button 
key={index}
  onClick={onClick}
  className="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 text-2xl rounded">
    {letter}
  </button>
))}
</div>
</div>
)
};

