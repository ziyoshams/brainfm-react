import React, { useState } from "react";
import { connect } from "react-redux";
import { setModalVisibility } from "../redux/actions";

import "../styles/Modal.css";

function Modal({ onSubmit, selectedCard, modalIsVisible, setModalVisibility }) {
  const visible = modalIsVisible ? "modal modal-visible" : "modal";
  const [formTitle, setTitle] = useState("");
  const [formText, setText] = useState("");

  return (
    <div className={visible}>
      <a className='modal__close-button' onClick={() => setModalVisibility(false)}>
        x
      </a>
      <div style={{ margin: "auto", backgroundColor: "#FFFFFF", padding: 20, borderRadius: 12 }}>
        <form onSubmit={onSubmit}>
          <div className='form__section'>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              id='title'
              name='title'
              value={formTitle || selectedCard.title}
              onChange={evt => setTitle(evt.target.value)}
            />
          </div>

          <div className='form__section'>
            <label htmlFor='title'>Text:</label>
            <textarea
              id='text'
              name='text'
              onChange={evt => setText(evt.target.value)}
              value={formText || selectedCard.text}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  selectedCard: state.CardReducer.selectedCard,
  modalIsVisible: state.ModalReducer.isVisible
});

const mapDispatchToProps = dispatch => ({
  setModalVisibility: value => {
    dispatch(setModalVisibility(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
