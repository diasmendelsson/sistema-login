'use client' 

import cadastrarProd from "@/lib/cadastrar";
import { Suspense, useActionState, useState } from 'react';

import ProdutoForm from "@/components/ProdutoForm";


const initialState = {
    message: '',
}



export default  function Cadastrar() {


  const [state, action, isPending] = useActionState( cadastrarProd, initialState );

  return (

    <main className="mx-auto p-6 w-4xl py-12">
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Cadastrar Produto</h1>

      <form  action={action} className="sm:max-w-3xl space-y-4 bg-white p-6 border border-gray-200 rounded shadow">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome do Produto
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: Teclado Mecânico"
          />
        </div>


      <div>
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
            Preço (R$)
          </label>
          <input
            type="number"
            step="0.01"
            id="preco"
            name="preco"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: 199.90"
          />
        </div>

           <div>
          <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: 20"
          />
        </div>

 
          <div className=' flex justify-center mb-4'>
             { state.message && (
              <p className={state.error ? "text-red-600" : "text-green-600"}>
                {state.message}
              </p>
            )}
           </div>
    
        <button
          type="submit"
          className=" flex items-center justify-center cursor-pointer w-full py-2 px-4 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition"
        >
        {isPending ? (
                  <div className="inline-block w-5  h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Cadastrar'
                )}
        </button>
      </form>
    </main>
  );
}
