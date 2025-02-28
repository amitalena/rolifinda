/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Toolbar, Breadcrumbs } from "@mui/material";
import { motion } from 'framer-motion';
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ReletedProduct from "../pages/furniture/ReletedProduct";

const ViewComponent = React.memo(({ view }) => {
    const { palette, spacing } = useTheme();
    const [selectedImage, setSelectedImage] = useState(view.imagePath);
    const [zoomOrigin, setZoomOrigin] = useState("center");
    const images = view.images || [{ imagePath: view.imagePath }];

    const handleThumbnailClick = useCallback((imagePath) => {
        setSelectedImage(imagePath);
    }, []);

    const handleMouseMove = useCallback((event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;
        setZoomOrigin(`${x}% ${y}%`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setZoomOrigin("center");
    }, []);

    return (
        <>
            <Box sx={{
                mt: { xl: spacing(11), lg: spacing(11), md: spacing(2), sm: spacing(2), xs: spacing(1) },
                mb: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 }
            }}>
                <Toolbar />
                <Box sx={{ p: 1, my: 2, background: palette.info.main }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ flexShrink: 0 }}
                    >
                        <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                            <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: palette.primary.main }} to="/">Home</Link>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                                {view.title}
                            </Typography>
                        </Breadcrumbs>
                    </motion.div>
                </Box>
                <Grid container spacing={3}>
                    {/* Thumbnail Images */}
                    <Grid item xs={12} xl={1} lg={2} md={2} sm={12}>
                        <Stack sx={{ display: "flex", alignItems: "center", flexDirection: { md: "column", xs: "row" } }} spacing={2}>
                            {images.map((image, index) => (
                                <Box key={index}
                                    sx={{
                                        height: "90px", width: "90px", cursor: "pointer",
                                        transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.05)" },
                                    }}
                                    onClick={() => handleThumbnailClick(image.imagePath)}
                                >
                                    <img src={image.imagePath} alt={`Thumbnail ${index + 1}`} height="90%" width="90%" />
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Main Image Display */}
                    <Grid item xs={12} xl={6} md={10} lg={6}>
                        <Stack direction="row" spacing={2}>
                            <Card elevation={0}
                                sx={{ height: "auto", overflow: "hidden", position: "relative", }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <CardMedia component="img" image={selectedImage} alt="Main view Image"
                                    sx={{
                                        height: "60vh", width: "100%", transition: "transform 0.3s ease-in-out",
                                        transformOrigin: zoomOrigin, "&:hover": { cursor: "pointer", transform: "scale(1.7)" },
                                    }}
                                />
                            </Card>
                        </Stack>
                    </Grid>

                    {/* Content Side */}
                    <Grid item xs={12} xl={4} md={12} lg={4}>
                        <Stack spacing={2}>
                            <Typography variant="h4" color="primary.main" fontWeight="bold">
                                {view.title}
                            </Typography>
                            <Typography variant="body2">{view.description}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <ReletedProduct />
        </>
    );
});

export default ViewComponent;