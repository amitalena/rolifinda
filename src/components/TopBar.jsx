import { Call, Public, Search, } from "@mui/icons-material";
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
                    px: { md: 2, lg: 6, xl: 6, xs: 2 },
                    py: 1,
                    display: { md: 'block', xs: 'none' },
                    background: '#FFF',
                    color: '#333'
                }}
                style={hoverStyle}
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
                                border: '1px solid #939393',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '50px'
                            }}
                            endAdornment={
                                <IconButton sx={hoverStyle}><Search fontSize="small" /></IconButton>
                            }
                            placeholder="Search Package" />
                        {/* select language */}
                        <Stack spacing={1} direction={'row'} sx={{ alignItems: 'center', display: 'flex', }}>

                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems={'center'}>
                        <Call sx={{ fontSize: '40px' }} />
                        <Box>
                            <Typography>24 support</Typography>
                            <Typography>+91-0123456789</Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems={'center'}>
                        <Public sx={{ fontSize: '40px' }} />
                        <Box>
                            <Typography>All Over India</Typography>
                        </Box>
                    </Stack>
                </Stack>

            </Box >
        </motion.div >
    );
};

export default TopBar;
