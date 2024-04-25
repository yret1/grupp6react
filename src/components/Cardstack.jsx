import '../Styles/Cardstack.css'

const Cardstack = () => {
  return (
  <section className='theStack'>
    <div className='blackCard'>
        <section className='blackCardsection'>
            <div className='blackCardicon1'>ikon 1</div>
            <div className='blackCardicon2'>ikon 2</div>
        </section>
    </div>
    <div className='purpleCard'>
    <section className='purpleCardsection'>
            <div className='purpleCardicon1'>ikon 1</div>
            <div className='purpleCardicon2'>ikon 2</div>
        </section>
    </div>
    <div className='redCard'>
    <section className='redCardicons'>
            <div className='redCardicon1'>ikon 1</div>
            <div className='redCardicon2'>ikon 2</div>
        </section>
        <section redCardnr>
          <span className='rednr'>6666</span>
          <span className='rednr'>6666</span>
          <span className='rednr'>6666</span>
          <span className='rednr'>6666</span>
          <span className='rednr'>6666</span>
        </section>
        <section className='rcardInfo'>
          <section className='rCardholder'>
        <div className='rcardholderName'>CARDHOLDER NAME</div>
        <div className='rName'>RACHEL RICHTER</div>
        </section>
        <section className='rValid'>
        <div className='rvalidThru'>VALID THRU</div>
        <div className='rvalidDate'>10/24</div>
        </section>
        </section>
    </div>
  </section>
  )
}

export default Cardstack
