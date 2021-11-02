import {useRouteMatch} from "react-router-dom";
import {Button} from "react-bootstrap";
import './PatientListItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import db from "../db";

/**
 * 
 * @param {int} id
 * @param {string} children
 * @param {string} href
 * @param {string} nome
 * @returns {JSX.Element}
 * @constructor
 */
const PatientListItem = ({id, children, href, nome}) => {
  
  let match = useRouteMatch({
    path: href.substring(1),
    exact: true
  });

  /**
   * 
   * @param {Event} e
   * @returns {Promise<void>}
   */
  const deletePaciente = async function (e) {
    e.preventDefault();
    let retVal = window.confirm(`Tem a certeza que deseja remove o paciente ${nome}`);
    if (retVal === true) {
      // noinspection JSCheckFunctionSignatures
      await db.Pacientes.delete(parseInt(id));
      alert('Paciente removido com sucesso');
    }
  };
  
  return (
    <a className={`patient-list-item nav-link text-truncate ${match ? 'active' : ''}`} data-id={id} href={href}>
      <div className="nav-link-txt">{children}</div>
      {match ? (
        <div className="nav-link-del-btn">
          <Button variant="outline-danger" onClick={deletePaciente}>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </Button>
        </div>
      ) : null}
    </a>
  );
};

export default PatientListItem;
