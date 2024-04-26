/* eslint-disable react/prop-types */

import "../styles/Card.css"

const Card = (props) => {

  const { variant, name, number, cvv, validity, vendor } = props;



  return (
<section className={`card ${vendor}`}>

  <article className="all-icons">
    <article className="chip">
      <img className="icon" src="/wifi.png"></img>
      <img className="icon" src="/chip.png"></img>
    </article>
    <article className={`icon-company ${vendor}`}></article>
  </article>

  <article className="card-info">

  </article>
  <p className="card-number">{number}</p>

  <article className="card-details">
    <article>
        <p className="card-small-text">CARDHOLDER NAME</p>
        <p className="card-text">{name}</p>
      </article>
      <article>
        <p className="card-small-text">VALID THRU</p>
        <p className="card-text">{validity}</p>
      </article>
    </article>
  </section>

  )
}

export default Card