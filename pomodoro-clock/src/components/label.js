import React from "react";
import { connect } from "react-redux";

class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p id={this.props.idText}>{this.props.text}</p>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Label);
