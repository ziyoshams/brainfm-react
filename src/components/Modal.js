import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setModalVisibility, updateSelectedCard } from "../redux/actions";

import "../styles/Modal.css";

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      text: props.text
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.selectedCard.title !== this.props.selectedCard.title ||
      prevProps.selectedCard.text !== this.props.selectedCard.text
    ) {
      this.setState({ text: this.props.selectedCard.text, title: this.props.selectedCard.title });
    }
  }

  handleModalClose = () => {
    const { setModalVisibility } = this.props;
    setModalVisibility(false);
  };

  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { title, text } = this.state;
    const { selectedCard, updateSelectedCard } = this.props;
    event.preventDefault();
    updateSelectedCard({ ...selectedCard, title, text });
    this.handleModalClose();
  };

  render() {
    const { title, text } = this.state;
    const { modalIsVisible } = this.props;
    const visible = modalIsVisible ? "modal modal-visible" : "modal";

    return (
      <div className={visible}>
        <a className='modal__close-button' onClick={this.handleModalClose}>
          x
        </a>
        <div
          style={{
            margin: "auto",
            backgroundColor: "#FFFFFF",
            padding: 20,
            borderRadius: 12,
            width: 500
          }}
        >
          <form>
            <div className='form__section'>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                id='title'
                name='title'
                value={title}
                onChange={this.handleTextChange}
              />
            </div>

            <div className='form__section'>
              <label htmlFor='title'>Text:</label>
              <textarea
                id='text'
                name='text'
                onChange={this.handleTextChange}
                value={text}
              ></textarea>
            </div>

            <div className='form__section'>
              <button onClick={this.handleSubmit}>Done</button>
              <button
                onClick={evt => {
                  evt.preventDefault();
                  this.handleModalClose();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedCard: state.CardReducer.selectedCard,
  modalIsVisible: state.ModalReducer.isVisible
});

const mapDispatchToProps = dispatch => ({
  setModalVisibility: value => {
    dispatch(setModalVisibility(value));
  },
  updateSelectedCard: value => {
    dispatch(updateSelectedCard(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
