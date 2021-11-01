import './FichaInternamentoForm.css';
import "draft-js/dist/Draft.css";
import RichTextEditor from "./formElements/richText/RichTextEditor";
import {Row, Col, Form, Button} from "react-bootstrap";
import Fieldset from "./formElements/Fieldset";
import FormInput from "./formElements/FormInput";
import FormSelect from "./formElements/FormSelect";
import DashedButton from "./DashedButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";


function FichaInternamentoForm(props) {

  const {id, valores, updateValores, updateMedicacao, addMedicacao, removeMedicacao, guardarValores, diagnostico, setDiagnostico, sintomas, setSintomas, plano, setPlano} = props;
  
  
  const localDeInternamentoOptions = [
    {val: 'Geral', txt: 'Geral'},
    {val: 'Infectocontagiosos', txt: 'Infectocontagiosos'},
    {val: 'Cirurgia', txt: 'Cirurgia'},
    {val: 'Tosquia', txt: 'Tosquia'}
  ];
  
  const sexoOptions = [
    {val: 'Macho', txt: 'Macho'},
    {val: 'Fêmea', txt: 'Fêmea'},
    {val: 'Macho Castrado', txt: 'Macho Castrado'},
    {val: 'Fêmea Esterilizada', txt: 'Fêmea Esterilizada'},
  ];
  
  
  
  return (

    <Form id="ficha-hospitalizacao" className="no-print" data-patient-id={id} onSubmit={guardarValores}>
      <h3>Ficha de Hospitalização</h3>
      
      <Fieldset title="Dados Gerais" className="dados-gerais-fieldset">
        
        <Row>
          <Col>
            <FormInput id="dataAtual" tabIndex="1" type="date" title="Data Atual" required={true} value={valores.dataAtual} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormSelect id="localDeInternamento" tabIndex="2" title="Local de Internamento" options={localDeInternamentoOptions} value={valores.localDeInternamento} updateValores={updateValores}/>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <FormInput id="nome" tabIndex="3" type="text" title="Doente" required={true} value={valores.nome} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="especie" tabIndex="4" type="text" title="Espécie" required={true} value={valores.especie} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="raca" tabIndex="5" type="text" title="Raça" required={true} value={valores.raca} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="idade" tabIndex="6" type="text" title="Idade" required={true} value={valores.idade} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormSelect id="sexo" tabIndex="7" title="Sexo" options={sexoOptions} value={valores.sexo} updateValores={updateValores}/>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <FormInput id="tutor" tabIndex="8" type="text" title="Tutor" required={true} value={valores.tutor} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="contactoTutor" tabIndex="9" type="text" title="Contacto do Tutor" required={true} value={valores.contactoTutor} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="ncliente" tabIndex="10" type="text" title="N.º de Cliente" value={valores.ncliente} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="pesoEntrada" tabIndex="11" type="text" title="Peso à Entrada" value={valores.pesoEntrada} updateValores={updateValores}/>
          </Col>
          <Col>
            <FormInput id="pesoDia" tabIndex="12" type="text" title="Peso Atual" value={valores.pesoDia} updateValores={updateValores}/>
          </Col>
        </Row>
        
      </Fieldset>

      <Fieldset title="Referenciação" className="referenciacao-fieldset">
        <Row>
          <Col>
            <Form.Check
              id="foiReferenciado"
              className="mb-3"
              type="switch"
              checked={valores.foiReferenciado}
              onChange={e => updateValores('foiReferenciado', e.target.checked)}
              label="O doente veio referenciado?"
            />
          </Col>
        </Row>

        {valores.foiReferenciado ? (
          <Row>
            <Col>
              <FormInput id="referenciador" tabIndex="14" type="text" title="Referenciador" value={valores.referenciador} updateValores={updateValores}/>
            </Col>
            <Col>
              <FormInput id="contactoRef" tabIndex="15" type="text" title="Contacto do Referenciador" value={valores.contactoRef} updateValores={updateValores}/>
            </Col>
            <Col>
              <FormInput id="horaRubrica" tabIndex="16" type="datetime-local" title="Data e Hora do contacto com tutor" value={valores.horaRubrica} updateValores={updateValores}/>
            </Col>
          </Row>
        ) : null}
        
      </Fieldset>

      <Fieldset title="Motivo de Internamento" className="motivo-de-internamento-fieldset">
        <Row>
          <Col xs={12} md={4}>
            <FormInput id="dataEntrada" title="Data de Entrada" tabIndex={17} type="date" mb="mb-4" value={valores.dataEntrada} updateValores={updateValores}/>
            <FormInput id="medico" title="Médico" tabIndex={18} type="text" mb="mb-4" value={valores.medico} updateValores={updateValores}/>
            <FormInput id="localCateter" title="Localização do Cateter" tabIndex={19} type="text" mb="mb-4" value={valores.localCateter} updateValores={updateValores}/>
            <FormInput id="dataCateter" title="Data de Colocação do Cateter" tabIndex={20} type="date" mb="mb-4" value={valores.dataCateter} updateValores={updateValores}/>
            <FormInput id="dataTrocaCateter" title="Data de Troca do Cateter" tabIndex={21} type="date" mb="mb-4" value={valores.dataTrocaCateter} updateValores={updateValores}/>
          </Col>
          <Col xs={12} md={8}>
            <RichTextEditor id="diagnostico" placeholder="Diagnóstico" tabIndex={21} editorState={diagnostico} onChange={setDiagnostico} toolbarActions={['bold', 'italic', 'underline']}/>
            <RichTextEditor id="sintomas" placeholder="Sintomas" tabIndex={22} editorState={sintomas} onChange={setSintomas} toolbarActions={['bold', 'italic', 'underline']}/>
          </Col>
        </Row>
      </Fieldset>

      <Fieldset title="Medicação" className="medicacao-fieldset">
        
        <Row className="header-medicacao">
          <Col className="col-1 col-to-colapse">&nbsp;</Col>
          <Col className="col-2">&nbsp;</Col>
          <Col className="col-1">&nbsp;</Col>
          <Col className="col-1">&nbsp;</Col>
          <Col className="col-1">&nbsp;</Col>
          <Col className="col-6 align-items-center horas-titles">
            <Row>
              <Col className="col-1">8h</Col>
              <Col className="col-1">10h</Col>
              <Col className="col-1">12h</Col>
              <Col className="col-1">14h</Col>
              <Col className="col-1">16h</Col>
              <Col className="col-1">18h</Col>
              <Col className="col-1">20h</Col>
              <Col className="col-1">22h</Col>
              <Col className="col-1">24h</Col>
              <Col className="col-1">2h</Col>
              <Col className="col-1">4h</Col>
              <Col className="col-1">6h</Col>
            </Row>
          </Col>
        </Row>
        
        {valores.medicacao.map( ({farmaco, dose, frequencia, via, h8, h10, h12, h14, h16, h18, h20, h22, h24, h2, h4, h6}, index) => (
          <Row className="linha-medicacao mb-3" key={index}>
            <Col className="col-1 col-to-colapse">
              <Button variant="outline-danger" onClick={() => removeMedicacao(index)}>
                <FontAwesomeIcon icon={faTrashAlt}/>
              </Button>
            </Col>
            <Col className="col-2">
              <FormInput title="Fármaco" type="text" mb="mb-0" value={farmaco} onChange={(e) => updateMedicacao('farmaco', e.target.value, index)}/>
            </Col>
            <Col className="col-1">
              <FormInput title="Dose" type="text" mb="mb-0" value={dose} onChange={(e) => updateMedicacao('dose', e.target.value, index)}/>
            </Col>
            <Col className="col-1">
              <FormInput title="Frequência" type="text" mb="mb-0" value={frequencia} onChange={(e) => updateMedicacao('frequencia', e.target.value, index)}/>
            </Col>
            <Col className="col-1">
              <FormInput title="Via" type="text" mb="mb-0" value={via} onChange={(e) => updateMedicacao('via', e.target.value, index)}/>
            </Col>
            <Col className="col-6 horas-checkboxes">
              <Row>
                <Col className="col-1 align-self-center"><Form.Check checked={h8}  type="checkbox" onChange={(e) => updateMedicacao('h8', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h10} type="checkbox" onChange={(e) => updateMedicacao('h10', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h12} type="checkbox" onChange={(e) => updateMedicacao('h12', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h14} type="checkbox" onChange={(e) => updateMedicacao('h14', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h16} type="checkbox" onChange={(e) => updateMedicacao('h16', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h18} type="checkbox" onChange={(e) => updateMedicacao('h18', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h20} type="checkbox" onChange={(e) => updateMedicacao('h20', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h22} type="checkbox" onChange={(e) => updateMedicacao('h22', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h24} type="checkbox" onChange={(e) => updateMedicacao('h24', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h2}  type="checkbox" onChange={(e) => updateMedicacao('h2', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h4}  type="checkbox" onChange={(e) => updateMedicacao('h4', e.target.value, index)} /></Col>
                <Col className="col-1 align-self-center"><Form.Check checked={h6}  type="checkbox" onChange={(e) => updateMedicacao('h6', e.target.value, index)} /></Col>
              </Row>
            </Col>
            
          </Row>
        ))}
       
        <div>
          <DashedButton text="Adicionar paciente" id="add-patient" onClick={addMedicacao}/> 
        </div>
      </Fieldset>
      
      <Fieldset title="Plano" className="plano-fieldset">
        <Row>
          <Col>
            <RichTextEditor id="plano" placeholder="Plano" tabIndex={40} editorState={plano} onChange={setPlano} toolbarActions={['bold', 'italic', 'underline']}/>
          </Col>
        </Row>
      </Fieldset>


      <Button variant="primary" type="submit">Guardar</Button>
      
    </Form>
    
  );
}

export default FichaInternamentoForm;
