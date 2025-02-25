/* eslint-disable react/prop-types */
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Toolbar, Breadcrumbs } from "@mui/material";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const ViewComponent = ({ blog }) => {
    const { palette, spacing } = useTheme();

    return (
        <>
            <Box sx={{ mt: { lg: spacing(12), xs: 0 }, mb: 2, px: { lg: 8, md: 2, xs: 1 } }}>
                <Toolbar />
                <Box sx={{ p: 1, my: 2, background: palette.info.main }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ flexShrink: 0 }}
                    >
                        <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: '#b71c1c' }} />} aria-label="breadcrumb">
                            <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: '#b71c1c' }} to="/">Home</Link>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                                {blog.title}
                            </Typography>
                        </Breadcrumbs>
                    </motion.div>
                </Box>
                <Grid container spacing={3}>
                    {/* Main view */}
                    <Grid item xs={12} lg={7}>
                        <Stack spacing={2}>
                            <Card elevation={0} sx={{ height: "70vh", width: "100%", overflow: "hidden", }}>
                                <CardMedia
                                    component="img"
                                    image={blog.imagePath}
                                    alt="Main Blog Image"
                                    sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                                />
                            </Card>

                        </Stack>
                    </Grid>

                    {/* content side */}
                    <Grid item xs={12} lg={5}>
                        <Stack spacing={2}>
                            <Typography variant="h4" fontWeight="bold">
                                {blog.title}
                            </Typography>
                            <Typography variant="body2">{blog.description}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ViewComponent;