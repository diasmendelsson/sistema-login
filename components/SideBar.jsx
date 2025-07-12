'use client'

import { MdInventory } from "react-icons/md";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";



 

export default function Sidebar( ){

const pathname = usePathname();

return(

        <div className=" w-fit flex flex-col bg-white  text-white max-md:hidden 2xl:w-[355px]">

            <div className="flex items-center justify-center h-16 text-center bg-blue-400 px-4 text-white font-bold flex items-center gap-2">
                <h1 className=" xl:block hidden">Estoque Online </h1>
                <MdInventory />
            </div>

            <nav className="h-3xl pt-8 px-8 text-gray-600 flex flex-col gap-4 ">
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    const Icon = item.icon;

                    return(
                        <Link className={cn(' flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start',{'bg-blue-400': isActive})}
                         href={item.route}
                         key={item.label}>
                          
                            <Icon className={cn({'brightness-[3] invert-0 text-white': isActive})}/> 
          
                             <p className={cn(' text-16 font-semibold text-gray-600 max-xl:hidden', {'!text-white' : isActive})}>{item.label}</p>
                         </Link>
                    )
                })}
            </nav>

           

        </div>
    )
}