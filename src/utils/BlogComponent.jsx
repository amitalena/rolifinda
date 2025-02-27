/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, Toolbar, CardContent, Breadcrumbs } from "@mui/material";
import SingleBlogCard from "./SingleBlogCard";
import { AccessTimeOutlined, KeyboardDoubleArrowRight, MessageRounded } from "@mui/icons-material";
import { format, parseISO, isValid } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const BlogComponent = ({ blog, latestBlogs }) => {
    const { spacing, palette } = useTheme();
    const navigate = useNavigate();
    const dFlex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.info.dark,
        gap: 1,
    }
    const handleClick = (id) => {
        navigate(`/singleblog/${id}`)
    }
    return (
        <>
            <Box sx={{ background: '#f1f2f9', mt: { xl: spacing(11), lg: spacing(11), md: spacing(2), sm: spacing(2), xs: spacing(1) }, mb: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 } }}>
                <Toolbar />
                <Box sx={{ p: 1, my: 2, background: palette.info.light }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ flexShrink: 0 }}
                    >
                        <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                            <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: palette.primary.main }} to="/">Home</Link>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                                {blog.title}
                            </Typography>
                        </Breadcrumbs>
                    </motion.div>
                </Box>
                <Grid container spacing={3}>
                    {/* Main Blog */}
                    <Grid item xs={12} lg={8}>
                        <Card elevation={0} sx={{ height: "auto", p: { xs: 2, sm: 2, md: 2, lg: 3, xl: 5 }, overflow: "hidden" }}>
                            <CardMedia component="img" image={blog.imagePath} alt="Main Blog Image"
                                sx={{ height: "60vh", width: "100%" }}
                            />
                            <CardContent>
                                <Stack direction="row" spacing={5} alignItems="center">
                                    {/* Date Section */}
                                    <Typography variant="body2" sx={dFlex}>
                                        <AccessTimeOutlined sx={{ fontSize: '20px', mr: 1 }} />
                                        {blog?.createDate && isValid(parseISO(blog.createDate))
                                            ? format(parseISO(blog.createDate), "MMMM dd, yyyy")
                                            : "Invalid Date"}
                                    </Typography>

                                    {/* Comments Section */}
                                    <Typography variant="body2" sx={dFlex}>
                                        <MessageRounded sx={{ fontSize: '20px', mr: 1 }} />
                                        {blog?.comments ?? "0"}
                                    </Typography>

                                </Stack>
                                <Stack spacing={2} mt={1}>
                                    <Typography variant="h4" fontWeight="bold">{blog.title}</Typography>
                                    <Typography variant="body2">{blog.description}</Typography>
                                </Stack>
                            </CardContent>
                        </Card>

                    </Grid>

                    {/* Latest Blogs Section */}
                    <Grid item xs={12} lg={4}>
                        <Card elevation={0} sx={{ p: 2, mb: 1 }}>
                            <Stack spacing={1}>
                                <Typography variant="h4">Categories</Typography>
                                <Typography sx={{ color: palette.info.dark }}> {blog.categories}</Typography>
                            </Stack>
                        </Card>
                        <Card elevation={0} sx={{ p: 2 }}>
                            <Typography variant="h4" sx={{ my: 2 }}>Recent Posts</Typography>
                            <Stack spacing={2}>
                                {latestBlogs.splice(1, 4).map((latestBlog) => (
                                    <SingleBlogCard
                                        key={latestBlog.id}
                                        blog={latestBlog}
                                        title={latestBlog.title}
                                        createDate={latestBlog.createDate}
                                        image={latestBlog.imagePath}
                                        onClick={() => handleClick(latestBlog.id)}
                                    />
                                ))}
                            </Stack>
                        </Card>
                    </Grid>
                </Grid >
            </Box >
        </>
    );
};

export default BlogComponent;