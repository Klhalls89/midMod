import React from 'react';

const Card = (props) => {

  const { name, date, time, number, id } = props
 
  return(
    <div className='resy-card'>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>number of guests {number}</p>
    </div>
  )
}

export default Card