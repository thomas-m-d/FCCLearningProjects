import React from 'react';
import { connect } from 'react-redux';
import { updatePreview } from '../actions/updatePreview'

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.updateText = this.updateText.bind(this);
    }

    updateText(event) {
        this.props.update(event.target.value);
    }

    render() {
        return (
            <div>
                <p>I am an Editor!!</p>
                <textarea id="editor" value={this.props.text} onChange={this.updateText}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.markdownText
});
const mapDispatchToProps = (dispatch) => ({
    update: (text) => dispatch(updatePreview(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);