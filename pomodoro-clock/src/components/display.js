import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p id={this.props.idText}>{this.props.text}</p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.stateValueToTrack == "breakLength")
    return { text: state.breakLength };
  else if (ownProps.stateValueToTrack == "sessionLength")
    return { text: state.sessionLength };
  else if (ownProps.stateValueToTrack == "timeToDisplay")
    return { text: state.timeToDisplay };
};
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
