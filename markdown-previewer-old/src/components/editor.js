import React, { Component } from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.updateEditor = this.updateEditor.bind(this);
    }

    updateEditor() {

    }

    render() {
        return (
            <div>
                <input></input>
            </div>
        );
    }
}

export default Editor;
