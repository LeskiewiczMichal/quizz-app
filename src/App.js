import './App.css';
import StartScreen from './components/StartScreen';
import QuizzScreen from './components/QuizScreen';
import { useState, useEffect } from 'react';

function App() {
  const [playGame, setPlayGame] = useState(false)
  const [questions, setQuestions] = useState([])

  // fetch questions
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(response => response.json())
      .then(data => setQuestions(data.results))
  }, [])


  function changeGameStatus() {
    setPlayGame(prevPlayGame => !prevPlayGame)
  }

  return (
    <div className="app--container">
      {playGame ? <QuizzScreen questions={questions}/> : <StartScreen changeGameStatus={changeGameStatus}/>}
    </div>
  );
}

export default App;
