'use server'
import poolCadastro from "./dbCadastro"

import { getSession } from '@/lib/session'
import pool from "@/lib/db";
import { decrypt } from '@/lib/session';
import { cookies } from "next/headers";


export default async function cadastrarProd(prevState, formData){

  const session = await getSession()
  const userId = session?.user?.id;

  const nome = formData.get('nome')
  const  preco = formData.get('preco')
  const quantidade = formData.get('quantidade')
  const usuario_id = formData.get('usuario_id')

 const dados = {
        nome,
        preco,
      quantidade,
      usuario_id,
    }

  try{
    await poolCadastro.query(
      'INSERT INTO produtos (nome, preco, quantidade, usuario_id) VALUES ($1, $2, $3, $4)',
      [nome, preco, quantidade, userId]
    )
   

    return {
      error: false,
      message: 'Produto cadastrado com sucesso!',
    }
  } catch(error) {
    console.error('Erro ao enviar mensagem:', error)

    return{
      error: true,
      message: 'Erro ao cadastrar produto!',
    }
  }

}