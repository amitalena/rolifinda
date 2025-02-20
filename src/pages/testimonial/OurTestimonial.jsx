import { Box, Card, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { testiData } from "./testData";
import { FormatQuoteRounded, Star, StarHalfSharp } from "@mui/icons-material";

const OurTestimonial = () => {
    return (
        <Box sx={{ width: { xl: "86vw", md: "77vw", xs: '100vw' }, background: "#F0F2F9", px: { md: 2, lg: 12, xl: 12, xs: 2 }, }}>
            {/* Header */}
            <Box>
                <Typography variant="h4" fontWeight={'bold'} sx={{ fontWeight: "bold", textAlign: 'center', py: 2 }}>
                    Testminials
                </Typography>
            </Box>

            {/* Splide Slider */}
            <Splide
                options={{
                    type: "loop",
                    autoplay: true,
                    interval: 3000,
                    arrows: true,
                    pagination: false,
                    pauseOnHover: false,
                    perPage: 3,
                    breakpoints: {
                        1980: { perPage: 4 }, // xxl
                        1368: { perPage: 4 }, // xl
                        1024: { perPage: 4 }, // lg
                        768: { perPage: 4 }, // md
                        480: { perPage: 1 }, // sm
                        0: { perPage: 1 }, // xs
                    },
                }}
            >

                {testiData.map((item) => (
                    <SplideSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <Card elevation={0} sx={{ background: 'tranparent', m: 1, p: 4 }}>
                            <Typography variant="body2"><FormatQuoteRounded sx={{ color: '#f05' }} />{item.description}<FormatQuoteRounded sx={{ color: '#f05' }} /></Typography>
                            <Stack spacing={1} justifyContent={'space-between'} mt={1} direction={'row'}>
                                <Stack direction={'column'}>
                                    <Typography variant="h4">{item.name}</Typography>
                                    <Typography><Star /><Star /><Star /><Star /><StarHalfSharp /></Typography>
                                </Stack>
                                <Box sx={{ height: '90px', width: '90px', }}>
                                    <img src={item.imagePath} style={{ borderRadius: '50%', height: '100%', width: '100%' }} />
                                </Box>
                            </Stack>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Box >
    );
};

export default OurTestimonial;