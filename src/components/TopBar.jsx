import { Call, Email, Facebook, Instagram, LinkedIn, Search, Twitter } from "@mui/icons-material";
import { Box, IconButton, OutlinedInput, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Rolif_img from '../assets/images/logo/rolif.png';
import { Link } from "react-router-dom";

const Logo = () => (
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ height: 60, width: 150 }}>
                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
            </Box>
        </Link>
    </Typography>
);

const TopBar = () => {
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
                    px: { md: 2, lg: 5, xs: 2 },
                    py: 1,
                    display: { md: 'block', xs: 'none' },
                    background: '#FFF',
                }}
            >
                <Stack sx={{ flexDirection: { md: 'row', xs: 'column' }, alignItems: 'center', justifyContent: { md: 'space-between', xs: 'center' } }} >
                    {/* Contact Info */}
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", color: palette.primary.main }}>
                        <Logo />
                    </Box>

                    {/* Pay Now Link */}
                    <Stack spacing={1} direction={'row'} sx={{ alignItems: 'center', display: { md: 'flex', xs: 'block' }, }}>
                        <OutlinedInput fullWidth type="search" size="small"
                            sx={{
                                width: { xs: '100%', md: '50vw' },
                                color: '#000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '50px'
                            }}
                            endAdornment={
                                <IconButton color="error" variant="contained" sx={{ '&:hover': { background: 'none', color: '#F56960' } }}><Search fontSize="small" /></IconButton>
                            }
                            placeholder="Search Package" />
                        {/* select language */}
                        <Stack spacing={1} direction={'row'} sx={{ alignItems: 'center', display: 'flex', }}>

                        </Stack>
                    </Stack>
                    <Stack direction="row">
                        <IconButton variant="none" sx={hoverStyle}><Facebook /></IconButton>
                        <IconButton variant="none" sx={hoverStyle}><Instagram /></IconButton>
                        <IconButton variant="none" sx={hoverStyle}><Twitter /></IconButton>
                        <IconButton variant="none" sx={hoverStyle}><LinkedIn /></IconButton>
                    </Stack>
                </Stack>

            </Box >
        </motion.div >
    );
};

export default TopBar;
