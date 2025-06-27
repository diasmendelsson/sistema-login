import pg from 'pg';
import { Pool } from 'pg';


const globalForCadastro = globalThis;

let poolCadastro;

if(!globalForCadastro.pgPoolCadastro) {
    globalForCadastro.pgPoolCadastro = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    })
}

poolCadastro = globalForCadastro.pgPoolCadastro;

export default poolCadastro;