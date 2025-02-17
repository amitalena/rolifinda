import { useEffect, useState } from 'react';
import {
    AppBar, Box, IconButton, Stack, Toolbar, Typography, Avatar, Chip,
    Button, Drawer, Divider, useTheme, MenuItem,
    OutlinedInput
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Close as CloseIcon, MenuRounded as MenuIcon, LogoutOutlined, Search } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Rolif_img from '../assets/images/logo/rolif.png'
import TopBar from './TopBar';
import { menuData } from './menuData';
import DropdownMenu from './DropDownMenu';
import AccordionMenu from './AccordionMenu';

const Logo = () => (
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ height: 40, display: { md: 'none', xs: 'block' }, width: 150 }}>
                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
            </Box>
        </Link>
    </Typography>
);

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ menuOpen, handleDrawerToggle }) => (
    <Drawer anchor="left" open={menuOpen} onClose={handleDrawerToggle}>
        <Box component={motion.div}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{ py: 1, height: '100%', width: 250, overflowY: 'auto' }}>
            <AccordionMenu menuData={menuData} onClose={handleDrawerToggle} />
        </Box>
    </Drawer>
);

// eslint-disable-next-line react/prop-types
const ProfileMenu = ({ profileOpen, closeProfileMenu, handleLogout }) => (
    <Drawer
        anchor="right"
        open={profileOpen}
        onClose={closeProfileMenu}
        sx={{ '& .MuiDrawer-paper': { width: 260 } }}
    >
        <Box
            component={motion.div}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            sx={{ p: 3 }}
        >
            <Stack spacing={2} alignItems="center">
                <Typography variant="h6" fontWeight="bold">Amit Kumar</Typography>
                <Typography variant="body2">Full Stack Web Developer</Typography>
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

// eslint-disable-next-line react/prop-types
const PublicAppBar = ({ isVisible }) => {
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
            elevation={1}
            position="fixed"
            sx={{
                color: theme.palette.primary.contrastText,
                background: scrolling ? '#FFFFFF' : '#3f51b5',
                transition: 'background 0.3s ease',
            }}
        >
            <TopBar isVisible={isVisible} />
            <Toolbar >
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', px: { md: 2, lg: 2, xs: 0 } }}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        {/* Mobile Menu Button */}
                        <Chip
                            icon={menuOpen ? <CloseIcon sx={{ color: "#FFF" }} /> : <MenuIcon sx={{ color: theme.palette.primary.light }} />}
                            label="Menu"
                            variant='none'
                            onClick={() => setMenuOpen(prev => !prev)}
                            sx={{ cursor: "pointer", '&:hover': { backgroundColor: "#FFF" }, p: 1, borderRadius: '50px', py: 2.2, background: '#fff' }}
                        />

                        {/* Logo (Visible on scroll) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scrolling ? 1 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {scrolling && <Logo />}
                        </motion.div>
                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {menuData.map((menuItem, index) => (
                                <DropdownMenu key={index} items={[menuItem]} />
                            ))}
                        </Box>
                    </Stack>

                    {/* Profile / Auth Buttons */}
                    <Stack direction="row" gap={2}>
                        {isLoggedIn ? (
                            <Chip
                                avatar={<Avatar />}
                                label="Profile"
                                variant="outlined"
                                onClick={() => setProfileOpen(true)}
                                sx={{ cursor: 'pointer' }}
                            />
                        ) : (
                            <Button component={Link} to="/login">Login</Button>
                        )}
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
        </AppBar >
    );
};

export default PublicAppBar;
