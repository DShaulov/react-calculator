import './Button.css';

function Button(props) {
    const type = props.type
    const clickHandler = props.clickHandler
    return(
        <button className={props.className} onClick={() => clickHandler(type)}>{type}</button>
    )
}

export default Button;