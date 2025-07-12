'use client';

import { useTransition, useOptimistic } from 'react';
import atualizarQuantidade from '@/lib/atualizarQuantidade';

import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";


export default function AtualizarQuant({ produto }){


     const [isPending, startTransition] = useTransition();

     const [optimisticQuantidade, updateQuantidade] = useOptimistic(

        produto.quantidade,
        (state, newQty) => newQty
     );

      const handleUpdate = (delta) => {

      startTransition(() => {
      const novoValor = Math.max(0, optimisticQuantidade + delta);

      updateQuantidade(novoValor);              // ✅ agora dentro da transição
         
       

          atualizarQuantidade(produto.id, novoValor); // ✅ ainda server action
        });
      };

    return (
    <div>
        

      <div className="flex gap-2">

        <button
          onClick={() => handleUpdate(1)}
            className=" px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 cursor-pointernpm cursor-pointer"
        >
          <FaPlus />
        </button>

        <button
          onClick={() => handleUpdate(-1)}
           className=" px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 cursor-pointernpm cursor-pointer"
        >
          <RiSubtractFill />
        </button>
   
      </div>
    </div>
    )
}