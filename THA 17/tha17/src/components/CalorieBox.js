import "../styles/CalorieBox.css"

function CalorieBox(props) {
    return (
    <div className="box">
        <div>{props.title}</div>
        <div>You have consumed <strong>{props.calories}</strong> calories today.</div>
    </div>
    );
}
export default CalorieBox