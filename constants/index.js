
import { RiHome3Line } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";


export const sidebarLinks = [
    {
        icon: RiHome3Line,
        route: "/",
        label: "Home",
    },
     {
        icon: MdAddBox,
        route: "/cadastrar",
        label: "Cadastrar produtos",
    },
     {
        icon: FaBoxes,
        route: "/produtos",
        label: "Ver produtos",
    },
]