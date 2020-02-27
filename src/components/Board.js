import React from "react";
import "../styles/Board.css";
import Card from "./Card";

export default function Board({ cards, name }) {
  console.log(cards);
  return (
    <div className='board'>
      <div className='board__header'>
        <span className='board__header__text'>{name}</span>
      </div>
      <div className='board__body' style={{ height: window.innerHeight }}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className='board__footer'>
        <button onClick={alert}>+ Add a card</button>
      </div>
    </div>
  );
}
