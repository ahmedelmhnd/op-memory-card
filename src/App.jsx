import "./App.css";
import Header from "./components/header";
import Cards from "./components/cards";
import { useState } from "react";

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) {
    setHighScore(score);
  }

  function handleScore() {
    setScore(score + 1); 
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <Cards handleScoreIncrease={handleScore} handleScoreReset={resetScore}></Cards>
    </>
  );
}

export default App;
