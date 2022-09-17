import Question from "./Question"

export default function QuizzScreen(props) {
    const questions = props.questions.map((question) => {
        console.log(question)
        return <Question key={question.question} data={question} />
    })

    return (
        <div className="quizzscreen--container">
            {questions}
            <div className="quizzscreen--button-container">
                <button>Check answers</button>
            </div>
        </div>
    )
}