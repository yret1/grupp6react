/* eslint-disable react/prop-types */

import "../styles/Card.css"

const Card = ({variant}) => {
  return (
<section className={`card ${variant}`}>

  <article className="all-icons">
    <article className="chip">
      <img className="icon" src="/wifi.png"></img>
      <img className="icon" src="/chip.png"></img>
    </article>
    <article className={`icon-company ${variant}`}></article>
  </article>

  <article className="card-info">

  </article>
  <p className="card-number">1234 5678 9101 1123</p>

  <article className="card-details">
    <article>
        <p className="card-small-text">CARDHOLDER NAME</p>
        <p className="card-text">John Doe</p>
      </article>
      <article>
        <p className="card-small-text">VALID THRU</p>
        <p className="card-text">12/24</p>
      </article>
    </article>
  </section>

  )
}

export default Card