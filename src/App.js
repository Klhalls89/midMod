import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations : []
    }
  }

  componentDidMount(){
    this.getReservations()
  }

  getReservations(){
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(response => this.resetState(response))
      .catch(error => console.log(error))
      }

  resetState(reservations) {
    this.setState({
      reservations
    })
  }

  render() {
    const {reservations} = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <CardContainer reservations={reservations} />
      </div>
    )
  }
}

export default App;
