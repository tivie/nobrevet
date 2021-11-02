import db from "../db";
import {useLiveQuery} from "dexie-react-hooks";
import PatientListItem from "./PatientListItem";
import './PatientList.css';
import {Link} from "react-router-dom";


/**
 * 
 * @param htmlId
 * @returns {JSX.Element|null}
 * @constructor
 */
function PatientList({htmlId}) {

  const patients = useLiveQuery(() => db.Pacientes.toArray(), []);
  if (!patients) return null

  return (
    <nav id={htmlId} className="nav-internados nav nav-fill flex-column">
      {patients.map( ({id, nome}) => (
        <Link to={`/patient/${id}`} key={id} id={id} nome={nome} component={PatientListItem}>{nome}</Link>
      ))}
    </nav>
  );
}

export default PatientList;
