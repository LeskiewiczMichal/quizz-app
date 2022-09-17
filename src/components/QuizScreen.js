import Question from "./Question"

export default function QuizzScreen() {
    return (
        <div className="quizzscreen--container">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <div class="quizzscreen--button-container">
                <button>Check answers</button>
            </div>
        </div>
    )
}