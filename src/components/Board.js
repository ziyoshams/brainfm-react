import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import "../styles/Board.css";

export default function Board({ cards, name }) {
  return (
    <div className='board'>
      <div className='board__header'>
        <span className='board__header__text'>{name}</span>
      </div>
      <div className='board__body' style={{ height: window.innerHeight }}>
        {cards.map((card, index) => (
          <Card key={index} card={card} board={name} />
        ))}
      </div>
      <div className='board__footer'>
        <button onClick={alert}>+ Add a card</button>
      </div>
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      text: PropTypes.string
    })
  ),
  name: PropTypes.string.isRequired
};
