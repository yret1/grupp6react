
import "../styles/Card.css"
import wifi from "../assets/wifi.svg"
import btc from "../assets/btc.svg"


const Card = () => {
  return (
    <section className="card">

        <section className="toppart">
            <img src={wifi} alt="NFC" />
            <img src={btc} alt="Cardtype" />
        </section>
    </section>
  )
}

export default Card