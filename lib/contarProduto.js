import poolCadastro from '@/lib/dbCadastro';


import { getSession } from '@/lib/session'
import pool from "@/lib/db";
import { decrypt } from '@/lib/session';
import { cookies } from "next/headers";


export default async function contarProduto() {

  const session = await getSession();
  const userId = session?.user?.id;


  try {
    const resultado = await poolCadastro.query(
      'SELECT SUM(quantidade) AS total_unidades, SUM(quantidade * preco) AS total_estoque FROM produtos WHERE usuario_id = $1;',  [ session.userId.userId ]
    );

    // Extrai os dados da resposta
    const {total_unidades, total_estoque } = resultado.rows[0];


   

    // Retorna os valores
    return {
     total_unidades: Number(total_unidades)  || 0,
     total_estoque: Number(total_estoque) || 0,
    };
  } catch (error) {
    console.error('Erro ao obter resumo dos produtos:', error);
    throw error;
  }
}