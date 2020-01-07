import React from 'react';
import './App.css';
import Editor from './components/editor';
import Preview from './components/preview'
import ReactFCCtest from 'react-fcctest';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

function App() {
  return (
    <div className="App">
      <div id="editor-container" >
        <Editor/>
      </div>
      <div id="preview-container">
        <Preview />
      </div>
      <ReactFCCtest/>
    </div>
  );
}

export default App;
