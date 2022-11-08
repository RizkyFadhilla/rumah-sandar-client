import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";

const Layout = () => {
    if(localStorage){
        <h1>loading</h1>
    }
    return(
        <>
            <HeaderNavbar/>
            <Outlet/>
        </>
    )
}

export default Layout