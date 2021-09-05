import { useState } from 'react';

function Display(props) {
    const [display, setDisplay] = useState(0);
    return (
        <div className="calculator__display">{display}</div>
    )
}

export default Display;