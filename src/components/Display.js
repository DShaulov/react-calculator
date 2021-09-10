import './Display.css';

function Display(props) {
    return (
        <div className="calculator__display">
            <h4>{props.calculation}</h4>
        </div>
    )
}

export default Display;