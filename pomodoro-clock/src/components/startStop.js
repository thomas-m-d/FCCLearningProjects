import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actionNames";

class StartStop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button id={this.props.idText} onClick={this.props.startStopFunc}>
        S
      </button>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  startStopFunc: () =>
    dispatch({
      type: Actions.STARTSTOP
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(StartStop);
