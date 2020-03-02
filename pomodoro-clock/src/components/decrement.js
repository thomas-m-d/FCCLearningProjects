import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actionNames.js";

class Decrement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button id={this.props.idText} onClick={this.props.decrement}>
        -
      </button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  decrement: () =>
    dispatch({
      type: Actions.DECREMENT,
      valueToDecrement: ownProps.valueToDecrement
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Decrement);
