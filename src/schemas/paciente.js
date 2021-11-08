/**
 * 
 * @returns {Paciente}
 */
export default function getSchema() {
  return {
    _id: '',
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
    dataEntrada: null,
    medico: '',
    localCateter: '',
    dataCateter: null,
    dataTrocaCateter: null,
    medicacao: [],
    diagnostico: '<p><br></p>',
    sintomas: '<p><br></p>',
    plano: '<p><br></p>'
  }
};
