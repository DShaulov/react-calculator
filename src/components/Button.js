function Button(props) {
    const type = props.type
    const clickHandler = props.clickHandler
    return(
        <button className="calculator__button" onClick={clickHandler}>{type}</button>
    )
}

export default Button;