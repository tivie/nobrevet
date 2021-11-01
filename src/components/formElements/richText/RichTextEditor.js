import {useRef, useState} from "react";
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './RichTextEditor.scss';
import RichTextButton from "./RichTextButton";
import PropTypes from 'prop-types'


function RichTextEditor(props) {
  
  const [hasFocus, setHasFocus] = useState(false);
  
  const {editorState, onChange, placeholder, tabIndex, title, id, toolbarActions, ...rest} = props;
  const editor = useRef(null);
  
  
  const focusEditor = function () {
    if (editor && editor.current) {
      editor.current.focus();
    }
  }

  const handleKeyCommand = function (command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  
  let classes = 'richTextEditor-wrapper form-control mb-3';
  if (!title) classes += ' no-ph';
  if (toolbarActions.length <= 0) classes += ' no-tb';
  if (hasFocus) classes += ' focus';
  
  return (
    <div
      id={id}  
      tabIndex={tabIndex} 
      className={classes} 
      onClick={focusEditor} 
      onFocus={()=>{setHasFocus(true)}}
      onBlur={()=>{setHasFocus(false)}}
    >
      {!!title ?
        (<label htmlFor={id}>{title}</label>) : null
      }
      <Editor
        ref={editor}
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={onChange}
        placeholder={placeholder ? placeholder : 'Write something!'}
        {...rest}
      />
      {toolbarActions.length > 0 &&
        <div className="richTextEditor-toolbar">
          {toolbarActions.map( (type) => (
            <RichTextButton key={type} type={type} editorState={editorState} onEditorChange={onChange} />
          ))}
        </div>
      }
    </div>
    
  );
}

RichTextEditor.propTypes = {
  editorState: PropTypes.instanceOf(EditorState).isRequired,
  onChange: PropTypes.func.isRequired, 
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.string,
  toolbarActions: PropTypes.arrayOf(PropTypes.string)
}

RichTextEditor.defaultProps = {
  toolbarActions: []
}

export default RichTextEditor;
