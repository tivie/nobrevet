import PatientListItem from "./PatientListItem";
import './PatientList.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


/**
 * 
 * @param htmlId
 * @param pacientes
 * @returns {JSX.Element|null}
 * @constructor
 */
function PatientList({htmlId, dbHasChanged, setDbHasChanged}) {

  const url = 'http://localhost:3001/pacientes/';
  const [pacientes, setPacientes] = useState([]);
  
  useEffect(() => {
    const fetchPacientes = async function () {
      const res = await axios.get(url);
      setPacientes(res.data.data);
    };
    fetchPacientes().then(()=>setDbHasChanged(false));
  }, [url, dbHasChanged, setDbHasChanged]);
  
  
  return (
    <nav id={htmlId} className="nav-internados nav nav-fill flex-column">
      {pacientes.map( ({_id, nome}) => (
        <Link to={`/patient/${_id}`} key={_id} id={_id} nome={nome} component={PatientListItem}>{nome}</Link>
      ))}
    </nav>
  );
}

export default PatientList;
