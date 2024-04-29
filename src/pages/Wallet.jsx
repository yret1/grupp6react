/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button"
import Card from "../components/Card"
import CardStack from "../components/CardStack"
import "../styles/Wallet.css"
const Wallet = ({cards}) => {

  const [active, setActive] = useState({});

  return (
    <section className="wallet">

{active.number ?
  <Card name={active.name} number={active.number} validity={active.validity} vendor={active.vendor} /> 
: 
  <section className="cardplaceholder">
    <h1 className="cardholdtext">Please Add or Select A Card</h1>
  </section>
}

      <CardStack setActive={setActive} cards={cards}/>
      <Button newcard={true}/>

    </section>
  )
}

export default Wallet