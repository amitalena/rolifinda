import { Toolbar } from "@mui/material"
import Banner from "./banner/Banner"
import TilesPage from "./tiles/TilesPage"
import Furniture from "./furniture/Furniture"
// import WhyChooseUs from "./chooseus/WhyChooseUs"
import ElectricPage from "./electric/ElectricPage"
import OurServices from "./services/OurServices"
import LatestBlog from "./blogs/LatesBlog"
import OurTestimonial from "./testimonial/OurTestimonial"
import ParaEffect from "./services/ParaEffect"
import WhyChooseUsN from "./chooseus/WhyChooseUsN"
import OurProcess from "./ourprocess/OurProcess"

const Home = () => {
    return (
        <>
            <Toolbar />
            <Banner />
            <Furniture />
            <TilesPage />
            <ElectricPage />
            <WhyChooseUsN />
            {/* <WhyChooseUs /> */}
            <ParaEffect />
            <OurServices />
            <OurProcess />
            <LatestBlog />
            <OurTestimonial />
        </>
    )
}

export default Home;