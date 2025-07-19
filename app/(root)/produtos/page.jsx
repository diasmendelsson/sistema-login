 'use server'
// app/produtos/page.js
import poolCadastro from "@/lib/dbCadastro";
import { formatAmount } from "@/lib/utils";

import { deleteProduto } from "@/lib/deleteProduto";
import DeleteProduto from "@/components/DeleteProducts";

import { Suspense } from "react";

import atualizarQuantidade from "@/lib/atualizarQuantidade";
import { AiFillDelete } from "react-icons/ai";

import ProdutoItem from "@/components/ProdutoItem";
import AtualizarQuant from "@/components/AtualizarQuant";

import { getSession } from '@/lib/session'
import pool from "@/lib/db";
import { cookies } from 'next/headers';

export default async function Produtos() {


const session = await getSession();
   
   
     // Corrigindo o acesso
  const userId = session.userId.userId
  const nome = session?.user?.nome || 'Convidado';


   const res = await poolCadastro.query('SELECT * FROM produtos  WHERE usuario_id = $1 ORDER BY id DESC',
    [ session.userId.userId ]);
   const produtos = res.rows;


 
  
  return (
          <main className="p-6">
           <h1 className="text-3xl font-bold text-blue-400 mb-4">Estoque de Produtos</h1>

                
          <Suspense fallback={<div>Carregando...</div>}>
          
     
           {produtos.length === 0 ? ( 
             <p className="text-gray-600">Nenhum produto cadastrado ainda.</p>
           ) : (
             <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

               {produtos.map((produto) => (
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
     
                 <div className="flex gap-2 mt-4">
                   <DeleteProduto  id={produto.id} />

                   <AtualizarQuant   key={produto.id} produto={produto} /> 
                 </div>
                 </li>
               ))}
             </ul>
           )}

           </Suspense>
         </main>
  );
}