import Question from './Question';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function QuizzScreen(props) {
  const [gameEnded, setGameEnded] = useState(false)

  // get answers and make them into object containing various needed information
  // then shuffle wrong answers with the right one
  function getAnswers(question) {
    const incorrectAnswers = question.incorrect_answers.map((answer) => {
      return {
        text: answer,
        isRight: false,
        isChosen: false,
        id: nanoid(),
      };
    });

    const allAnswers = [
      ...incorrectAnswers,
      {
        text: question.correct_answer,
        isRight: true,
        isChosen: false,
        id: nanoid(),
      },
    ];

    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
    return shuffledAnswers;
  }

  // get answers for every question
  const [answersOne, setAnswersOne] = useState(getAnswers(props.questions[0]));
  const [answersTwo, setAnswersTwo] = useState(getAnswers(props.questions[1]));
  const [answersThree, setAnswersThree] = useState(
    getAnswers(props.questions[2])
  );
  const [answersFour, setAnswersFour] = useState(
    getAnswers(props.questions[3])
  );
  const [answersFive, setAnswersFive] = useState(
    getAnswers(props.questions[4])
  );

  // put the answers and setter into arrays so they are easily accesible
  const answerArr = [
    answersOne,
    answersTwo,
    answersThree,
    answersFour,
    answersFive,
  ];
  const setsArr = [
    setAnswersOne,
    setAnswersTwo,
    setAnswersThree,
    setAnswersFour,
    setAnswersFive,
  ];

  // make questions array for rendering (used for loop to access different answers on every loop)
  const questions = [];
  for (let i = 0; i < props.questions.length; i++) {
    const question = props.questions[i];

    questions.push(
      <Question
        key={question.question}
        text={question.question}
        answers={answerArr[i]}
        setAnswers={setsArr[i]}
        gameEnded={gameEnded}
      />
    );
  }

  function checkAnswers() {
    setGameEnded(prevGameEnded => !prevGameEnded)
  }

  function playAgain() {
    props.changeGameStatus()
    props.changeFetchQuestions()
  }

  return (
    <div className="quizzscreen--container">
      {questions}
      <div className="quizzscreen--button-container">
        <button onClick={!gameEnded ? checkAnswers : playAgain}>{!gameEnded ? 'Check answers' : 'Play Again'}</button>
      </div>
    </div>
  );
}
