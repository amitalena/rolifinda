import { Toolbar } from "@mui/material"
import Banner from "./banner/Banner"
import TilesPage from "./tiles/TilesPage"
import Furniture from "./furniture/Furniture"
import WhyChooseUs from "./chooseus/WhyChooseUs"
import ElectricPage from "./electric/ElectricPage"
import OurServices from "./services/OurServices"
import LatestBlog from "./blogs/LatesBlog"
import OurTestimonial from "./testimonial/OurTestimonial"

const Home = () => {
    return (
        <>
            <Toolbar />
            <Banner />
            <Furniture />
            <TilesPage />
            <ElectricPage />
            <WhyChooseUs />
            <OurServices />
            <LatestBlog />
            <OurTestimonial />
        </>
    )
}

export default Home;