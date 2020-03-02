import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import * as Actions from "../actionNames";

class Break extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="break main-block">
        <Label idText="break-label" text="Break Length" />
        <Display idText="break-length" stateValueToTrack="breakLength" />
        <Decrement
          idText="break-decrement"
          valueToDecrement={Actions.breakBlock}
        />
        <Increment
          idText="break-increment"
          valueToIncrement={Actions.breakBlock}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
