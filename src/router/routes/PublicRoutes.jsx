import { Outlet } from "react-router-dom"
import PublicAppBar from "../../components/PublicAppBar"
import Footer from '../../components/Footer';
import { Toolbar } from "@mui/material";


const PublicRoutes = () => {
    return (
        <>
            <PublicAppBar />
            <Toolbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicRoutes