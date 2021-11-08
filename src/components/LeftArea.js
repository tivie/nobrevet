import {useState} from "react";
import logo from '../media/logo_azul.png';
import './LeftArea.css';
import DashedButton from "./DashedButton";
import PatientList from "./PatientList";
import AddPatientModal from "./AddPatientModal";
import axios from "axios";
import getSchema from "../schemas/paciente.js";


function LeftArea({dbHasChanged, setDbHasChanged}) {
  const url = 'http://localhost:3001/pacientes/';
  const [modalShow, setModalShow] = useState(false);
  
  const adicionarPaciente = async function (nome) {
    let newData = getSchema();
    newData.nome = nome;
    // noinspection JSValidateTypes
    newData.dataAtual = new Date().toISOString();
    delete newData.id;
    await axios
      .post(url, newData)
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        
        console.error('Erro ao criar o paciente de nome ' + nome);
        alert('Erro ao criar o paciente de nome ' + nome);
        throw error;
      });
    setDbHasChanged(true);
    setModalShow(false);
  }

  return (
    <>
      <div className="left-area no-print">
        <img className="logo-menu logo" src={logo} alt="logo"/>
        <h3 className="title">Internados</h3>
        <PatientList htmlId="nav-internados" setDbHasChanged={setDbHasChanged} dbHasChanged={dbHasChanged}/>
        <DashedButton text="Adicionar paciente" id="add-patient" onClick={() => setModalShow(true)}/>
      </div>
      <AddPatientModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSave={adicionarPaciente}/>
    </>
  );
}

export default LeftArea;
