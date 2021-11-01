import {useState} from "react";
import logo from '../media/logo_azul.png';
import './LeftArea.css';
import DashedButton from "./DashedButton";
import PatientList from "./PatientList";
import AddPatientModal from "./AddPatientModal";
import db from "../db";

function LeftArea() {
  
  const [modalShow, setModalShow] = useState(false);

  const adicionarPaciente = async function (nome) {
    await db.Pacientes
      .add({nome: nome})
      .catch(function (err) {
        console.error('Erro ao criar o paciente de nome ' + nome);
        alert('Erro ao criar o paciente de nome ' + nome);
        throw err;
      });
    setModalShow(false);
  }
  
  return (
    <>
      <div className="left-area no-print">
        <img className="logo-menu logo" src={logo} alt="logo"/>
        <h3 className="title">Internados</h3>
        <PatientList data-foo="bazinga" htmlId="nav-internados"/>
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
