import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Rolif_img from '../assets/images/logo/rolif.png';
import { Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';
// import Testi from '../assets/images/banners/testimonial.webp'

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
    const theme = useTheme();
    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        color: theme.palette.info.dark,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.deep,
            transform: 'scale(1.05)',
        },
    };
    return (
        <Box sx={{
            // background: `url(${Testi}) center/cover no-repeat`,
            background: theme.palette.info.deep,
            color: theme.palette.info.dark,
            transition: 'background 0.3s ease',
            py: 3, px: { md: 2, lg: 12, xl: 12, xs: 2 },
        }}>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={3} sm={6} md={6}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' />
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
                        <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' />
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
                                sx={hoverStyle}
                            >
                                {product.name}
                            </Button>
                        ))}
                    </Stack>
                </Grid>

                <Grid item xs={12} lg={1.5} sm={6} md={6}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' />
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
                                sx={hoverStyle}
                            >
                                {list.name}
                            </Button>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' />
                        <Typography color='#FDFDFD' variant='h6' py={1} fontWeight={'bold'} textTransform={'uppercase'}>
                            Contact Info
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={1}>
                        <Typography><Typography component={'span'} sx={{ color: '#fdfdfd' }}>Address:</Typography> Shop no 36, B1A, First Floor Sector 51 Noida 201301, Landmark : Near IDBI Bank</Typography>
                        <Typography><Typography component={'span'} sx={{ color: '#fdfdfd' }}>Email:</Typography> info@soundville.in</Typography>
                        <Typography><Typography component={'span'} sx={{ color: '#fdfdfd' }}>Phone:</Typography> +91-9870287980</Typography>
                    </Stack>

                </Grid>
                <Grid item xs={12} lg={3}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Divider sx={{ background: theme.palette.primary.deep, height: '20px', width: '0px' }} orientation='vertical' />
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
                                width: 'auto',
                                color: '#000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '0px'
                            }}
                            endAdornment={
                                <IconButton color="primary" variant="contained" sx={{ '&:hover': { background: 'none', color: 'theme.palette.info.dark' } }}><Send fontSize="small" /></IconButton>
                            }
                            placeholder="Search Package" />
                    </Stack>
                </Grid>
            </Grid>

            <Divider sx={{ background: '#fff', my: 2 }} />
            <Box sx={{ display: { md: 'flex', xs: 'block' }, justifyContent: { md: 'space-between', xs: "center" }, alignItems: 'center' }}>
                <Box component={Link} to={'/'} style={{ textDecoration: "none", color: theme.palette.info.main }}>
                    <Typography textAlign={'center'} variant="body2">
                        © All Rights Reserved by <Typography component={'span'} color='primary'>Rolif India.</Typography>
                    </Typography>
                </Box>
                <Stack direction="row" justifyContent={'center'}>
                    <IconButton variant="none" sx={hoverStyle}><Facebook /></IconButton>
                    <IconButton variant="none" sx={hoverStyle}><Instagram /></IconButton>
                    <IconButton variant="none" sx={hoverStyle}><Twitter /></IconButton>
                    <IconButton variant="none" sx={hoverStyle}><LinkedIn /></IconButton>
                </Stack>

            </Box>
        </Box >
    );
};

export default Footer;
