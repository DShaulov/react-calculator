function Button(props) {
    const type = props.type
    return(
        <button className="calculator__button">{type}</button>
    )
}

export default Button;