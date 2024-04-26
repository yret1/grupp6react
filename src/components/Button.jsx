/* eslint-disable react/prop-types */
import "../styles/Button.css"
const Button = (props) => {



    const {newcard, updateCards} = props;




  return (
    <>

            {newcard
            ? <button>ADD NEW CARD</button>
            : <button onClick={updateCards} >ADD CARD</button>
            }

            </>

        )
    }

export default Button