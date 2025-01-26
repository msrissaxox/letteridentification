"use client";
import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import './globals.css'
import MainLetter from "./components/MainLetter";
import Options from "./components/Options";
import NewLetterButton from "./components/NewLetterButton";
import Message from "./components/Message";

const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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

export default function Page() {
  //setCurrentLetter is an synchronous state update method
  const [currentLetter, setCurrentLetter] = useState("");
  const [fourLetters, setFourLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameActive, setGameActive] = useState(false)



  //generate the new letter
   function onGenerateNewLetter() {
      setMessage("");
    const randomLetterFinder = Math.floor(Math.random() * allLetters.length);
    const randomLetter = allLetters[randomLetterFinder];
    console.log("new letter button was clicked");
    console.log(`RANDOM LETTER: ${randomLetter}`);
    setCurrentLetter(randomLetter); //asynchronous state update
  //Now, letter is going to be the new random letter
  //Generate options using the new random letter
  //This line below runs before the code above is executed, so that's why I used randomLetter here
   const options = generateFourLetters(randomLetter);
   setFourLetters(options);
   setGameActive(true);
 
   }

    function checkButton (event){
      if (!gameActive) return; // Prevent interaction if the game is inactive

    const letter = (event.target.innerHTML);   
    if (letter === currentLetter){
      setMessage("Correct! 🎉")
      setScore(prevScore => (prevScore + 1));
      setGameActive(false); // Disable further clicks until new letters are generated
         // Use setTimeout to call onGenerateNewLetter after 1 second
    setTimeout(onGenerateNewLetter, 1500);
//add to the score here?
//Render new letters after 1 second
    } else {
      setMessage("Try Again!👎🏼")    
 //FIX THIS CODE//
 setHighScore((prevHighScore) => Math.max(prevHighScore, score)); // Update high score

        // setHighScore(score);
        
      
      // setHighScore(score);
      setScore(0)
    };
  }

  return (
    // <div className="relative h-screen bg-gradient-to-b from-blue-200 to-white">
      <div className="relative min-h-screen bg-gradient-to-b from-blue-200 to-white flex flex-col items-center">
      {/* <div className="md:container md:mx-auto"> */}
      <div className="w-full max-w-lg p-4">
        <Scoreboard score={score} highScore={highScore}/>
        <MainLetter letter={currentLetter} />
        <Options correct={currentLetter} four={fourLetters} onClick={checkButton}/>
        <NewLetterButton onClick={onGenerateNewLetter} />
        <Message message={message}/>
      </div>
    </div>
  )
};