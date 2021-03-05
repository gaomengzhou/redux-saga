import React from "react";
import { connect } from "react-redux";
import { increment } from "../../action/counter";
class Two extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Two页面");
  }

  render() {
    return (
      <div>
        <div>Two</div>
        <button onClick={() => this.props.history.push("/three")}>
          to Three
        </button>
        <hr />
        <button
          className="btn"
          onClick={() => this.props.dispatch(increment())}
        >
          +
        </button>
      </div>
    );
  }
}
export default connect((state) => state)(Two);
