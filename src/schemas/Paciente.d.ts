interface Paciente {
    id: string;
    nome: string;
    dataAtual: Date;
    localDeInternamento: string;
    especie: string;
    raca: string;
    idade: string;
    sexo: string;
    tutor: string;
    contactoTutor: string;
    ncliente: string;
    pesoEntrada: string;
    pesoDia: string;
    foiReferenciado: boolean;
    referenciador: string;
    contactoRef: string;
    horaRubrica: string;
    dataEntrada: Date;
    medico: string;
    localCateter: string;
    dataCateter: Date;
    dataTrocaCateter: Date;
    medicacao: any[];
    diagnostico: string;
    sintomas: string;
    plano: string;
}
