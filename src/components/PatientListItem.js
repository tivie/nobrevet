import React from 'react';
import {useRouteMatch} from "react-router-dom";
//import {useHistory} from "react-router-dom";
import './PatientListItem.css';

/**
 * 
 * @param id
 * @param children
 * @param href
 * @returns {JSX.Element}
 * @constructor
 */
const PatientListItem = ({id, children, href}) => {
  
  let match = useRouteMatch({
    path: href.substring(1),
    exact: true
  });
  
  return (
    <a className={`patient-list-item nav-link text-truncate ${match ? 'active' : ''}`} data-id={id} href={href}>{children}</a>
  );
};

export default PatientListItem;
