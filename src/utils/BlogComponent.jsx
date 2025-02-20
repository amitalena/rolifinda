/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Toolbar } from "@mui/material";
import SingleBlogCard from "./SingleBlogCard";

const BlogComponent = ({ blog, latestBlogs }) => {
    const { spacing } = useTheme();

    return (
        <>
            <Toolbar />
            <Box sx={{ mt: { lg: spacing(10), xs: 0 }, px: { lg: 8, md: 2, xs: 1 } }}>
                <Grid container spacing={3}>
                    {/* Main Blog */}
                    <Grid item xs={12} lg={8}>
                        <Stack spacing={2}>
                            <Card sx={{ height: "77vh", width: "100%", overflow: "hidden", boxShadow: 3 }}>
                                <CardMedia component="img" image={blog.imagePath} alt="Main Blog Image"
                                    sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                                />
                            </Card>
                            <Typography variant="h4" fontWeight="bold">{blog.title}</Typography>
                            <Typography variant="body1">{blog.createDate}</Typography>
                            <Typography variant="body2">{blog.description}</Typography>
                        </Stack>
                    </Grid>

                    {/* Latest Blogs Section */}
                    <Grid item xs={12} lg={4}>
                        <Box sx={{ background: '#e9e9e9', borderRadius: '10px', p: 2 }}>
                            <Typography variant="h4" sx={{ my: 2 }}>Recent Posts</Typography>
                            <Stack spacing={2}>
                                {latestBlogs.splice(1, 4).map((latestBlog) => (
                                    <SingleBlogCard
                                        key={latestBlog.id}
                                        blog={latestBlog}
                                        title={latestBlog.title}
                                        createDate={latestBlog.createDate}
                                        image={latestBlog.imagePath}
                                        onClick={() => console.log("Navigate to blog:", latestBlog.id)}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default BlogComponent;