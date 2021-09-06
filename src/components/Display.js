import './Display.css';

function Display(props) {
    return (
        <div className="calculator__display">{props.calculation}</div>
    )
}

export default Display;