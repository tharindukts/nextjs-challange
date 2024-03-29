import NavBarLink from "./navBarLink";
import {getSession} from "../app/actions/auth";

async function NavBar() {
    const session = await getSession();

    return (
        <>
            {
                session ?
                    <NavBarLink token={session.token} email={session.email} /> : ""
            }

        </>
    );
}

export default NavBar;