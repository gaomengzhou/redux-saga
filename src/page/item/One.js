import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../action/counter";
import logo from "../logo.svg";
import "./App.css";

class One extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("One页面");
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
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
        <div>
          <button onClick={() => this.props.history.push("/two")}>
            to some
          </button>
        </div>
      </div>
    );
  }
}

export default connect(({ counter }) => ({
  counter,
}))(One);
