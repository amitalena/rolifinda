import { Box, Stack, Typography, useTheme, Grid, Button, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import Ab1 from '../../assets/images/banners/blog.webp';
import Banner from '../../utils/Banner';

const AboutUs = () => {
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
            <Toolbar />
            <Banner
                title="About Us"
                image={Ab1}
                height="50vh"
                titleVariant="h2"
                titleStyles={{ fontFamily: 'Poppins', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                overlayColor="rgba(0,0,0,0.5)"
                spacingConfig={{ lg: 8, md: 2, xs: 1 }}
                containerStyles={{ overflow: 'hidden' }}
                text="About Us"
            />
            <Box sx={{ px: { lg: spacing(6), md: spacing(1), xs: spacing(3) }, pt: 2, backgroundColor: '#F0F1F9' }}>
                {/* Info Section */}
                <Grid container sx={{ alignItems: 'center', background: '#FDFDFD', justifyContent: 'space-around', mt: 1, p: spacing(3) }}>
                    {/* Grid 1 - Animate from left */}
                    <Grid item md={7} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
                        <Typography variant="h5" sx={{ mb: '10px' }}>
                            <span style={{ color: '#b71c1c' }}><b>OUR INFO</b></span>
                        </Typography>
                        <Typography variant='h4' fontWeight={'bold'}>Welcome to our site!</Typography>
                        <Stack sx={{ pr: { md: spacing(10), xs: 0 } }}>
                            <Typography variant='h4' fontWeight={'semi-bold'}>Professional, compliant, knowledgeable and attentive - all words synonymous with us.</Typography>
                            <Box sx={{ pr: spacing(5) }}>
                                <Typography variant='body2' py={spacing(3)}>People come to us because they want, need and expect something that they just won&#39;t get from other companies. We haven&apos;t earned our reputation of leading company overnight. It has taken years of listening to what contractors and freelancers hunger for - and we deliver it in abundance!</Typography>
                                <Typography variant='body2'>Our service is different to other companies because of our unrivalled expertise, attention to detail and outstanding customer service. Companies come and go but RAD has stood the test of time because we understand our industry and more importantly your needs.</Typography>
                            </Box>
                            <Box sx={{ width: '200px', py: spacing(2) }}> <Button variant={'contained'}>Know More</Button></Box>
                        </Stack>
                    </Grid>

                    {/* Grid 2 - Animate from right */}
                    <Grid item md={5} xs={12} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
                        <Box component="img" src={Ab1} sx={{ width: '100%', height: '40vh' }} alt={Ab1} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AboutUs;