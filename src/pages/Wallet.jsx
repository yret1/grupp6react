import Button from "../components/Button"
import Card from "../components/Card"

const Wallet = () => {

  return (
    <section>
      <Card variant="bitcoin"/>
      <Card variant="ninja-bank"/>
      <Card variant="block-chain"/>
      <Card variant="evil-corp"/>


      <Button newcard={true}/>
    </section>
  )
}

export default Wallet