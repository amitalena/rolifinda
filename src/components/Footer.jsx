import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Rolif_img from '../assets/images/logo/rolif.png';
import { Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';

const productLink = [
    { name: "Living Room", route: '/living-room' },
    { name: "Floar Tiles", route: '/floar-tiles' },
    { name: "Cerimic", route: '/cerimic' },
    { name: "Technical", route: '/prcelain' },
];
const aboutLink = [
    { name: "About Us", route: '/aboutus' },
    { name: "Blogs", route: '/blogs' },
    { name: "Our Service", route: '/services' },
    { name: "Contact Us", route: '/contactus' },
];

const Footer = () => {
    const navigate = useNavigate();

    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        color: '#939393',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: '#FDFDFD',
            transform: 'scale(1.05)',
        },
    };
    return (
        <Box sx={{
            color: '#939393',
            backgroundColor: '#222',
            px: { xs: 2, lg: 6, xl: 6, md: 2 },
            py: { xs: 2, md: 5 },
        }}>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={3} sm={6} md={6}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: '#FF8080', height: '20px', width: '2px' }} orientation='vertical' />
                        <Typography color='#FDFDFD' variant='h6' py={1} fontWeight={'bold'} textTransform={'uppercase'}>
                            About Rolif India
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{ height: 60, width: 150 }}>
                                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
                            </Box>
                        </Link>

                        <Typography variant='body2'>
                            The Company ROLIF INDIA PVT.LTD. started business services in 2013 as Lighting Solutions.
                            Later the company became an EP Electrical contracting company. This division plays a vital role
                            in project execution of other service divisions.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} lg={1.5} sm={6} md={6}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: '#FF8080', height: '20px', width: '2px' }} orientation='vertical' />
                        <Typography color='#FDFDFD' variant='h6' py={1} fontWeight={'bold'} textTransform={'uppercase'}>
                            Products
                        </Typography>
                    </Stack>
                    <Stack>
                        {productLink.map((product, index) => (
                            <Button
                                size='small'
                                key={index}
                                onClick={() => navigate(product.route)}
                                color="inherit"
                                sx={hoverStyle}
                            >
                                {product.name}
                            </Button>
                        ))}
                    </Stack>
                </Grid>

                <Grid item xs={12} lg={1.5} sm={6} md={6}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: '#FF8080', height: '20px', width: '2px' }} orientation='vertical' />
                        <Typography color='#FDFDFD' variant='h6' py={1} fontWeight={'bold'} textTransform={'uppercase'}>
                            About Us
                        </Typography>
                    </Stack>
                    <Stack>
                        {aboutLink.map((list, index) => (
                            <Button
                                size='small'
                                key={index}
                                onClick={() => navigate(list.route)}
                                color="inherit"
                                sx={hoverStyle}
                            >
                                {list.name}
                            </Button>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: '#FF8080', height: '20px', width: '2px' }} orientation='vertical' />
                        <Typography color='#FDFDFD' variant='h6' py={1} fontWeight={'bold'} textTransform={'uppercase'}>
                            Contact Info
                        </Typography>
                    </Stack>
                    <Stack direction="column">
                        <Typography>Address: Shop no 36, B1A, First Floor Sector 51 Noida 201301, Landmark : Near IDBI Bank</Typography>
                        <Typography>Email: info@soundville.in</Typography>
                        <Typography>Phone: +91-9870287980</Typography>
                    </Stack>

                </Grid>
                <Grid item xs={12} lg={3}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: '#FF8080', height: '20px', width: '2px' }} orientation='vertical' />
                        <Typography color='#FDFDFD' variant='h6' py={1} fontWeight={'bold'} textTransform={'uppercase'}>
                            Contact Info
                        </Typography>
                    </Stack>
                    <Typography>
                        Stay updated with our latest collection.
                        Subscribe to our newsletter
                    </Typography>
                    <Stack spacing={2} direction={'row'} sx={{ mt: 1, alignItems: 'center', display: { md: 'flex', xs: 'block' }, }}>
                        <OutlinedInput fullWidth type="search" size="small"
                            sx={{
                                width: { xs: '100%', md: '50vw' },
                                color: '#000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '50px'
                            }}
                            endAdornment={
                                <IconButton color="error" variant="contained" sx={{ '&:hover': { background: 'none', color: '#F56960' } }}><Send fontSize="small" /></IconButton>
                            }
                            placeholder="Search Package" />
                    </Stack>
                    <Stack>
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            Follow us on
                        </Typography>
                        <Stack direction="row">
                            <IconButton variant="none" sx={hoverStyle}><Facebook /></IconButton>
                            <IconButton variant="none" sx={hoverStyle}><Instagram /></IconButton>
                            <IconButton variant="none" sx={hoverStyle}><Twitter /></IconButton>
                            <IconButton variant="none" sx={hoverStyle}><LinkedIn /></IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <Divider sx={{ background: '#fff', mt: 2 }} />
            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                    © All Rights Reserved by Rolif India. Designed and Developed by Rolif India Pvt Ltd
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
