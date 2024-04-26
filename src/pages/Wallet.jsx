import Button from "../components/Button"
import Card from "../components/Card"
import CardStack from "../components/CardStack"

const Wallet = () => {

  return (
    <section>
      <Card variant="bitcoin"/>
      <CardStack/>
      <Button newcard={true}/>

    </section>
  )
}

export default Wallet