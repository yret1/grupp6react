import "../styles/CardFormComponent.css"

const CardFormComponent = () => {
  return (
    <section className="cardformsection">
        <form className='cardform'>
            <label className="cardformtext">CARD NUMBER</label><br/>
            <input className="input" type="number" /><br/>
            <label className="cardformtext">CARDHOLDER NAME</label><br/>
            <input className="input"type="text" /><br/>
            <div className="cardformsmall-wrapper">
            <div className="cardformsmall-1">
            <label className="cardformtext">VALID THRU</label>
            <input className="input-valid"type="number" /><br/>
            </div>
            <div className="cardformsmall-2">
            <label className="cardformtext">CVV</label>
            <input className="input-valid"type="number" /><br/>
            </div>
            </div>
            <label className="cardformtext">VENDOR</label><br/>
            <select className="option" name="vendor">
            <option value="volvo">Bitcoin INC</option>
            <option value="volvo">Ninja Bank</option>
            <option value="volvo">Block Chain INC</option>
            <option value="volvo">Evil Corp</option>
            </select>
        </form>
    </section>
  )
}

export default CardFormComponent
