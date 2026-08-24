import {
    Box,
    Container,
    Grid,
    Typography,
    Chip,
    Stack,
    Button,
    IconButton,
    Tooltip,
    Paper,
} from "@mui/material";

import {
    GitHub,
    LinkedIn,
    Email,
    Download,
    ArrowForward,
} from "@mui/icons-material";

export default function Hero({
    profile,
    onProjectsClick,
    onContactClick,
}) {
    return (
        <Box
            component="section"
            sx={{
                minHeight: "calc(100vh - 70px)",
                display: "flex",
                alignItems: "center",
                py: {
                    xs: 9,
                    md: 13,
                },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={6}
                    sx={{
                        alignItems: "center",
                    }}
                >
                    {/* Left side */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Chip
                            label={profile.role}
                            color="primary"
                            variant="outlined"
                            sx={{ mb: 3 }}
                        />

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: "3rem",
                                    sm: "4rem",
                                    md: "5.4rem",
                                },
                                lineHeight: 0.98,
                            }}
                        >
                            Hariprasad{" "}
                            <Box
                                component="span"
                                sx={{
                                    color: "primary.main",
                                }}
                            >
                                N
                            </Box>
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                mt: 3,
                                fontWeight: 650,
                                fontSize: {
                                    xs: "1.35rem",
                                    md: "1.8rem",
                                },
                            }}
                        >
                            Building reliable backend systems and
                            polished full-stack applications.
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                mt: 2.5,
                                maxWidth: 720,
                            }}
                        >
                            {profile.summary}
                        </Typography>

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={1.5}
                            sx={{ mt: 4 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForward />}
                                onClick={onProjectsClick}
                            >
                                View Projects
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<Download />}
                                component="a"
                                href={profile.resume}
                                download
                            >
                                Download Resume
                            </Button>

                            <Button
                                variant="text"
                                size="large"
                                startIcon={<Email />}
                                onClick={onContactClick}
                            >
                                Contact Me
                            </Button>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ mt: 3 }}
                        >
                            <Tooltip title="GitHub">
                                <IconButton
                                    component="a"
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <GitHub />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="LinkedIn">
                                <IconButton
                                    component="a"
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedIn />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Email">
                                <IconButton
                                    component="a"
                                    href={`mailto:${profile.email}`}
                                    aria-label="Email"
                                >
                                    <Email />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Grid>

                    {/* Right side */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 4,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: '"Fira Code", monospace',
                                    color: "primary.main",
                                    fontSize: "0.85rem",
                                    mb: 2,
                                }}
                            >
                                ~/hariprasad
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: '"Fira Code", monospace',
                                    fontSize: "0.86rem",
                                    lineHeight: 2,
                                    color: "text.secondary",
                                }}
                            >
                                const engineer = {"{"}
                                <br />
                                &nbsp;&nbsp;focus: ["backend", "full-stack"],
                                <br />
                                &nbsp;&nbsp;api: ["REST", "JWT", "RBAC"],
                                <br />
                                &nbsp;&nbsp;database: ["PostgreSQL"],
                                <br />
                                &nbsp;&nbsp;frameworks: ["FastAPI", "Spring Boot"],
                                <br />
                                &nbsp;&nbsp;frontend: ["React"],
                                <br />
                                &nbsp;&nbsp;status: "building"
                                <br />
                                {"}"};
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}