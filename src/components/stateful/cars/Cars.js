import React, { Component } from 'react';
import Car from "../../stateless/car/Car.js";
import FormAdd from "../form/FormAdd"

class Cars extends Component {
  state = {
    mycars: [
      { id: 1, brand: "Toyota", color: "Black", price: 50000 },
      { id: 2, brand: "Mercdes", color: "Green", price: 30000 },
      { id: 3, brand: "Mazda", color: "Red", price: 20000 }
    ],
    lastId: 3
  }
  deleteCarHandler = (id) => {
    const index = this.state.mycars.findIndex((car) => {
      return car.id === id;
    })
    const newCars = [...this.state.mycars];

    newCars.splice(index, 1);

    this.setState({
      mycars: newCars
    })
  }

  addCarHandler = (brand, color, price) => {
    const newCar = {
      id: this.state.lastId + 1,
      brand,
      color,
      price
    }

    const newCars = [...this.state.mycars];

    newCars.push(newCar);

    this.setState((prevState) => ({
      mycars: newCars,
      lastId: prevState.lastId + 1
    }))

    this.props.closeForm()
  }

  editCarHandler = () => {
    console.log("You have clicked edit button")
  }

  render() {
    return (
      <>
        <table className="table text-center">
          <thead>
            <tr className="table-dark">
              <th>Brand</th>
              <th>Color</th>
              <th>Price</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.mycars.map((car) => {
                return (
                  <Car brand={car.brand} color={car.color} price={car.price}
                    key={car.id}
                    clicDel={() => this.deleteCarHandler(car.id)}
                    clicEdit={this.editCarHandler} />
                )
              })
            }

          </tbody>
        </table>
        {
          this.props.isFormOpen && <FormAdd addCar={this.addCarHandler} />
        }
      </>
    )
  }
}

export default Cars
