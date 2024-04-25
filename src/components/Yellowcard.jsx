import '../Styles/Yellowcard.css'

const Yellowcard = () => {

  return (
    <section className='cardwrapper'>
        <section className='ycard'>
        <section className='yellowCardicons'>
            <div className='yellowCardicon1'>ikon 1</div>
            <div className='yellowCardicon2'>ikon 2</div>
        </section>
        <section yellowCardnr>
          <span className='yellownr'>1234</span>
          <span className='yellownr'>5678</span>
          <span className='yellownr'>5678</span>
          <span className='yellownr'>9101</span>
          <span className='yellownr'>1123</span>
        </section>
        <section className='ycardInfo'>
          <section className='yCardholder'>
        <div className='ycardholderName'>CARDHOLDER NAME</div>
        <div className='yName'>RACHEL RICHTER</div>
        </section>
        <section className='yValid'>
        <div className='yvalidThru'>VALID THRU</div>
        <div className='yvalidDate'>12/24</div>
        </section>
        </section>
        </section>
    </section>
  )
}

export default Yellowcard
