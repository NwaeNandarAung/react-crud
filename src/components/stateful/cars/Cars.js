import React, { Component } from 'react';
import Car from '../../stateless/car/Car.js';
import FormAdd from '../form/FormAdd'
import FormToEdit from '../form/formtoedit/FormToEdit'
import Fade from 'react-reveal/Fade'

class Cars extends Component {
  state = {
    mycars: localStorage.getItem("newcars") ? JSON.parse(localStorage.getItem("newcars")) : [],
    lastId: localStorage.getItem("lastid") ? JSON.parse(localStorage.getItem("lastid")) : 0,
    isDataEditing: 0,
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
    localStorage.setItem("newcars", JSON.stringify(newCars))

  }

  addCarHandler = (brand, color, price) => {
    const newCar = {
      id: this.state.lastId + 1,
      brand,
      color,
      price
    }

    const lastId = this.state.lastId + 1;
    const newCars = [...this.state.mycars];
    newCars.push(newCar);

    this.setState((prevState) => ({
      mycars: newCars,
      lastId: prevState.lastId + 1
    }))

    localStorage.setItem("newcars", JSON.stringify(newCars))
    localStorage.setItem("lastid", JSON.stringify(lastId))
    this.props.closeForm()
  }

  updateCarHandler = (id, brand, color, price) => {
    const index = this.state.mycars.findIndex(index => {
      return index.id === id;
    })

    const updateCar = {
      id,
      brand,
      color,
      price
    }

    const newCars = [...this.state.mycars]
    newCars[index] = updateCar

    this.setState({
      mycars: newCars,
      isDataEditing: 0
    })
    localStorage.setItem("newcars", JSON.stringify(newCars))

  }

  render() {
    return (
      <>
        <Fade>
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
                  if (this.state.isDataEditing !== car.id) {
                    return (
                      <Car brand={car.brand} color={car.color} price={car.price}
                        key={car.id}
                        clicDel={() => this.deleteCarHandler(car.id)}
                        clicEdit={() => this.setState({ isDataEditing: car.id })} />
                    )
                  } else {
                    return (
                      <FormToEdit
                        key={car.id}
                        id={car.id} brand={car.brand} color={car.color} price={car.price}
                        updateCar={this.updateCarHandler}
                      />
                    )
                  }

                })
              }
            </tbody>
          </table>
        </Fade>
        {
          this.props.isFormOpen && <FormAdd addCar={this.addCarHandler} />
        }
      </>
    )
  }
}

export default Cars
