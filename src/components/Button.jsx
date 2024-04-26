
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "../styles/Button.css"
const Button = (props) => {



    const {newcard, updateCards} = props;




  return (
    <>

            {newcard


            ? <Link className="buttonwrapper" to={"/new"}>
            <button className="newcard">ADD NEW CARD</button>
            </Link>

            : <Link className="buttonwrapper" to={"/"}>
              <button className="addcard" onClick={updateCards} >ADD CARD</button>
            </Link>
            }

            </>

        )
    }

export default Button