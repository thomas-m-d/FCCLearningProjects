import React from "react";
import { connect } from "react-redux";
import Label from "./label.js";
import Display from "./display.js";
import StartStop from "./startStop.js";
import Reset from "./reset.js";

class Break extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timer main-block">
        <Label idText="timer-label" text={this.props.labelText} />
        <Display idText="time-left" stateValueToTrack="timeToDisplay" />
        <StartStop idText="start_stop" />
        <Reset idText="reset" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeLeft: state.timeToDisplay,
  labelText: state.isSessionTimerActive ? "Session" : "Break"
});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
