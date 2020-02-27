import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Board from "./components/Board";
import { loadData } from "./redux/actions";
import { setModalVisibility } from "./redux/actions";
import Modal from "./components/Modal";

class App extends Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
    this.props.setModalVisibility(true);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    const { boards } = this.props;

    return (
      <div className='App' style={{ height: window.innerHeight }}>
        {Object.keys(boards).map((boardName, index) => (
          <Board key={index} name={boardName} cards={boards[boardName]} />
        ))}
        <Modal onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.BoardReducer.boards
});

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(loadData());
  },
  setModalVisibility: value => {
    dispatch(setModalVisibility(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
