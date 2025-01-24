"use client";
import React, { useState } from "react";
import Page, { onGenerateNewLetter } from "../page";

export default function NewLetterButton ({ onClick }){ 

return(
<div>
<div className="place-self-center h-48 py-10">

  <button onClick={onClick} className="bg-gray-200 hover:bg-gray-300 text-black font-bold text-xl py-2 px-4 rounded">
  New Letter</button>

</div>
</div>
)}


