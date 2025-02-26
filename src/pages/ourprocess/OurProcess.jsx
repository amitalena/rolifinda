import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import { TipsAndUpdatesOutlined, VerifiedOutlined, SevereColdOutlined, Groups3Outlined } from "@mui/icons-material";

const processData = [
    { id: 1, color: "rgba(112,44,90,0.8)", title: "Meet Customers", icon: <Groups3Outlined sx={{ fontSize: "70px" }} />, description: "We begin by understanding your specific needs and project requirements. Our team works closely with you to recommend the best products for your space or project." },
    { id: 2, color: "rgba(44, 85, 112, 0.8)", title: "Planning & Research", icon: <TipsAndUpdatesOutlined sx={{ fontSize: "70px" }} />, description: "After selecting the products that suit your needs, we can also provide customizations to meet your exact specifications." },
    { id: 3, color: "rgba(106, 35, 44, 0.8)", title: "Finalize the Design", icon: <VerifiedOutlined sx={{ fontSize: "70px" }} />, description: "Once the order is confirmed, we ensure a smooth delivery process. We track your order to guarantee timely arrival and product quality." },
    { id: 4, color: "rgba(112, 104, 44, 0.8)", title: "Installation Assistance", icon: <SevereColdOutlined sx={{ fontSize: "70px" }} />, description: "For electrical items, we offer expert guidance on installation, and we provide recommendations for professional installation services if needed." },
];

const OurProcess = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 4, lg: 12 }, background: theme.palette.info.light }}>
            {/* Section Title */}
            <Typography variant="h3" fontWeight="bold" color="info.dark" textAlign="center" mb={3}>
                Our Working Process
            </Typography>
            <Divider sx={{ background: theme.palette.primary.main, height: 3, width: 120, mx: "auto", mb: 4 }} />

            {/* Process Cards */}
            <Grid container spacing={2} justifyContent="center">
                {processData.map((card) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                        <Card sx={{ borderRadius: 2, boxShadow: 1, height: '300px', position: "relative", textAlign: "center", p: 2 }}>
                            {/* Top Border with Dynamic Color */}
                            <Box sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "10px",
                                backgroundColor: card.color,
                            }} />

                            <CardContent>
                                <Stack spacing={2} alignItems="center">
                                    {/* Icon with proper color */}
                                    <Typography sx={{ color: card.color }}>
                                        {card.icon}
                                    </Typography>
                                    <Divider sx={{ background: theme.palette.primary.main, height: 2, width: 1000, mx: "auto", mb: 4 }} />
                                    {/* Title */}
                                    <Typography variant="h5" fontWeight="bold" color={card.color}>
                                        {card.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurProcess;
