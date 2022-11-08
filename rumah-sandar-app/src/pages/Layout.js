import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderNavbar from "../components/HeaderNavbar";

const Layout = () => {
    return(
        <>
            <HeaderNavbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout