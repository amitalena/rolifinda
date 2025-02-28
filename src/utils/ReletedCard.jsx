/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react";
import { Box, Card, CardContent, Divider, Typography, useTheme } from "@mui/material";
import gsap from "gsap";

const ReletedCard = React.memo(({ view, handleClick }) => {
    const theme = useTheme();
    const imageRef = useRef(null);
    const overlayRef = useRef(null);
    const cardRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        // GSAP Hover Animation
        const hoverIn = () => {
            gsap.to(imageRef.current, { scale: 1.1, duration: 0.4, ease: "power2.out" });
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
        };

        const hoverOut = () => {
            gsap.to(imageRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
        };

        const cardElement = cardRef.current;
        if (cardElement) {
            cardElement.addEventListener("mouseenter", hoverIn);
            cardElement.addEventListener("mouseleave", hoverOut);
        }

        return () => {
            if (cardElement) {
                cardElement.removeEventListener("mouseenter", hoverIn);
                cardElement.removeEventListener("mouseleave", hoverOut);
            }
        };
    }, []);

    return (
        <Card
            onClick={() => handleClick(view.id)}
            ref={cardRef}
            elevation={0}
            sx={{ background: theme.palette.info.light, height: "100%", overflow: "hidden", position: "relative" }}
        >
            {/* view Image with Hover Effect */}
            <Box
                sx={{
                    m: 2,
                    height: { xs: "200px", sm: "250px", md: "250px" },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    ref={imageRef}
                    onClick={() => handleClick(view.id)}
                    style={{
                        height: "100%",
                        width: "100%",
                        background: `url(${view.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.3, ease-out"
                    }}
                >
                    <div
                        ref={overlayRef}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.3)",
                            opacity: 0,
                            transition: "opacity 0.3s ease-out",
                        }}
                    />
                </div>
            </Box>
            {/* view Content */}
            <CardContent>
                <Typography ref={textRef} onClick={() => handleClick(view.id)} variant="h6" fontWeight="bold">
                    {view.title}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography ref={textRef} variant="body2" color="text.secondary">
                    {view.description.length > 100
                        ? `${view.description.substring(0, 100)}...`
                        : view.description}
                </Typography>
            </CardContent>
        </Card>
    );
});

export default ReletedCard;
