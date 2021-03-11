import React, { useContext } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { GraphContext } from '../contexts/GraphContext';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror-graphql/mode');
require('codemirror/mode/jsx/jsx');
require('codemirror-graphql/hint');
require('codemirror-graphql/lint');
require('codemirror/lib/codemirror.css');
require('../stylesheets/editor-theme.css');
require('codemirror/addon/edit/closebrackets');

const OutputDisplay = () => {
  const [info, setInfo] = useContext(GraphContext);

  const DEFAULT_JSX_OPTIONS = {
    theme: 'custom-0',
    autoCloseBrackets: true,
    cursorScrollMargin: 48,
    mode: 'javascript',
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
    styleActiveLine: true,
    viewportMargin: 99,
  };

  return (
    <>
      <h3>Response:</h3>
      <CodeMirror
        className="output-display"
        value={info.response ? JSON.stringify(info.response, null, 2) : null}
        options={DEFAULT_JSX_OPTIONS}
        onBeforeChange={(editor, metadata, value) => {
          value = info.response;
        }}
        onChange={(editor, metadata, value) => {
          value = info.response;
        }}
      />
    </>
  );
};

export default OutputDisplay;
