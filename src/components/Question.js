import Answer from "./Answer"

export default function Question(props) {
    // needed to remove syntax $quot in fetched questions
    const question = props.data.question.replace(/(&quot\;)/g,"\"").replace(/&amp;/g, "&").replace(/&Uuml;/g, "u").replace(/&#039;/g, "'")

    const incorrectAnswers = props.data.incorrect_answers;
    const allAnswers  = [...incorrectAnswers, props.data.correct_answer]
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5)

    const renderAnswers = shuffledAnswers.map((answer) => {
        return <Answer key={answer} text={answer}/>
    })
    return (
        <div className="question--container">
            <h5 className="question--header">{question}</h5>
            <div className="question--answers-container">
                {renderAnswers}                                                          
            </div>
        </div>
    )
}