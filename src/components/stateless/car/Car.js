import React from 'react';
import Button from '../button/Button.js'
import Zoom from 'react-reveal/Zoom'

const Car = (props) => {
    return (
        <Zoom>
            <tr>
                <td>{props.brand}</td>
                <td>{props.color}</td>
                <td>{props.price+ " $"} </td>
                <td><Button btnType="btn-primary" clic={props.clicEdit}>Edit</Button></td>
                <td><Button btnType="btn-danger" clic={props.clicDel}>Delete</Button></td>
            </tr>
        </Zoom>
    )
}

export default Car
