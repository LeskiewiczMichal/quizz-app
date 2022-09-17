import Question from './Question';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function QuizzScreen(props) {
  const [gameEnded, setGameEnded] = useState(false)
  // needed to remove syntax $quot in fetched questions
  //   const question = props.questions.question
  //     .replace(/(&quot\;)/g, '"')
  //     .replace(/&amp;/g, '&')
  //     .replace(/&Uuml;/g, 'u')
  //     .replace(/&#039;/g, "'")
  // turn text answers into object containing text and information whether the answer is right or not
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

  // function chooseAnswer(text) {
  //   setShuffledAnswers((prevAnswers) => {
  //     const newAnswers = prevAnswers.map((answer) => {
  //       if (answer.text === text) {
  //         return { ...answer, isChosen: true };
  //       } else {
  //         return { ...answer, isChosen: false };
  //       }
  //     });
  //     return newAnswers;
  //   });
  // }

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

  // WORKED
  // = props.questions.map((question) => {
  //   return (
  //     <Question
  //       key={question.question}
  //       text={question.question}
  //       answers={answersOne}
  //       setAnswers={setAnswersOne}
  // chooseAnswer={chooseAnswer}
  // question={question.question
  //   .replace(/(&quot\;)/g, '"')
  //   .replace(/&amp;/g, '&')
  //   .replace(/&Uuml;/g, 'u')
  //   .replace(/&#039;/g, "'")}
  //     />
  //   );
  // });

  return (
    <div className="quizzscreen--container">
      {questions}
      <div className="quizzscreen--button-container">
        <button onClick={checkAnswers}>{!gameEnded ? 'Check answers' : 'Play Again'}</button>
      </div>
    </div>
  );
}
