// app/produtos/page.js
'use client';
import { useEffect, useState } from 'react';
import { getProdutos } from '@/lib/produtos';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dados = await getProdutos();
      setProdutos(dados);
    }

    fetchData();
  }, []);

  return (
       <main className="p-6">
      <h1 className="text-2xl font-bold text-indigo-400 mb-4">Estoque de Produtos</h1>

      {produtos.length === 0 ? (
        <p className="text-gray-600">Nenhum produto cadastrado ainda.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <li
              key={produto.id}
              className="p-4 border border-gray-200 rounded-md shadow bg-white"
            >
              <h2 className="text-lg font-semibold text-indigo-400">{produto.nome}</h2>
              <p className="text-gray-700 text-sm mb-2">{produto.descricao || 'Sem descrição'}</p>

              <div className="text-sm space-y-1 text-gray-600">
                <p><strong>Categoria:</strong> {produto.categoria || 'Não especificada'}</p>
                <p>
                  <strong>Preço:</strong> R$ {Number(produto.preco).toFixed(2)}
                </p>
                <p>
                  <strong>Estoque:</strong> {produto.quantidade} {produto.unidade}
                </p>
                {produto.codigo_barras && (
                  <p><strong>Cód. Barras:</strong> {produto.codigo_barras}</p>
                )}
              </div>

              <button className="mt-4 px-4 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-500 cursor-pointernpm">
                Editar
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}