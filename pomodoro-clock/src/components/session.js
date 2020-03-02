import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import * as Actions from "../actionNames";

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="session main-block">
        <Label idText="session-label" text="Session Length" />
        <Display idText="session-length" stateValueToTrack="sessionLength" />
        <Decrement
          idText="session-decrement"
          valueToDecrement={Actions.sessionBlock}
        />
        <Increment
          idText="session-increment"
          valueToIncrement={Actions.sessionBlock}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
