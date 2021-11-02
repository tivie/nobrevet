import {useLiveQuery} from "dexie-react-hooks";
import db from "../db";
import FichaInternamentoForm from "./FichaInternamentoForm";
import {useState} from "react";
import {cloneDeep} from "lodash/lang";
import {EditorState} from "draft-js";
import {stateFromHTML} from "draft-js-import-html";
import {stateToHTML} from "draft-js-export-html";
import PrintPage from "./PrintPage";
import {Prompt} from "react-router-dom";


function FichaInternamento(props) {

  const id = props.match.params.id;
  const schema = {
    id: id,
    nome: '',
    dataAtual: '',
    localDeInternamento: '',
    especie: '',
    raca: '',
    idade: '',
    sexo: '',
    tutor: '',
    contactoTutor: '',
    ncliente: '',
    pesoEntrada: '',
    pesoDia: '',
    foiReferenciado: false,
    referenciador: '',
    contactoRef: '',
    horaRubrica: '',
    dataEntrada: '',
    medico: '',
    localCateter: '',
    dataCateter: '',
    dataTrocaCateter: '',
    medicacao: []
  };
  
  
  const [valores, setValores] = useState(schema);
  const [isDirty, setIsDirty] = useState(false);
  
  // richText (performance reasons)
  const [diagnostico, setDiagnostico] = useState(() => EditorState.createEmpty());
  const [sintomas, setSintomas] = useState(() => EditorState.createEmpty());
  const [plano, setPlano] = useState(() => EditorState.createEmpty());


  const updateValores = function (key, val) {
    let newValores = cloneDeep(valores);
    newValores[key] = val;
    setValores(newValores);
    onFormChangedHandler();
  };
  
  const updateMedicacao = function (key, val, index) {
    let newValores = cloneDeep(valores);
    newValores.medicacao[index][key] = val;
    setValores(newValores);
    onFormChangedHandler();
  }
  
  const addMedicacao = function() {
    let newValores = cloneDeep(valores);
    newValores.medicacao.push({
      farmaco: '', 
      dose: '',
      frequencia: '',
      via: '',
      h8: '',
      h10: '',
      h12: '',
      h14: '',
      h16: '',
      h18: '',
      h20: '',
      h22: '',
      h24: '',
      h2: '',
      h4: '',
      h6: '' 
    });
    setValores(newValores);
    onFormChangedHandler();
  }
  
  const removeMedicacao = function(index) {
    let newValores = cloneDeep(valores);
    newValores.medicacao.splice(index, 1);
    setValores(newValores);
    onFormChangedHandler();
  }
  
  const guardarValores = async function () {
    let newVals = cloneDeep(valores);
    newVals.diagnostico = stateToHTML(diagnostico.getCurrentContent());
    newVals.sintomas = stateToHTML(sintomas.getCurrentContent());
    newVals.plano = stateToHTML(plano.getCurrentContent());
    
    await db.Pacientes.put(newVals, parseInt(id));
    console.log('valores guardados na base de dados com sucesso');
    alert('Paciente guardado com sucesso');
    setIsDirty(false);
  }
  
  const onFormChangedHandler = function() {
    setIsDirty(true);
  }
  
  /**
   * 
   * @param data
   * @returns {schema}
   */
  const populateSchema = function(data) {
    let newData = cloneDeep(schema);
    for (let k in schema) {
      if (schema.hasOwnProperty(k) && data.hasOwnProperty(k)) {
        newData[k] = data[k];
      }
    }
    return newData;
  }
  
  useLiveQuery(async function () {
    if (isNaN(id) || !/^\d+$/.test(id)) {
      setValores(null);
      return;
    }
    
    let data = await db.Pacientes.get(parseInt(id));

    if (!data) {
      setValores(null);
    } else {
      // noinspection JSCheckFunctionSignatures
      let edDiag = (data.diagnostico) ? EditorState.createWithContent(stateFromHTML(data.diagnostico)) : EditorState.createWithContent(stateFromHTML('<p><br></p>'));
      // noinspection JSCheckFunctionSignatures
      let edSint = (data.sintomas) ? EditorState.createWithContent(stateFromHTML(data.sintomas)) : EditorState.createWithContent(stateFromHTML('<p><br></p>'));
      // noinspection JSCheckFunctionSignatures
      let edPlano = (data.plano) ? EditorState.createWithContent(stateFromHTML(data.plano)) : EditorState.createWithContent(stateFromHTML('<p><br></p>'));
      setDiagnostico(edDiag);
      setSintomas(edSint);
      setPlano(edPlano);
      data = populateSchema(data);
      setValores(data);
      setIsDirty(false);
    }
  }, [id]);
  
  if (typeof valores === 'undefined') {
    return ( // Still loading.
      <div>A carregar valores...</div>
    );
  } else if (valores === null) {
    return ( // Still loading.
      <div>Paciente não encontrado</div>
    );
  } else {
    return (
      <div>
        <Prompt
          when={isDirty}
          message={() => `A ficha parece ter sido alterada e não foi guardada. Tem a certeza que quer mudar de ficha?`}
        />
        <FichaInternamentoForm 
          id={id} 
          valores={valores} 
          guardarValores={guardarValores} 
          updateValores={updateValores}
          updateMedicacao={updateMedicacao}
          addMedicacao={addMedicacao}
          removeMedicacao={removeMedicacao}
          diagnostico={diagnostico}
          sintomas={sintomas}
          plano={plano}
          setDiagnostico={setDiagnostico}
          setSintomas={setSintomas}
          setPlano={setPlano}
        />
        <PrintPage valores={valores} diagnostico={diagnostico} sintomas={sintomas} plano={plano}/>
      </div>
    );
  }
}

export default FichaInternamento;
