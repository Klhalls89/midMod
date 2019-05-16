import React from 'react';
import "./Card.css"

const Card = (props) => {

  const { name, date, time, number, id } = props
 
  return(
    <div className='card'>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>number of guests {number}</p>
      <button className="card-btn">cancel</button>
    </div>
  )
}

export default Card