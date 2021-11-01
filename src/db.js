import Dexie from "dexie";

const db = new Dexie('nobrevet');
db.version(1).stores(
  { Pacientes: '++id,nome' }
);

export default db;

