/* eslint-disable react/prop-types */
import { Card, CardMedia, Stack, Typography } from "@mui/material";

const SingleBlogCard = ({ blog, image, onClick }) => {
    return (
        <Card elevation={0} onClick={onClick}
            sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, cursor: "pointer" }}
        >
            <CardMedia component="img" image={image} alt="Blog Image"
                sx={{ height: "10vh", width: "100px", objectFit: "cover", borderRadius: 1 }}
            />
            <Stack>
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2" sx={{ color: '#f05' }}>{blog.createDate}</Typography>
            </Stack>
        </Card>
    );
};

export default SingleBlogCard;