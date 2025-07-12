'use server';

import poolCadastro from "./dbCadastro";
import { revalidatePath } from "next/cache";

export async function getProdutos() {
  try {
    const res = await poolCadastro.query('SELECT * FROM produtos');
    revalidatePath('/produtos');
    return res.rows;
     
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    return [];
  }
}


// lib/produtos.js
{ /*export const getProdutos = async () => {
  // Simule produtos vindos do banco de dados
  return [
    { id: 1, nome: 'Teclado Mecânico', preco: 199.90 },
    { id: 2, nome: 'Mouse Gamer', preco: 129.90 },
    { id: 3, nome: 'Monitor 24"', preco: 849.00 },
  ];
};

*/}

{ /*
     {produto.length === 0 ? (
        <p className="text-gray-600">Nenhum produto cadastrado ainda.</p>
      ) : (

    
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {produto.map((produto) => (
            <li
              key={produto.id}
              className="p-4 border border-gray-200 rounded-md shadow bg-white"
            >
              <h2 className="text-lg font-semibold text-blue-400">{produto.nome}</h2>
              <p className="text-gray-700 text-sm mb-2">{produto.descricao || 'Sem descrição'}</p>

              <div className="text-sm space-y-1 text-gray-600">
                <p><strong>Categoria:</strong> {produto.categoria || 'Não especificada'}</p>
                <p>
                  <strong>Preço:</strong> {formatAmount(produto.preco)}
                </p>
                <p>
                  <strong>Estoque:</strong> {produto.quantidade} {produto.unidades}
                </p>
                {produto.codigo_barras && (
                  <p><strong>Cód. Barras:</strong> {produto.codigo_barras}</p>
                )}
              </div>

             
              <div className="flex gap-4 jusitfy-between">
      
              
              <div className="flex gap-1 border">
                <DeleteProduto />
                 {/* Botão de diminuir * 
                <form action={async () => {
                  "use server";
                  const novaQtd = produto.quantidade > 0 ? produto.quantidade - 1 : 0;
                  await atualizarQuantidade(produto.id, novaQtd);
                }}>
                  <button
                    className="w-10 px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
                  >
                    -
                  </button>
                </form>

                {/* Botão de aumentar  
                <form action={async () => {
                  "use server";
                  await atualizarQuantidade(produto.id, produto.quantidade + 1);
                }}>
                  <button
                    className="w-10 px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
                  >
                    +
                  </button>
                </form>
              </div>
              </div>
            </li>
          ))}
        </ul>
*/}