import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actionNames.js";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  handleKeypress(event) {
    if (
      event.keyCode == this.props.keyCode ||
      event.keyCode == this.props.keyCodeCaps
    ) {
      event.preventDefault();
      this.playSound();
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  playSound(event) {
    this.props.drumHit();
    let sound = document.getElementById(this.props.keyText);
    sound.play();
  }

  render() {
    return (
      <div id={this.props.idText} className="drum-pad" onClick={this.playSound}>
        <audio
          id={this.props.keyText}
          className="clip"
          src={this.props.audioFile}
        >
          Your browser does not support embedded audio
        </audio>
        {this.props.keyText}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  drumHit: () =>
    dispatch({
      type: Actions.DRUMHIT,
      text: ownProps.descriptionText
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
