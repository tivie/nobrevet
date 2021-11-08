import {useContext, useEffect, useState} from "react";
import logo from '../media/logo_azul.png';
import './LeftArea.css';
import DashedButton from "./DashedButton";
import PatientList from "./PatientList";
import AddPatientModal from "./AddPatientModal";
import axios from "axios";
import getSchema from "../schemas/paciente.js";
import {RestContext} from "../context/rest-context";


function LeftArea({dbHasChanged, setDbHasChanged}) {
  const baseUrl = useContext(RestContext).baseUrl;
  const url = baseUrl + 'pacientes/';
  const [modalShow, setModalShow] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchPacientes = async function () {
      const res = await axios.get(url);
      setPacientes(res.data.data);
    };
    fetchPacientes().then(()=>setDbHasChanged(false));
  }, [url, dbHasChanged, setDbHasChanged]);
  
  const adicionarPaciente = async function (nome) {
    let newData = getSchema();
    newData.nome = nome;
    // noinspection JSValidateTypes
    newData.dataAtual = new Date().toISOString();
    delete newData._id;
    try {
      await axios.post(url, newData);
      setDbHasChanged(true);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }

      console.error('Erro ao criar o paciente de nome ' + nome);
      alert('Erro ao criar o paciente de nome ' + nome);
      throw error;
    
    } finally {
      setModalShow(false);
    }
  }

  /**
   * This callback type is called `removerPaciente` and is displayed as a global symbol.
   *
   * @callback removerPaciente
   * @param {window.event} e
   * @param {string} id
   * @param {string} nome 
   */
  async function removerPaciente(e, id, nome) {
    e.preventDefault();
    let retVal = window.confirm(`Tem a certeza que deseja remove o paciente ${nome}`);
    if (retVal === true) {
      // noinspection JSCheckFunctionSignatures
      try {
        await axios.delete(url + id)
        alert(`Paciente ${nome} removido com sucesso`);
        setDbHasChanged(true);
      } catch(error) {
        console.error(error);
        alert(`Não foi possível remover o paciente ${nome}`);
      }
    }
  };
  
  
  return (
    <>
      <div className="left-area no-print">
        <img className="logo-menu logo" src={logo} alt="logo"/>
        <h3 className="title">Internados</h3>
        <PatientList pacientes={pacientes} htmlId="nav-internados" removerPaciente={removerPaciente}/>
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
