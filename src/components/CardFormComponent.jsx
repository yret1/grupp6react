/* eslint-disable react/prop-types */
import "../styles/CardFormComponent.css"

const CardFormComponent = (props) => {

  const {setName, setNumber, setCvv, setValidity, setVendor} = props;





  const handleValidity = (e) => {

     // Get the input value
  let input = e.target.value.replace(/\D/g, '');

  // Ensure the input is not longer than 4 characters
  if (input.length > 4) {
    input = input.substr(0, 4);
  }

  // Split the input into MM and YY parts
  let month = input.substr(0, 2);
  let year = input.substr(2, 2);

  // Format the input as MM/YY
  let formattedInput = month + (year ? '/' + year : '');

  // Update the input value
  e.target.value = formattedInput;


  setValidity(formattedInput);

  }



  const handleCardnumber = (e) => {

    let input = e.target.value.replace(/\D/g, '');


    if (input.length > 16) {
      input = input.substr(0, 16);
    }

 let first = input.substr(0, 4);
    let second = input.substr(4, 4);
    let third = input.substr(8, 4);
    let fourth = input.substr(12, 4);


    let formattedInput = first + (second ? ' ' + second : '') + (third ? ' ' + third : '') + (fourth ? ' ' + fourth : '');

    e.target.value = formattedInput

    setNumber(formattedInput);

  }









  return (
    <section className="cardformsection">
        <form className='cardform'>
            <label className="cardformtext">CARD NUMBER</label><br/>
            <input onChange={handleCardnumber}  className="input" type="text" /><br/>
            <label className="cardformtext">CARDHOLDER NAME</label><br/>
            <input onChange={(e) => {setName(e.currentTarget.value)}} className="input"type="text" /><br/>
            <div className="cardformsmall-wrapper">
            <div className="cardformsmall-1">
            <label className="cardformtext">VALID THRU</label>
            <input onChange={handleValidity} className="input-valid"type="text" /><br/>
            </div>
            <div className="cardformsmall-2">
            <label className="cardformtext">CVV</label>
            <input onChange={(e) => {setCvv(e.currentTarget.value)}} className="input-valid"type="number" /><br/>
            </div>
            </div>
            <label className="cardformtext">VENDOR</label><br/>
            <select onChange={(e) => {setVendor(e.currentTarget.value)}} className="option" name="vendor">
            <option value="bitcoin">Bitcoin INC</option>
            <option value="ninja-bank">Ninja Bank</option>
            <option value="block-chain">Block Chain INC</option>
            <option value="evil-corp">Evil Corp</option>
            </select>
        </form>
    </section>
  )
}

export default CardFormComponent
