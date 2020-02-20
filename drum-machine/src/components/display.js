import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.idText}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.displayText
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
