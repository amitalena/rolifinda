/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
    AppBar, Box, Stack, Toolbar, Typography, Chip,
    Button, Drawer, Divider, useTheme, MenuItem,
    IconButton,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Close as CloseIcon, MenuRounded as MenuIcon, LogoutOutlined, AccountCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Rolif_img from '../../assets/images/logo/rolif.png'
import DropdownMenu from '../DropdownMenu';
import { menuData } from '../menuData';
import NewTopBar from './NewTopBar';
import AccordionMenu from './../AccordionMenu';


const Logo = () => (
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ height: 40, display: { md: 'none', xs: 'block' }, width: 150 }}>
                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
            </Box>
        </Link>
    </Typography>
);


const MobileMenu = ({ menuOpen, handleDrawerToggle }) => (
    <Drawer anchor="left" open={menuOpen} onClose={handleDrawerToggle} sx={{ '& .MuiDrawer-paper': { width: 260, borderTopRightRadius: '20px', borderBottomRightRadius: '20px' } }}>
        <Box component={motion.div}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{ py: 1, height: '100%', width: 240, }}>
            <AccordionMenu menuData={menuData} onClose={handleDrawerToggle} />
        </Box>
    </Drawer>
);


const ProfileMenu = ({ profileOpen, closeProfileMenu, handleLogout }) => (
    <Drawer
        anchor="right"
        open={profileOpen}
        onClose={closeProfileMenu}
        sx={{ '& .MuiDrawer-paper': { width: 260, borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' } }}
    >
        <Box
            component={motion.div}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{ p: 2 }}
        >
            <Stack spacing={1}>
                <Typography variant="h6" fontWeight="bold">Amit Kumar</Typography>
                <Typography variant="body2">amitk221003@gmail.com</Typography>
                <Divider sx={{ width: '100%' }} />
                <MenuItem onClick={closeProfileMenu} component={Link} to="/profile" sx={{ color: '#304ffe' }}>
                    View & Update Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <LogoutOutlined sx={{ fontSize: 18, color: '#717DA4', mr: 1 }} /> Logout
                </MenuItem>
            </Stack>
        </Box>
    </Drawer>
);


const NewAppBar = ({ isVisible }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const isLoggedIn = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrolling(window.pageYOffset > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                color: scrolling ? "#F12" : "#333",
                background: scrolling ? "#000" : "#000",
                transition: "background 0.3s ease-in-out",
                zIndex: 1100, // Ensures it stays above other content
            }}
        >
            {/* Top Bar */}
            <NewTopBar isVisible={!scrolling} />

            <Toolbar disableGutters>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        py: 2,
                        px: { md: 2, lg: 12, xl: 12, xs: 1 },
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo & Desktop Menu */}
                    <Stack direction="row" alignItems="center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scrolling ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Logo />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            {menuData.map((menuItem, index) => (
                                <DropdownMenu key={index} items={[menuItem]} />
                            ))}
                        </Box>
                    </Stack>

                    {/* Profile & Mobile Menu Toggle */}
                    <Stack direction="row" alignItems="center">
                        {isLoggedIn ? (
                            <IconButton
                                sx={{ cursor: "pointer", color: "#dfdfdf" }}
                                onClick={() => setProfileOpen(true)}
                            >
                                <AccountCircle sx={{ fontSize: "30px" }} />
                            </IconButton>
                        ) : (
                            <Button component={Link} to="/login">Login</Button>
                        )}

                        {/* Mobile Menu Toggle */}
                        <Chip
                            sx={{
                                pl: 1,
                                pt: 0.5,
                                display: { md: "none", xs: "block" },
                                cursor: "pointer",
                                background: "#fff",
                            }}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            icon={
                                menuOpen ? (
                                    <CloseIcon sx={{ color: "#FFF" }} />
                                ) : (
                                    <MenuIcon sx={{ color: "#FF8080" }} />
                                )
                            }
                            variant="outlined"
                        />
                    </Stack>
                </Box>
            </Toolbar>

            {/* Mobile Menu Drawer */}
            <MobileMenu menuOpen={menuOpen} handleDrawerToggle={() => setMenuOpen(false)} />

            {/* Profile Menu Drawer */}
            <ProfileMenu
                profileOpen={profileOpen}
                closeProfileMenu={() => setProfileOpen(false)}
                handleLogout={handleLogout}
            />
        </AppBar>
    );
};

export default NewAppBar;
