import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Box, Breadcrumbs, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Banner = ({ title, image, height, titleVariant = {}, text, overlayColor, spacingConfig = { lg: 6, md: 1, xs: 1 }, containerStyles = {} }) => {
    const { palette, spacing } = useTheme();

    // Fade-in animation
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <Box
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            sx={{
                position: 'relative',
                mx: { xs: 0 },
                backgroundImage: `url(${image})`,
                height: height,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: overlayColor,
                    zIndex: 1
                },
                zIndex: 0,
                ...containerStyles
            }}
        >
            <Box
                sx={{
                    px: { lg: spacing(spacingConfig.lg), md: spacing(spacingConfig.md), xs: spacing(spacingConfig.xs) },
                    position: 'relative', py: 12,
                    zIndex: 2
                }}
            >
                <Stack
                    spacing={2}
                    direction="column"
                    sx={{
                        mt: 10,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant={titleVariant}
                        sx={{
                            color: '#FDFDFD',
                            fontSize: { md: '36px', xs: '30px' },
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ flexShrink: 0 }}
                    >
                        <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: '#b71c1c' }} />} aria-label="breadcrumb">
                            <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: '#fdfdfd' }} to="/">Home</Link>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.light }}>
                                {text}
                            </Typography>
                        </Breadcrumbs>
                    </motion.div>
                </Stack>
            </Box>
        </Box>
    );
};

export default Banner;
