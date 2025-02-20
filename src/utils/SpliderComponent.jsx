/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CardComponent from "./CardComponent";
import React from "react";
const SliderComponent = ({ data, title, onClick }) => {
    return (
        <Box sx={{ width: { xl: "92vw", md: "97vw", xs: '100vw' }, background: "#F0F2F9", px: { md: 2, lg: 6, xl: 6, xs: 2 }, }}>
            {/* Header */}
            <Box>
                <Typography variant="h4" fontWeight={'bold'} sx={{ fontWeight: "bold", py: 2 }}>
                    {title}
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
                    perPage: 4,
                    breakpoints: {
                        1980: { perPage: 4 }, // xxl
                        1368: { perPage: 4 }, // xl
                        1024: { perPage: 3 }, // lg
                        768: { perPage: 2 }, // md
                        480: { perPage: 1 }, // sm
                        0: { perPage: 1 }, // xs
                    },
                }}
            >
                {data?.map((item) => (
                    <SplideSlide key={item.id} style={{ display: "flex", justifyContent: "center" }}>
                        <CardComponent
                            id={item.id}
                            imagePath={item.imagePath}
                            title={item.title}
                            onClick={onClick}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default React.memo(SliderComponent);