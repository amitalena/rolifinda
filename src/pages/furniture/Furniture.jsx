import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { furnitureData } from "./furnitureData";

const Furniture = () => {
    const navigate = useNavigate();

    const handleFurnitureClick = (id) => {
        navigate(`/singlefurniture/${id}`);
    };

    return (
        <Box sx={{ maxWidth: "1200px", overflow: "hidden", py: 4, px: 2 }}>
            {/* Header */}
            <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Interior Furniture
                </Typography>
            </Box>

            {/* Splide Slider */}
            <Splide
                options={{
                    type: "loop",
                    drag: "free",
                    focus: "center",
                    perPage: 4,
                    autoplay: true,
                    gap: "16px",
                    arrows: true,
                    pagination: false,
                    pauseOnHover: true,
                    breakpoints: {
                        1200: { perPage: 3 },
                        1024: { perPage: 2 },
                        768: { perPage: 1 },
                        375: { perPage: 1 },
                    },
                }}
            >
                {furnitureData.map((furniture) => (
                    <SplideSlide key={furniture.id}>
                        <Card
                            elevation={2}
                            sx={{
                                background: "#fdfdfd",
                                position: "relative",
                                height: "auto",
                                textAlign: "center",
                                cursor: "pointer",
                                borderRadius: "8px", // Added border radius for better UI
                                overflow: "hidden", // Ensure content doesn't overflow
                            }}
                            onClick={() => handleFurnitureClick(furniture.id)}
                        >
                            {/* Motion Background Image */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <CardMedia
                                    component="img"
                                    image={furniture.imagePath}
                                    alt={furniture.name}
                                    sx={{
                                        height: 250,
                                        width: "100%",
                                        objectFit: "cover", // Ensure the image covers the area
                                    }}
                                />
                            </motion.div>
                            <CardContent>
                                <Typography variant="h5" sx={{ py: 1, fontWeight: "bold" }}>
                                    {furniture.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    );
};

export default Furniture;