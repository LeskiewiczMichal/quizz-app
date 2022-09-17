import Answer from "./Answer"

export default function Question() {
    return (
        <div className="question--container">
            <h5 className="question--header">How would you say goodbye in Spanish?</h5>
            <div className="question--answers-container">
                <Answer />     
                <Answer />                               
                <Answer />                               
                <Answer />                                                            
            </div>
        </div>
    )
}