'use server'

import poolCadastro from "./dbCadastro";
import { revalidatePath } from "next/cache";


export default async function atualizarQuantidade(id, novaQuantidade){
    try{
        await poolCadastro.query('UPDATE produtos SET quantidade = $1 WHERE id = $2', [
            novaQuantidade,
            id,
        ]);

    revalidatePath('/produtos'); // 👈 força revalidação da página
     } catch (error) {
    console.error('Erro ao atualizar quantidade:', error);
  }
}

