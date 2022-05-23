import React from 'react';
import Button from "../button/Button.js"

const Car = (props) => {
    return (
        <>
            <tr>
                <td>{props.brand}</td>
                <td>{props.color}</td>
                <td>{props.price+ " $"} </td>
                <td><Button btnType="btn-warning" clic={props.clicEdit}>Edit</Button></td>
                <td><Button btnType="btn-danger" clic={props.clicDel}>Delete</Button></td>
            </tr>
        </>
    )
}

export default Car
