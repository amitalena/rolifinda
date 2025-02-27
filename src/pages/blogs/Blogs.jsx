import { useState, useCallback } from "react";
import Banner from "../../utils/Banner";
import { Box, Grid, Stack, Pagination, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Ab1 from '../../assets/images/interior/f6.webp';
import { blogData } from "./blogData";
import BlogCard from "../../utils/BlogCard";

const Blogs = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const itemsPerPage = 8;
    const [page, setPage] = useState(1);

    // Paginated Data
    const paginatedData = blogData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    // Memoized Click Handler
    const handleClick = useCallback((id) => {
        navigate(`/singleblog/${id}`);
    }, [navigate]);

    // Pagination Handler
    const handlePageChange = useCallback((_, value) => {
        setPage(value);
    }, []);

    return (
        <>
            <Banner
                title="Blogs"
                image={Ab1}
                height="45vh"
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.7)"
                spacingConfig={{ lg: 8, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Blogs"
            />

            <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 12, xl: 12, xs: 2 } }}>
                <Grid container spacing={2}>
                    {paginatedData.slice(0, 6).map((blog) => (
                        <Grid key={blog.id} item xs={12} sm={6} md={6} lg={4}>
                            <BlogCard blog={blog} handleClick={handleClick} />
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
                            "& .Mui-selected": { backgroundColor: theme.palette.primary.main, color: theme.palette.info.main },
                        }}
                    />
                </Stack>
            </Box>
        </>
    );
};

export default Blogs;
