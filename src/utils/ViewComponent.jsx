/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Toolbar } from "@mui/material";

const ViewComponent = ({ blog }) => {
    const { spacing } = useTheme();

    return (
        <>
            <Toolbar />
            <Box sx={{ mt: { lg: spacing(10), xs: 0 }, mb: 2, px: { lg: 8, md: 2, xs: 1 } }}>
                <Grid container spacing={3}>
                    {/* Main view */}
                    <Grid item xs={12} lg={8}>
                        <Stack spacing={2}>
                            <Card sx={{ height: "70vh", width: "100%", overflow: "hidden", boxShadow: 3 }}>
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
                    <Grid item xs={12} lg={4}>
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