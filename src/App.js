import './App.css';
import StartScreen from './components/StartScreen';
import QuizzScreen from './components/QuizScreen';
import { useState, useEffect } from 'react';

function App() {
  const [playGame, setPlayGame] = useState(false);
  const [questions, setQuestions] = useState([]);
  // needed to fetch only on replay and not when the game renders quizscreen on playGame
  const [fetchQuestions, setFetchQuestions] = useState(false);

  // fetch questions
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, [fetchQuestions]);

  function changeFetchQuestions() {
    setFetchQuestions((prevFetch) => !prevFetch);
  }
  function changeGameStatus() {
    setPlayGame((prevPlayGame) => !prevPlayGame);
  }

  return (
    <div className="app--container">
      {playGame ? (
        <QuizzScreen
          questions={questions}
          changeGameStatus={changeGameStatus}
          changeFetchQuestions={changeFetchQuestions}
        />
      ) : (
        <StartScreen changeGameStatus={changeGameStatus} />
      )}
    </div>
  );
}

export default App;
