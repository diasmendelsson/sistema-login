
import Image from "next/image";
import Link from "next/link";

import { getSession } from '@/lib/session'
import pool from "@/lib/db";
import { decrypt } from '@/lib/session';
import { cookies } from "next/headers";

import Logout from "@/components/Logout";


import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";


export default async function Home() {

const session = await getSession()
 console.log(session)

 

  return (
    
     <div className="p-8">

          <div className="  ">
            <header  className="">
                <HeaderBox
                  type="saudações"
                  title="Bem vindo"
                  user={session.userId.nome || 'Convidado'}
                  subtext="Acesse e gerencie seu estoque com eficiência"/>

                  <TotalBalanceBox
                    accouts={[]}
                    totalBanks={500}
                    totalCurrentBalance={500245.39}/>
            </header>

            </div>
       </div>
  );
}
