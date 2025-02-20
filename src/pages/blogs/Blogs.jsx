import { useState } from "react";
import Banner from "../../utils/Banner";
import { AccountCircle, Message } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Grid, Stack, Typography, Pagination, Button, Badge } from "@mui/material";
import { motion } from "framer-motion";
import { blogData } from "./blogData";
import Ab1 from '../../assets/images/interior/f6.webp';
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();
    const itemsPerPage = 6;
    const [page, setPage] = useState(1);

    const handlePageChange = (_, value) => setPage(value);

    // Paginated Data
    const paginatedData = blogData.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const handleClick = (id) => {
        navigate(`/singleblog${id}`)
    }
    return (
        <>
            <Banner
                title="Blogs"
                image={Ab1}
                height="50vh"
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.7)"
                spacingConfig={{ lg: 8, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Blogs"
            />

            <Box sx={{ mt: 2, px: { lg: 8, md: 2, xs: 1 } }}>
                <Grid container spacing={2}>
                    {paginatedData.map((blog) => (
                        <Grid key={blog.id} item xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
                            <Card
                                elevation={2}
                                sx={{
                                    background: "#fdfdfd",
                                    position: "relative",
                                    height: "100%",
                                    borderRadius: "10px",
                                    overflow: "hidden",

                                }}
                            >
                                {/* Motion Background Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    style={{
                                        height: "250px",
                                        width: "100%",
                                        background: `url(${blog.imagePath})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        position: "relative",
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.03)"
                                        }
                                    }}
                                >
                                    {/* Hover Overlay */}
                                    <motion.div
                                        whileHover={{ background: "rgba(0,0,0,0.5)" }}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            transition: "background 0.3s ease",
                                            background: "rgba(0,0,0,0.3)"
                                        }}
                                    />
                                </motion.div>

                                {/* Blog Date Tag */}
                                <Box sx={{
                                    top: 10,
                                    left: 10,
                                    borderRadius: "10px",
                                    position: "absolute",
                                    px: 2,
                                    py: 1,
                                    background: "#FFFFFF"
                                }}>
                                    <Typography variant="body2" fontWeight="bold" color="primary.dark">
                                        {blog.createDate}
                                    </Typography>
                                </Box>

                                {/* Blog Author & Comments */}
                                <Box sx={{ px: 3, position: 'relative', bottom: 40 }}>
                                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                                        <Typography display="flex" alignItems="center" sx={{ color: '#fefefe' }} variant="body2">
                                            <AccountCircle sx={{ mr: 1 }} /> {blog.createdBy}
                                        </Typography>
                                        <Badge color="secondary" badgeContent={blog.comment} showZero>
                                            <Message sx={{ color: '#fdfdfd' }} />
                                        </Badge>
                                    </Stack>
                                </Box>

                                {/* Blog Content */}
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {blog.heading}
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.description.length > 100
                                            ? `${blog.description.substring(0, 100)}...`
                                            : blog.description}
                                    </Typography>
                                    <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleClick(blog.id)}>
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Pagination */}
                <Stack alignItems="center" sx={{ my: 3 }}>
                    <Pagination
                        count={Math.ceil(blogData.length / itemsPerPage)}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        sx={{
                            "& .Mui-selected": { backgroundColor: "#FF8080", color: "#FDFDFD" },
                        }}
                    />
                </Stack>
            </Box>
        </>
    );
};

export default Blogs;