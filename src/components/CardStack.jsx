import React from 'react';
import Card from './Card';
import "../styles/CardStack.css";

const CardStack = () => {

  const cards = ["ninja-bank", "block-chain", "evil-corp"];

  return (
    <div className='card-stack-container'>
      {cards.map((variant, index) => (
        <div
          className="card-stack"
          style={{ top: `${index * 40}px` }}
          key={variant}
        >
          <Card variant={variant}/>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
