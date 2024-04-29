import "../styles/TopComponent.css"
import { useLocation } from 'react-router-dom'

const TopComponent = () => {
  const location = useLocation();
  let title = "E-Wallet"

  if (location.pathname === "/new") {
    title = "Add New Card" 
    
  }

  return (
    <section className="headwrapper">
      <h1 className="headline">{title}</h1>
    </section>
  );
}

export default TopComponent