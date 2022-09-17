export default function Answer(props)  {
    const text = props.text.replace(/(&quot\;)/g,"\"").replace(/&amp;/g, "&").replace(/&Uuml;/g, "u").replace(/&#039;/g, "'")
    return (
        <label className="answer--container">
            <span className="answer--checkmark">
                <input type="radio" />{text}
            </span>
        </label>
    )
}