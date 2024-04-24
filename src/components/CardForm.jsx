import React from 'react'
import '../styles/cardForm.css'

const CardForm = () => {
  return (
    <section className="cardForm">
     <form >
        <div className="cardForm__inputContainer">
          <label htmlFor="cardNumber" className="cardForm__label">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            //value={cardNumber}
            //onChange={handleCardNumberChange}
            className="cardForm__input"
            placeholder=""
          />
        </div>
        <div className="cardForm__inputContainer">
          <label htmlFor="cardNumber" className="cardForm__label">Cardholder name:</label>
          <input
            type="text"
            id="cardNumber"
            //value={cardHolderName}
            //onChange={handleCardHolderNameChange}
            className="cardForm__input"
            placeholder=""
          />            
        </div>
        <div className="cardForm__row">
        <div  className="cardForm__inputContainer">
          <label htmlFor="cardNumber" className="cardForm__label">Valid Thru:</label>
          <input
            type="text"
            id="cardNumber"
            //value={cardNumber}
            //onChange={handleCardNumberChange}
            className="cardForm__input"
            placeholder=""
          />
        </div>
        <div  className="cardForm__inputContainer">
          <label htmlFor="cardNumber" className="cardForm__label">CCV</label>
          <input
            type="text"
            id="cardNumber"
            //value={cardHolderName}
            //onChange={handleCardHolderNameChange}
            className="cardForm__input"
            placeholder=""
          />            
        </div>

        </div>
        <div className="cardForm__inputContainer">
          <label htmlFor="vendor" className="cardForm__label">Vendor:</label>
          <select id="vendor" className="cardForm__input">
            <option value="vendor1">Bitcoin INC</option>
            <option value="vendor2">Ninja Bank</option>
            <option value="vendor3">Block chain INC</option>
            <option value="vendor4">Evil Corp</option>
          </select>
        </div>
      </form>
    </section>
  )
}

export default CardForm