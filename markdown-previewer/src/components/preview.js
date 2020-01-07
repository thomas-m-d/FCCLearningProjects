import React from 'react';
import { connect } from 'react-redux';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.updatePreview = this.updatePreview.bind(this);
    }

    updatePreview() {

    };

    render() {
        return (
            <div>
                <p>I am a Preview!!</p>
                <div id="preview" dangerouslySetInnerHTML={{__html: this.props.text}}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.formattedText
});

export default connect(mapStateToProps, null)(Preview);