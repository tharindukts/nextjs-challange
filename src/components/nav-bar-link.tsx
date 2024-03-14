'use client'
import Link from "next/link";
import {deleteSession} from "../app/action";

interface NavBarLinkProps {
    session: string
}

function NavBarLink({token}: NavBarLinkProps) {

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

                                        <Link href="#" onClick={()=>deleteSession()}
                                              className="text-white hover:text-gray-300">
                                            Logout
                                        </Link>
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

export default NavBarLink;