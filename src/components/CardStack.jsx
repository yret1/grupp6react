/* eslint-disable react/prop-types */
import Card from './Card';
import "../styles/CardStack.css";

const CardStack = ({cards, setActive}) => {


  const height = 240 + (cards.length * 40);

  return (
    <div className='card-stack-container'
    style={{height: `${height}px`}}>
      {cards.map((card, index) => (
        <div
          onClick={() => setActive(card)}
          className="card-stack"
          style={{ top: `${index * 40}px` }}
          key={card.number}
        >
          <Card name={card.name} number={card.number} validity={card.validity} vendor={card.vendor} />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
