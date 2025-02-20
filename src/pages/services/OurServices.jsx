import { Box, Stack, Typography, useTheme, Grid, Button, } from '@mui/material';
import { motion } from 'framer-motion';
import Ab1 from '../../assets/images/interior/f6.webp';
import WCU from "../../assets/images/banners/whychooseus.webp";
const OurServices = () => {
    const { spacing } = useTheme();

    // Animation variants
    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
    };

    const slideRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
    };

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    py: 6,
                    px: { md: 15, xs: 2 },
                    background: `url(${WCU}) center/cover no-repeat`,
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        zIndex: 1,
                    },
                }}
            >
                <Stack sx={{ position: "relative", zIndex: 2 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        textAlign="center"
                        color="white"
                    >
                        Our Services
                    </Typography>
                </Stack>
                <Grid container sx={{ alignItems: 'center', justifyContent: 'space-around', mt: 1, p: spacing(3) }}>
                    {/* Grid 1 - Animate from left */}
                    <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
                        <Typography variant='h4' fontWeight={'bold'}>Welcome to our site!</Typography>
                        <Stack sx={{ pr: { md: spacing(10), xs: 0 } }}>
                            <Typography variant='h4' fontWeight={'semi-bold'}>Residential Interior Design & Fit-Out</Typography>
                            <Box sx={{ pr: spacing(5) }}>
                                <Typography variant='body2' py={spacing(3)}>People come to us because they want, need and expect something that they just won&#39;t get from other companies. We haven&apos;t earned our reputation of leading company overnight. It has taken years of listening to what contractors and freelancers hunger for - and we deliver it in abundance!</Typography>
                                <Typography variant='body2'>Our service is different to other companies because of our unrivalled expertise, attention to detail and outstanding customer service. Companies come and go but RAD has stood the test of time because we understand our industry and more importantly your needs.</Typography>
                            </Box>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'}>Know More</Button></Box>
                        </Stack>
                    </Grid>

                    {/* Grid 2 - Animate from right */}
                    <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                        <Box component="img" src={Ab1} sx={{ width: '100%', height: '50vh' }} alt={Ab1} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default OurServices;