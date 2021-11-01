import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {EditorState, RichUtils} from "draft-js";
import {btnReference} from "./btnReference";
import PropTypes from "prop-types";

function RichTextButton(props) {
  
  const {editorState, type, onEditorChange, className, ...rest} = props;
  const inlineStyle = editorState.getCurrentInlineStyle();
  const k = type.toLowerCase();
  const isActive = inlineStyle.has(btnReference[k].descriptor);
  const icon = btnReference[k].icon;
  
  const btnAction = function (e) {
    e.preventDefault();
    onEditorChange(RichUtils.toggleInlineStyle(editorState, btnReference[k].descriptor));
  }
  
  return (
    <div 
      className={'richTextEditor-btn' + (isActive ? ' active' : '') + (!!className ? ' ' + className : '')} 
      onMouseDown={btnAction}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} fixedWidth/>
    </div>
  );
}

RichTextButton.propTypes = {
  editorState: PropTypes.instanceOf(EditorState).isRequired,
  type: PropTypes.string.isRequired,
  onEditorChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default RichTextButton;
