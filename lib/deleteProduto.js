'use server';

import poolCadastro from '@/lib/dbCadastro';
import { revalidatePath } from 'next/cache';

export async function deleteProduto(id) {
  try {
    await poolCadastro.query('DELETE FROM produtos WHERE id = $1', [id]);
    revalidatePath('/produtos'); // Atualiza a lista após deletar
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
  }
}