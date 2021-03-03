import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../action/counter";
import "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.counter}</p>
        <p>
          <button
            className="btn"
            onClick={() => this.props.dispatch(increment())}
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => this.props.dispatch(decrement())}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() =>
              this.props.dispatch({
                type: "USER_FETCH_REQUESTED",
                payload: { name: "saga" },
              })
            }
          >
            saga+
          </button>
          <button
            className="btn"
            onClick={() =>
              this.props.dispatch({
                type: "JIAN",
                payload: { name: "saga-" },
              })
            }
          >
            saga-
          </button>
        </p>
      </div>
    );
  }
}

export default connect(({ counter }) => ({
  counter,
}))(App);
