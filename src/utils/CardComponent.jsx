/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CardComponent = ({ id, imagePath, title, onClick }) => {
    return (
        <Card
            elevation={0}
            sx={{
                background: "#fdfdfd",
                position: "relative",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: "8px",
                overflow: "hidden",
                m: 1,
                width: "100%",
            }}
            onClick={() => onClick(id)}
        >
            {/* Motion Background Image */}
            <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    height: "250px",
                    width: "100%",
                    background: `url(${imagePath})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                {/* Hover Overlay */}
                <motion.div
                    whileHover={{ background: "rgba(0,0,0,0.5)" }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", transition: "background 0.3s ease", }}
                />
            </motion.div>
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;