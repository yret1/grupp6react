/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button"
import CardFormComponent from "../components/CardFormComponent"

import "../styles/NewCard.css"
import Card from "../components/Card";


const NewCard = ({setCards}) => {





  const [name, setName] = useState("FIRSTNAME LASTNAME");
  const [number, setNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cvv, setCvv] = useState("XXX");
  const [validity, setValidity] = useState("MM/YY");
  const [vendor, setVendor] = useState("");



  const updateCards = () => {

    setCards((prev) => {

      return [...prev, {
        name: name,
        number: number,
        cvv: cvv,
        validity: validity,
        vendor: vendor
      }]

    })

  }






  return (
    <section className="newcardwrapper">
      <Card name={name} number={number} cvv={cvv} validity={validity} vendor={vendor} />
      <CardFormComponent setName={setName} setNumber={setNumber} setCvv={setCvv} setValidity={setValidity} setVendor={setVendor} />
      <Button updateCards={updateCards} newcard={false}/>
    </section>
  )
}

export default NewCard