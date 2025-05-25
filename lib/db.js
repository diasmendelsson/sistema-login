import pkg from 'pg';
const { Pool } = pkg;


// Altere esses dados com base na sua configuração
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, // tipo: 192.168.1.100
  database: process.env.DB_NAME,
  password:process.env.DB_PASSWORD,
  port:process.env.DB_PORT, // porta padrão do PostgreSQL
  
});

pool.connect()
  .then(() => console.log('Conectado ao PostgreSQL com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao PostgreSQL:', err));

export default pool;