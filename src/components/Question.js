import Answer from './Answer';
import { useState } from 'react';

export default function Question(props) {
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
