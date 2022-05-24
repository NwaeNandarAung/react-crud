import React, { Component } from 'react'
import Button from "../../../stateless/button/Button"

class FormToEdit extends Component {
    state = {
        brand : this.props.brand,
        color : this.props.color,
        price : this.props.price,
    }

    updateValidationHandler = () => {
        this.props.updateCar(this.props.id, this.state.brand, this.state.color, this.state.price)
    }

    render() {
        return (
            <>
                <tr>
                    <td><input className="form-control" type="text" value={this.state.brand}
                    onChange={(event) =>this.setState({brand: event.target.value})}/></td>
                     <td><input className="form-control" type="text" value={this.state.color}
                    onChange={(event) =>this.setState({color: event.target.value})}/></td>
                     <td><input className="form-control" type="number" value={this.state.price}
                    onChange={(event) =>this.setState({price: event.target.value})}/></td>
                    <td><Button btnType="btn-warning" clic={this.updateValidationHandler}>Update</Button></td>
                </tr>
            </>
        )
    }
}

export default FormToEdit
