
import Image from "next/image";
import Link from "next/link";

import Logout from "@/components/Logout";


export default function Home() {


 
  return (
    <div className="flex  flex-col h-98 items-center justify-center">

      <div className="mt-8 font-bold text-xl text-gray-600">Olá, usuário</div>
      <h1 className="font-bold text-4xl text-blue-400 text-shadow-2xs">Gerencie seu Estoque </h1>

      <Link href='/sign-in' className="mt-10 font-bold text-xl text-gray-600"> Fazer login </Link>

      <Logout />
       
    </div>
  );
}
