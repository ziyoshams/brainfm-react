import React from "react";
import PropTypes from "prop-types";

import "../styles/Card.css";

export default function Card({ id, title, text }) {
  return (
    <div className='card'>
      <div className='card__header'>
        <span className='card__header__text'>{title}</span>
      </div>
      <div className='card__body'>
        <button className='card__button'>{"<"}</button>
        <div className='card_content'>
          <p>{text}</p>
        </div>
        <button className='card__button'>{">"}</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
