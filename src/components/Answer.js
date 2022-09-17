export default function Answer(props)  {
    const text = props.text.replace(/(&quot\;)/g,"\"").replace(/&amp;/g, "&").replace(/&Uuml;/g, "u").replace(/&#039;/g, "'")

    // makes the clicked answer isChosen value true
    function chooseAnswer() {
        props.setAnswers((prevAnswers) => {
          const newAnswers = prevAnswers.map((answer) => {
            if (answer.id === props.id) {
              return { ...answer, isChosen: true };
            } else {
              return { ...answer, isChosen: false };
            }
          });
          return newAnswers
        });
      }

    //   changes background color depending on state of the game
      const style = {
        backgroundColor: (function() {
            if (props.gameEnded && props.isRight) {
                return 'green'
            } else if (props.gameEnded && props.isChosen) {
                return 'red'
            } else if (props.isChosen) {
                return '#D6DBF5'
            } else {
                return 'transparent'
            }
        }())
      }

    return (
        <label className="answer--container">
            <span className="answer--checkmark" style={style} onClick={props.gameEnded ? null : chooseAnswer}>
                <input type="radio" />{text}
            </span>
        </label>
    )
}