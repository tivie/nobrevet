import PatientListItem from "./PatientListItem";
import './PatientList.css';
import {Link} from "react-router-dom";




/**
 * 
 * @param htmlId
 * @param pacientes
 * @param {removerPaciente} removerPaciente
 * @returns {JSX.Element}
 * @constructor
 */
function PatientList({htmlId, pacientes, removerPaciente}) {
  
  return (
    <nav id={htmlId} className="nav-internados nav nav-fill flex-column">
      {pacientes.map( ({_id, nome}) => (
        <Link to={`/patient/${_id}`} key={_id} id={_id} nome={nome} removerPaciente={removerPaciente} component={PatientListItem}>{nome}</Link>
      ))}
    </nav>
  );
}

export default PatientList;
