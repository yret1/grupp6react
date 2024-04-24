import React from 'react'
import '../styles/card.css'

const Card = () => {
  return (
    <div className="card-component">
      <div className="card__header">
        <div className="card__chip"><img src='./src/assets/Chip.svg' alt="chip"></img></div>
        <div className ="card__vendor"><img src='./src/assets/Ninja.svg' alt="bitcoin logo"></img></div>
        
      </div>
    <div className ="card__number">
      <p className="card__font-large">xxxx xxxx xxxx xxxx</p>
    </div>
    <div className="card__bottom">
      <div className="card__name" >
        <p className="card__font-small">cardholder name</p>
        <p className="card__font-medium">FIRSTNAME LASTNAME</p>
      </div>
      <div className="card__validity">
        <p className="card__font-small">VALID THRU</p>
        <p className="card__font-medium">MM/YY</p>
      </div>
    </div>
  </div>
  )
}

export default Card