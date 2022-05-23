import React from 'react';

const Button = (props) => {
    return (
        <>
            <button onClick={props.clic} className={`btn ${props.btnType}`}>{props.children}</button>
        </>
    )
}

export default Button
