import { EngineeringOutlined, PersonOutline, SevereColdOutlined, TipsAndUpdatesOutlined, VerifiedOutlined, } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import WCU from "../../assets/images/banners/whychooseus.webp";

const WhyChooseUs = () => {
    const chooseUsData = [
        {
            name: "Expertise & Experience", icons: <PersonOutline sx={{ height: '60px', width: '60px', color: '#123' }} />, title: "With years of experience in interior design and fit-out works, we bring creativity and professionalism to every project."
        },
        {
            name: "Tailored Solutions", icons: <TipsAndUpdatesOutlined sx={{ height: '60px', width: '60px', color: '#123' }} />, title: "Every space is unique, and we offer customized solutions designed to fit your specific needs, preferences, and budget."
        },
        {
            name: "Timely Delivery", icons: <VerifiedOutlined sx={{ height: '60px', width: '60px', color: '#123' }} />, title: "We understand the importance of deadlines and work diligently to complete projects on time without compromising on quality."
        },
        {
            name: "High-Quality Materials & Craftsmanship", icons: <SevereColdOutlined sx={{ height: '60px', width: '60px', color: '#123' }} />, title: "Our commitment to using only premium materials ensures long-lasting results."
        },
        {
            name: "Customer Satisfaction", icons: <EngineeringOutlined sx={{ height: '60px', width: '60px', color: '#123' }} />, title: "We pride ourselves on delivering exceptional service with a focus on customer satisfaction at every step of the process."
        }
    ]
    return (
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
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay
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
                    Why Choose Us
                </Typography>
            </Stack>

            <Grid container spacing={5} sx={{ position: "relative", zIndex: 2, mt: 1, color: "white" }}>
                {chooseUsData.map((t, index) => (
                    <Grid item xs={12} lg={6} key={index}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            {t.icons}
                            <Box>
                                <Typography variant="h6" fontWeight="bold">
                                    {t.name}
                                </Typography>
                                <Typography>
                                    {t.title}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WhyChooseUs;
