import React from 'react';
import './DashedButton.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

function DashedButton(props) {
  const {id, bsToggle, bsTarget, text, onClick} = props;

  return (
    <div className="dashed-button" id={id} data-bs-toggle={bsToggle} data-bs-target={bsTarget} onClick={onClick}>
      <span><FontAwesomeIcon icon={faPlusCircle}/> {text}</span>
    </div>
  );
}

export default DashedButton;
