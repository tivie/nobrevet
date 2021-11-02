import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import {useState} from "react";

function AddPatientModal({show, onHide, onSave}) {
  
  const [nome, setNome] = useState('');
  
  
  const criarPaciente = async function () {
    if (typeof nome === 'undefined' || nome.trim() === '') {
      return;
    }
    await onSave(nome.trim());
    setNome( '');
  };
  
  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Inserir novo Paciente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="adicionar-paciente-modal-button" label="nome" className="mb-3">
          <Form.Control type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required/>
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
        <Button variant="primary" onClick={criarPaciente} disabled={!nome.trim()}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPatientModal;
