import NavBarLink from "./nav-bar-link";
import {deleteSession, getSession} from "../app/action";

async function NavBar() {
    const session = await getSession()

    const logoutSession = async () => {
        "use server"
        await deleteSession()
    }
    return (
        <>
            <NavBarLink token={session ? session.token : ""} logout={logoutSession}/>
        </>
    );
}

export default NavBar;