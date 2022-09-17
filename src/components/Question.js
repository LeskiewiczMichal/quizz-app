import Answer from './Answer';
import { useState } from 'react';

export default function Question(props) {
  // THIS WORKED
  //   // needed to remove syntax $quot in fetched questions
  //   const question = props.data.question
  //     .replace(/(&quot\;)/g, '"')
  //     .replace(/&amp;/g, '&')
  //     .replace(/&Uuml;/g, 'u')
  //     .replace(/&#039;/g, "'");

  //   // turn text answers into object containing text and information whether the answer is right or not
  //   const incorrectAnswers = props.data.incorrect_answers.map((answer) => {
  //     return {
  //       text: answer,
  //       isRight: false,
  //       isChosen: false,
  //     };
  //   });
  //   const allAnswers = [
  //     ...incorrectAnswers,
  //     { text: props.data.correct_answer, isRight: true, isChosen: false },
  //   ];
  //   const [shuffledAnswers, setShuffledAnswers] = useState(allAnswers.sort(
  //     () => Math.random() - 0.5
  //   ));

    // function chooseAnswer() {
    //   props.setAnswers((prevAnswers) => {
    //     const newAnswers = prevAnswers.map((answer) => {
    //       if (answer.text === props.text) {
    //         return { ...answer, isChosen: true };
    //       } else {
    //         return { ...answer, isChosen: false };
    //       }
    //     });
    //     return newAnswers
    //   });
    // }

  const renderAnswers = props.answers.map((answer) => {
    return (
      <Answer
        key={answer.text}
        text={answer.text}
        isRight={answer.isRight}
        isChosen={answer.isChosen}
        setAnswers={props.setAnswers}
        id={answer.id}
        gameEnded={props.gameEnded}
      />
    );
  });

  return (
    <div className="question--container">
      <h5 className="question--header">
        {props.text
          .replace(/(&quot\;)/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&Uuml;/g, 'u')
          .replace(/&#039;/g, "'")}
      </h5>
      <div className="question--answers-container">{renderAnswers}</div>
    </div>
  );
}
