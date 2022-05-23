import React, { Component } from 'react';
import Heading from './components/stateless/heading/Heading'
import Cars from './components/stateful/cars/Cars'
import Button from './components/stateless/button/Button'

class App extends Component {
  state = {
    isFormOpen: false
  }

  addCarHandler = () => {
    this.setState((prevState) => ({
      isFormOpen: !prevState.isFormOpen
    }))
  }

  render() {
    return (
      <div className="container">
        <Heading>List of Cars</Heading>
        <Cars closeForm = {this.addCarHandler} isFormOpen = {this.state.isFormOpen}/>
        <Button clic = {this.addCarHandler}
        btnType="btn-success w-100">
          {this.state.isFormOpen ? "Close" : "Add"}
        </Button>
      </div>
    );
  }
}

export default App;
