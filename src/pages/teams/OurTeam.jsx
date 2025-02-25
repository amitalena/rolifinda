import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { teamData } from "./teamData";
import TeamCard from "../../utils/TeamCard";
import Team from '../../assets/images/logo/team1.webp'
// Main OurTeam Component
const OurTeam = () => {
    const theme = useTheme();

    return (
        <Box sx={{ px: { xs: 2, md: 4, lg: 12 }, height: { md: '75vh', xs: '100%' }, textAlign: "center" }}>
            <Box sx={{
                position: "relative",
                py: 6,
                mt: 2,
                height: '35vh',
                background: `url(${Team}) center/cover no-repeat`,
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(232, 109, 16, 0.8)",
                    zIndex: 1,
                },
            }}>
                <Stack spacing={3}>
                    <Typography variant="h4" fontWeight={'bold'} sx={{ fontSize: '50px', color: theme.palette.info.main, zIndex: 2, mb: 3, }}>
                        Our Professional Team
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.info.main, textAlignl: 'center', px: 40, zIndex: 2, mb: 3, fontWeight: "bold" }}>
                        Pharetra ex. Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat,
                        lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet ante sem sed sapien</Typography>
                </Stack>

                <Box sx={{ position: 'absolute', zIndex: 3, py: 4, px: 10, top: '50%' }}>
                    <Grid container spacing={2} justifyContent="center">
                        {teamData.map((member) => (
                            <Grid key={member.id} item xs={12} sm={6} md={3}>
                                <TeamCard member={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default OurTeam;
