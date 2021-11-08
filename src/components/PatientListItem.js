import {useRouteMatch} from "react-router-dom";
import {Button} from "react-bootstrap";
import './PatientListItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

/**
 * 
 * @param {string} id
 * @param {string} children
 * @param {string} href
 * @param {string} nome
 * @param {removerPaciente} removerPaciente
 * @returns {JSX.Element}
 * @constructor
 */
const PatientListItem = ({id, children, href, nome, removerPaciente}) => {
  
  let match = useRouteMatch({
    path: href.substring(1),
    exact: true
  });
  
  return (
    <a className={`patient-list-item nav-link text-truncate ${match ? 'active' : ''}`} data-id={id} href={href}>
      <div className="nav-link-txt">{children}</div>
      {match ? (
        <div className="nav-link-del-btn">
          <Button variant="outline-danger" onClick={(e) => removerPaciente(e, id, nome)}>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </Button>
        </div>
      ) : null}
    </a>
  );
};

export default PatientListItem;
