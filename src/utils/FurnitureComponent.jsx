/* eslint-disable react/prop-types */
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CardComponent from "./CardComponent";
import React, { useMemo } from "react";

const FurnitureComponent = ({ data = [], title, onClick }) => {
    const theme = useTheme();
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const isMD = useMediaQuery(theme.breakpoints.up("md"));
    const isSM = useMediaQuery(theme.breakpoints.up("sm"));

    // Determine `perPage` dynamically based on screen size
    const perPage = isXL ? 4 : isLG ? 3 : isMD ? 2 : isSM ? 2 : 1;

    // Memoized styles for performance optimization
    const containerStyles = useMemo(() => ({
        background: "#f1f1f1",
        width: { xl: "88vw", md: "96vw", xs: "110vw" },
        px: { lg: theme.spacing(10), md: theme.spacing(4), sm: theme.spacing(2), xs: theme.spacing(2) },
        py: { md: 5, lg: 5, sm: 3, xs: 1 },
    }), [theme]);

    const titleStyles = useMemo(() => ({
        variant: "h4",
        fontWeight: "bold",
        py: 2,
        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Responsive font size
    }), []);

    // Optimized Splide settings
    const sliderOptions = useMemo(() => ({
        type: "loop",
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: false,
        pauseOnHover: true,
        perPage,
    }), [perPage]);


    return (
        <Box sx={containerStyles}>
            {/* Header */}
            <Box>
                <Typography {...titleStyles}>{title}</Typography>
                <Divider sx={{ background: theme.palette.primary.deep, height: '3px', width: '180px' }} />
            </Box>

            {/* Splide Slider */}
            <Splide options={sliderOptions}>
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
export default React.memo(FurnitureComponent);