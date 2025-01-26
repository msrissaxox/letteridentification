//Passes test!

"use client";
import React, { useState } from "react";
import Page, { onGenerateNewLetter } from "../page";

export default function NewLetterButton ({ onClick }){ 

return(
<div>
<div className="flex justify-center py-6">
  <button onClick={onClick} className="bg-gray-200 hover:bg-gray-300 text-black font-bold text-lg sm:text-xl py-2 px-4 rounded">
  New Letter</button>

</div>
</div>
)}


