import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "./App.css";
import Board from "./components/Board";
import { loadData } from "./redux/actions";

class App extends PureComponent {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { boards } = this.props;
    return (
      <div className='App' style={{ height: window.innerHeight }}>
        {Object.keys(boards).map((boardName, index) => (
          <Board key={index} name={boardName} cards={boards[boardName]} />
        ))}
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
