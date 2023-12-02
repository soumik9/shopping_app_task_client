import { MdOutlineSpaceDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { PiUserSwitch } from "react-icons/pi";

export const menuItems = [
    { to: "/", text: "Dashboard", icon: <MdOutlineSpaceDashboard /> },
    { to: "/items", text: "Items", icon: <MdProductionQuantityLimits /> },
    { to: "/Users", text: "Users", icon: <PiUserSwitch /> },
];