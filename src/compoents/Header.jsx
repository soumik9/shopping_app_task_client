/* eslint-disable no-unused-vars */
import { useAtom } from "jotai";
import { Link } from "react-router-dom"
import { atomIsAuthenticate, atomToken, atomUser } from "../hooks/atomState";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const Header = () => {

    // states
    const [token, setToken] = useAtom(atomToken);
    const [isAuthenticate, setIsAuthenticate] = useAtom(atomIsAuthenticate);
    const [user, setUser] = useAtom(atomUser);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setToken('');
        setIsAuthenticate(false);
        setUser(null);
    }

    return (
        <header className="bg-primary py-2 text-white sticky top-0 z-10">
            <div className="container flex items-center justify-between">

                <Link to='/'>
                    <h1 className="text-2xl font-bold">E-Pay</h1>
                </Link>

                <nav className=" flex gap-5">

                    <Link
                        to='/my-orders'
                        className="text-white hover:text-gray-300 px-4 py-2"
                    >
                        My Orders
                    </Link>

                    <div className="relative" role="button" onClick={toggleDropdown}>

                        <div className="flex items-center gap-2.5 relative top-1">
                            <img src={`https://ui-avatars.com/api/?name=${user.name}`} className="rounded-full h-8" />
                            <p className="hover:text-gray-300 hover:underline trans">{user.name}</p>
                            <FiChevronDown />
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute top-10 right-1 bg-white border rounded-md shadow-md w-[150px]">

                                <p className="border-b text-primary text-center py-2">Profile</p>

                                <ul className="mt-1.5">
                                    <li className="px-4 py-2">
                                        <button
                                            className="hover:underline trans bg-purple-400 px-4 py-1.5 rounded-md w-full"
                                            onClick={() => handleLogout()}
                                        >
                                            Logout
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        )}
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header