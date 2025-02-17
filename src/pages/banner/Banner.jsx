import { Box, Grid, Card, CardMedia } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { electricData, furnitureData, tilesData } from "./bannerData";

const categories = [
    { title: "Furniture", data: furnitureData },
    { title: "Tiles", data: tilesData },
    { title: "Electronics", data: electricData }
];

const Banner = () => {
    return (
        <Box sx={{ m: 1, mt: 4, px: { md: 1, xs: 1 } }}>
            <Grid container spacing={2}>
                {categories.map((category, index) => (
                    <Grid item xs={12} lg={4} key={index}>
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 1,
                                autoplay: true,
                                interval: 3000,
                                pauseOnHover: true,
                                arrows: false,
                                pagination: false,
                                gap: "1rem"
                            }}
                        >
                            {category.data.map((item, i) => (
                                <SplideSlide key={i}>
                                    <Card elevation={2} sx={{ boxShadow: 3, borderRadius: 2 }}>
                                        <CardMedia
                                            component="img"
                                            image={item.imagePath}
                                            alt={item.name}
                                            sx={{ objectFit: "cover", height: '80vh', width: '100%', borderRadius: 2 }}
                                        />
                                    </Card>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Banner;
