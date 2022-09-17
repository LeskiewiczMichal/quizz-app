export default function StartScreen(props) {
  return (
    <div className="startscreen--container">
      <h2 className="startscreen--heading">Quizzical</h2>
      <span className="startscreen--text">Test your knowledge</span>
      <button className="startscreen--button" onClick={props.changeGameStatus}>
        Start quiz
      </button>
    </div>
  );
}
