//Passes test!

"use client";
import React, { useState } from "react"


export default function MainLetter( { letter }) {
  
    
    return (
  
        <div>
        <header className="text-center text-4xl sm:text-5xl font-semibold py-4 sm:py-6">
           { letter || '-' }
        </header>
        </div>
    );
}

