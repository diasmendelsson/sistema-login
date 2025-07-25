
'use server'
import Image from "next/image";
import Link from "next/link";

import { getSession } from '@/lib/session'
import pool from "@/lib/db";
import { decrypt } from '@/lib/session';
import { cookies } from "next/headers";

import { Suspense } from "react";
import Logout from "@/components/Logout";


import contarProduto from '@/lib/contarProduto';
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";




export default async function Home() {

const session = await getSession();

  // Corrigindo o acesso
 const userId = session?.user?.id;
const nome = session?.user?.nome || 'Convidado';

const resumo = await contarProduto();





  return (
    
     <div className="p-8">

      <Suspense fallback={<div>Carregando...</div>}>

          <div className="  ">
            <header  className="">
                <HeaderBox
                  type="saudações"
                  title="Bem vindo"
                  user={session.userId.nome || 'Convidado'}
                  subtext="Acesse e gerencie seu estoque com eficiência"/>

                  <TotalBalanceBox
                    accouts={[]}
                    totalBanks={resumo.total_unidades}
                    totalCurrentBalance={resumo.total_estoque}/>
            </header>

            </div>

            </Suspense>
       </div>
  );
}
