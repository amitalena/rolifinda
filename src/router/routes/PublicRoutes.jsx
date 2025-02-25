import { Outlet } from "react-router-dom"
import Footer from '../../components/Footer';
import { Toolbar } from "@mui/material";
import NewAppBar from "../../components/appbar/NewAppBar";


const PublicRoutes = () => {
    return (
        <>
            <NewAppBar />
            <Toolbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicRoutes