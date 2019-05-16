import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    }) 
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.makeReservation(this.state)
  }


  render(){
    const {name, date, time, number} = this.state
    return(
      <form className="form" onSubmit={(e) =>this.onSubmit(e)}>
        <input
          onChange={(e) => this.onChange(e)}
          type="text"
          placeholer="name"
          name="name"
          value={name}
        />
        <input
          onChange={(e) => this.onChange(e)}
          type="text"
          placeholer="date"
          name="date"
          value={date}
        />
        <input
          onChange={(e) => this.onChange(e)}
          type="text"
          placeholer="time"
          name="time"
          value={time}
        />
        <input
          onChange={(e) => this.onChange()}
          type="text"
          placeholer="number of people"
          name="number"
          value={number}
        />
        <button onSubmit={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}

export default Form