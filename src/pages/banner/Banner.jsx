import { Box, Grid, Card, CardMedia, CardContent, Typography, Stack, Toolbar } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { electricData, furnitureData, tilesData } from "./bannerData";

// Merge all category data into one array
const allSlides = [
    ...furnitureData,
    ...tilesData,
    ...electricData
];

const Banner = () => {
    return (
        <Box sx={{ mt: { md: 3, xs: 5 } }}>
            <Toolbar />
            <Grid container>
                <Grid item xs={12}>
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 1,
                            autoplay: true,
                            interval: 3000,
                            pauseOnHover: true,
                            arrows: true,
                            pagination: false,
                            gap: "1rem"
                        }}
                    >
                        {allSlides.map((item, i) => (
                            <SplideSlide key={i}>
                                <Card elevation={0}>
                                    {/* Card Media (Image) */}
                                    <Box sx={{ position: "relative", width: "100%", height: "87vh" }}>
                                        <CardMedia
                                            component="img"
                                            image={item.imagePath}
                                            title={item.title}
                                            alt={item.name}
                                            sx={{
                                                objectFit: "cover",
                                                height: "100%",
                                                width: "100%",
                                            }}
                                        />
                                        {/* Overlay */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                                            }}
                                        />
                                    </Box>


                                    {/* Overlay Card Content */}
                                    <CardContent
                                        sx={{
                                            position: "absolute",
                                            top: { xs: 0, md: "25%" },
                                            left: { xs: 0, md: "10%" },
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                            color: "white",
                                            height: { md: "auto", xs: "100%" },
                                            width: { md: "400px", xs: "100%" },
                                            p: 2,
                                        }}
                                    >
                                        <Stack spacing={2} alignItems={'center'} sx={{ p: 5, pt: { md: 10, xs: 20 } }}>
                                            <Typography variant="h3" color="primary" fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body1">
                                                {item.description}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </SplideSlide>
                        ))}
                    </Splide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
