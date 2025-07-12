'use client';

import { useTransition } from 'react';
import { deleteProduto } from '@/lib/deleteProduto';

import { AiFillDelete } from "react-icons/ai";

export default function DeleteProduto({ id }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deleteProduto(id);
    });
  };

  return (
    <button
      onClick={handleDelete}
       className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 cursor-pointernpm cursor-pointer"
   
    > 
    <AiFillDelete />
      
    </button>
  );
}