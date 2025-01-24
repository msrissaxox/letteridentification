"use client";
import React, { useState } from "react"


export default function MainLetter( { letter }) {
  
    
    return (
  
        <div>
        <header className="text-center text-5xl font-semibold py-6">
           { letter || '-' }
        </header>
        </div>
    );
}

