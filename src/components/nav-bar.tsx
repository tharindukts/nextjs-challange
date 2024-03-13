
import Link from "next/link";
import {getSession, logout} from "../utils/util";
import {redirect} from "next/navigation";

function NavBar() {
    const token = getSession().token

    const logoutSession = () => {
        "use client"
        logout()
        redirect('/login')
    }
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <ul className="flex space-x-4">

                        {
                            token ?
                                <>
                                    <li>
                                        <Link href="/building" className="text-white hover:text-gray-300">Building
                                            Info</Link>
                                    </li>
                                    <li>

                                        <Link href={"#"}  className="text-white hover:text-gray-300">Logout</Link>
                                    </li>
                                </> :
                                <li>
                                    <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
                                </li>
                        }


                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;