import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSelectedCard, setModalVisibility } from "../redux/actions";
import "../styles/Card.css";

function Card(props) {
  const { card, setSelectedCard, setModalVisibility } = props;
  const { title, text } = card;
  const arrOfWords = text.split(" ");
  const excerpt = arrOfWords.length >= 10 ? `${arrOfWords.splice(0, 10).join(" ")} ...` : text;

  return (
    <a
      onClick={() => {
        setSelectedCard(card);
        setModalVisibility(true);
      }}
      href='#'
    >
      <div className='card'>
        <div className='card__header'>
          <span className='card__header__text'>{title}</span>
        </div>
        <div className='card__body'>
          <button className='card__button'>{"<"}</button>
          <div className='card_content'>
            <p>{excerpt}</p>
          </div>
          <button className='card__button'>{">"}</button>
        </div>
      </div>
    </a>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    text: PropTypes.string
  }),
  setSelectedCard: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setSelectedCard: value => {
    dispatch(setSelectedCard(value));
  },
  setModalVisibility: value => {
    dispatch(setModalVisibility(value));
  }
});

export default connect(null, mapDispatchToProps)(Card);
