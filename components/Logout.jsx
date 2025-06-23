import { logout } from "@/lib/action";
import { MdOutlineLogout } from "react-icons/md";

export default function Logout() {
  return (
     <form
          className="flex ml-6 mt-28 "
          action={async () => {
            'use server';
            await logout({ redirectTo: '/' });
          }}
        >
          <button className="flex items-center justify-center gap-2 rounded-md   cursor-pointer w-26">
            <div className="flex items-center gap-2 font-bold text-gray-600  hover:text-indigo-400 py-1"><MdOutlineLogout /> Sair</div>
          </button>
        </form>
  );
}