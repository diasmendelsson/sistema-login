

import Link from "next/link"
import Logout from "@/components/Logout"

import pool from "@/lib/db";
import { decrypt } from '@/lib/session';
import { cookies } from "next/headers";

import { getSession } from '@/lib/session'

import Sidebar from "@/components/SideBar";


export default async function DashEstoque({children}){

    const session = await getSession()
     console.log(session)
    

    return(
        <main className="flex ">
 
            <div className=" border-r border-gray-200">

             <Sidebar />
             <Logout />
            </div>

            {children}
      </main>
    )
}