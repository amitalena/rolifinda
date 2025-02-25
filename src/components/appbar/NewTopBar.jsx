import { MailOutline, PhoneAndroidOutlined, } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Rolif_img from '../../assets/images/logo/rolif.png';
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const Logo = () => (
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ height: 60, width: 150 }}>
                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
            </Box>
        </Link>
    </Typography>
);

const NewTopBar = () => {
    const { palette } = useTheme();

    const [isVisible, setIsVisible] = useState(true);

    // Optimized scroll handler with useCallback
    const handleScroll = useCallback(() => {
        setIsVisible(window.scrollY < 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // Reusable styles
    const hoverStyle = {
        color: '#000',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { background: 'none', color: '#002884', transform: 'scale(1.05)' }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ display: isVisible ? "block" : "none" }}
        >
            <Box
                sx={{
                    px: { md: 2, lg: 12, xl: 12, xs: 1 },
                    py: 1,
                    display: { md: 'block', xs: 'block' },
                    background: '#FFF',
                    color: '#333'
                }}
                style={hoverStyle}
            >
                <Stack
                    sx={{
                        flexDirection: { md: 'row', xs: 'column' },
                        alignItems: 'center',
                        gap: 2,
                        justifyContent: { md: 'space-between', xs: 'center' }
                    }}
                >
                    {/* Contact Info */}
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", color: palette.primary.main }}>
                        <Logo />
                    </Box>
                    {/* search bar */}
                    <SearchComponent />
                    <Box
                        sx={{
                            display: { md: 'flex', xs: 'flex' },
                            alignItems: 'center',
                            justifyContent: { md: 'center', xs: 'center' },
                            gap: 2,
                            flexDirection: { md: 'row', xs: 'column' }
                        }}
                    >
                        <Stack direction="row" spacing={1} alignItems={'center'}>
                            <MailOutline sx={{ fontSize: '40px', color: '#9e9e9e' }} />
                            <Box>
                                <Typography variant="body2">Email Us</Typography>
                                <Typography variant="body2">rolif12@gmail.com</Typography>
                            </Box>
                            <Divider sx={{ background: '#e9e9e9', height: '50px', width: '0px', display: { md: 'block', xs: 'none' } }} orientation='vertical' />
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems={'center'}>
                            <PhoneAndroidOutlined sx={{ fontSize: '40px', color: '#9e9e9e' }} />
                            <Box>
                                <Typography variant="body2">CALL US NOW FOR</Typography>
                                <Typography variant="h6" fontWeight={'bold'}>+91-0123456789</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

            </Box >
        </motion.div >
    );
};

export default NewTopBar;