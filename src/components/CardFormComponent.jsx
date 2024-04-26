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









  return (
    <section className="cardformsection">
        <form className='cardform'>
            <label className="cardformtext">CARD NUMBER</label><br/>
            <input onChange={(e) => {setNumber(e.currentTarget.value)}}  className="input" type="number" /><br/>
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
            <option value="Bitcoin INC">Bitcoin INC</option>
            <option value="Ninja Bank">Ninja Bank</option>
            <option value="Block Chain INC">Block Chain INC</option>
            <option value="Evil Corp">Evil Corp</option>
            </select>
        </form>
    </section>
  )
}

export default CardFormComponent
