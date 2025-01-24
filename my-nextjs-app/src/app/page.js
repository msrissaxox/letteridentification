"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./components/Scoreboard";
import './globals.css'
import MainLetter from "./components/MainLetter";
import Options from "./components/Options";
import NewLetterButton from "./components/NewLetterButton";

const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// let randomLetter;


//generates all letters
function generateFourLetters(currentLetter){
  //generate the other four letters
   let newArray = [currentLetter];
  while (newArray.length < 4){
    const randomLetterFinder = Math.floor(Math.random() * allLetters.length);
    let randomLetter = allLetters[randomLetterFinder];
   // Avoid duplicates
    if (!newArray.includes(randomLetter)) {
      newArray.push(randomLetter);
    }
    
  }
  //Shuffles array so that the right letter isn't always first
  return newArray.sort(() => Math.random() - 0.5);
  }



  

  // function checkButton (event){
  //   console.log("letter was clicked");
  //   console.log(event);
  //   const letter = (event.target.innerHTML);
  //   if (letter === randomLetter){
  //     console.log("right")
  //   } else {
  //     console.log("wrong");
      
  //   }
  // }




export default function Page() {
  //setCurrentLetter is an synchronous state update method
  const [currentLetter, setCurrentLetter] = useState("");

  const [fourLetters, setFourLetters] = useState([]);

  //generate the new letter
   function onGenerateNewLetter() {
  
    const randomLetterFinder = Math.floor(Math.random() * allLetters.length);
    const randomLetter = allLetters[randomLetterFinder];
    console.log("new letter button was clicked");
    console.log(`RANDOM LETTER: ${randomLetter}`);
    setCurrentLetter(randomLetter); //asynchronous state update

    //now, letter is going to be the new random letter

 // Generate options using the new random letter
 //This line below runs before the code above is executed, so that's why I used randomLetter here

   const options = generateFourLetters(randomLetter);
   setFourLetters(options);
   }

    function checkButton (event){
    console.log("letter was clicked");
    console.log(event);
    const letter = (event.target.innerHTML);
    console.log(letter);

    if (letter === currentLetter){
      console.log("right")
      
    } else {
      console.log("wrong");
      
    }
  }

  return (
<div className="md:container md:mx-auto">
  <div>
    < Scoreboard />
    < MainLetter letter={currentLetter} />
    <Options correct={currentLetter} four={fourLetters} onClick={checkButton}/>
    <NewLetterButton onClick={onGenerateNewLetter} />
  </div>
  </div>

  )
}



