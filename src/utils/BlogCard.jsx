/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { AccountCircle, Message } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Stack, Typography, Button, Badge, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { format, parseISO, isValid } from "date-fns";

const BlogCard = React.memo(({ blog, handleClick }) => {
    const theme = useTheme();
    const formattedDate = isValid(parseISO(blog.createDate))
        ? format(parseISO(blog.createDate), "MMM dd, yyyy")
        : "Invalid Date";

    return (
        <Card
            elevation={0}
            sx={{ background: theme.palette.info.light, height: "100%", overflow: "hidden", position: "relative" }}
        >
            {/* Blog Image with Hover Effect */}
            <Box
                sx={{
                    m: 2,
                    width: { md: "90%", xs: "100vw" },
                    height: { xs: "200px", sm: "250px", md: "250px" },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
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
            </Box>

            {/* Date Badge */}
            <Box
                sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    px: 2,
                    py: 1,
                    background: "rgba(0,0,0,0.8)",
                }}
            >
                <Typography variant="body2" fontWeight="bold" color="info.light">
                    {formattedDate}
                </Typography>
            </Box>

            {/* Author & Comments */}
            <Box sx={{ px: 3, position: "relative", bottom: 0 }}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <Typography display="flex" alignItems="center" sx={{ color: "#9e9e9e" }} variant="body2">
                        <AccountCircle sx={{ mr: 1 }} /> {blog.createdBy}
                    </Typography>
                    <Badge color="primary" badgeContent={blog.comments} >
                        <Message sx={{ mr: 0, color: "#9e9e9e" }} />
                    </Badge>
                </Stack>
            </Box>

            {/* Blog Content */}
            <CardContent>
                <Typography onClick={() => handleClick(blog.id)} variant="h6" fontWeight="bold">
                    {blog.title}
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
});

export default BlogCard;
