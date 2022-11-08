import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";

const Layout = () => {
    console.log("mount")

    return(
        <>
            <HeaderNavbar/>
            <Outlet/>
        </>
    )
}

export default Layout