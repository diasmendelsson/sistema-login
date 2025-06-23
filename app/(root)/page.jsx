
import Image from "next/image";
import Link from "next/link";

import { getSession } from '@/lib/session'
import pool from "@/lib/db";
import { decrypt } from '@/lib/session';
import { cookies } from "next/headers";

import Logout from "@/components/Logout";


export default async function Home() {

const session = await getSession()
 console.log(session)

  return (
    
     <div className="p-8">
                <h1 className="text-3xl font-bold text-indigo-400 mb-4">Gerencie seu Estoque </h1>

                <div className="mt-8 font-bold text-xl text-gray-600 ">

                    {session ? (
                    <h1>Bem-vindo, { session.userId.nome } </h1>
                ) : (
                    <h1>Você não está logado.</h1>
                )}
                </div>
       </div>
  );
}
