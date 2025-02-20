/* eslint-disable react/prop-types */
import { AccountCircle, Message } from "@mui/icons-material";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Stack,
    Typography,
    Button,
    Badge
} from "@mui/material";
import { motion } from "framer-motion";
import { blogData } from "./blogData";
import { useNavigate } from "react-router-dom";

// Reusable Blog Card Component
const BlogCard = ({ blog, handleClick }) => (
    <Card
        elevation={2}
        sx={{
            background: "#fff",
            height: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",
        }}
    >
        {/* Blog Image with Hover Effect */}
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => handleClick(blog.id)}
            style={{
                height: "250px",
                width: "100%",
                background: `url(${blog.imagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
        >
            <motion.div
                whileHover={{ background: "rgba(0,0,0,0.5)" }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)",
                    transition: "background 0.3s ease",
                }}
            />
        </motion.div>

        {/* Date Badge */}
        <Box
            sx={{
                position: "absolute",
                top: 10,
                left: 10,
                borderRadius: "10px",
                px: 2,
                py: 1,
                background: "#FFFFFF",
            }}
        >
            <Typography variant="body2" fontWeight="bold" color="primary.dark">
                {blog.createDate}
            </Typography>
        </Box>

        {/* Author & Comments */}
        <Box sx={{ px: 3, position: "relative", bottom: 40 }}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Typography display="flex" alignItems="center" sx={{ color: "#fefefe" }} variant="body2">
                    <AccountCircle sx={{ mr: 1 }} /> {blog.createdBy}
                </Typography>
                <Badge color="secondary" badgeContent={blog.comment} showZero>
                    <Message sx={{ color: "#fdfdfd" }} />
                </Badge>
            </Stack>
        </Box>

        {/* Blog Content */}
        <CardContent>
            <Typography onClick={() => handleClick(blog.id)} variant="h6" fontWeight="bold">
                {blog.heading}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" color="text.secondary">
                {blog.description.length > 100
                    ? `${blog.description.substring(0, 100)}...`
                    : blog.description}
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => handleClick(blog.id)}>
                Read More
            </Button>
        </CardContent>
    </Card>
);

const LatestBlog = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        const selectedBlog = blogData.find((item) => item.id === id);
        if (selectedBlog) {
            localStorage.setItem("Furniture", JSON.stringify(selectedBlog));
            navigate(`/singleblog/${id}`);
        }
    };

    return (
        <Box sx={{ my: 2, px: { xs: 1, sm: 2, md: 4, lg: 8 } }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
                Latest Blog
            </Typography>
            <Grid container spacing={2}>
                {blogData.slice(0, 3).map((blog) => (
                    <Grid key={blog.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <BlogCard blog={blog} handleClick={handleClick} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestBlog;
