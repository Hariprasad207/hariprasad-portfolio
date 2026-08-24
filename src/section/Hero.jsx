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
                minHeight: {
                    xs: "auto",
                    md: "calc(100vh - 64px)",
                },

                display: "flex",
                alignItems: "center",

                py: {
                    xs: 5,
                    sm: 7,
                    md: 13,
                },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 3,
                    },
                }}
            >
                <Grid
                    container
                    spacing={{
                        xs: 4,
                        md: 6,
                    }}
                    sx={{
                        alignItems: "center",
                    }}
                >
                    {/* Hero Content */}

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Chip
                            label={profile.role}
                            color="primary"
                            variant="outlined"
                            sx={{
                                mb: {
                                    xs: 2.5,
                                    md: 3,
                                },
                            }}
                        />

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: "2.75rem",
                                    sm: "4rem",
                                    md: "5.4rem",
                                },

                                lineHeight: 0.98,

                                wordBreak: "normal",
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
                                mt: {
                                    xs: 2.5,
                                    md: 3,
                                },

                                fontWeight: 650,

                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.8rem",
                                },

                                lineHeight: 1.35,
                            }}
                        >
                            Building reliable backend systems
                            and polished full-stack applications.
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                mt: 2.5,
                                maxWidth: 720,

                                fontSize: {
                                    xs: "0.98rem",
                                    md: "1rem",
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {profile.summary}
                        </Typography>

                        {/* CTA */}

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={1.5}
                            sx={{
                                mt: 3.5,
                                width: {
                                    xs: "100%",
                                    sm: "auto",
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForward />}
                                onClick={onProjectsClick}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                }}
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
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                }}
                            >
                                Download Resume
                            </Button>

                            <Button
                                variant="text"
                                size="large"
                                startIcon={<Email />}
                                onClick={onContactClick}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                }}
                            >
                                Contact Me
                            </Button>
                        </Stack>

                        {/* Social Links */}

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                mt: 2.5,
                            }}
                        >
                            <Tooltip title="GitHub">
                                <IconButton
                                    component="a"
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    sx={{
                                        color: "text.primary",
                                    }}
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
                                    sx={{
                                        color: "text.primary",
                                    }}
                                >
                                    <LinkedIn />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Email">
                                <IconButton
                                    component="a"
                                    href={`mailto:${profile.email}`}
                                    aria-label="Email"
                                    sx={{
                                        color: "text.primary",
                                    }}
                                >
                                    <Email />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Grid>

                    {/* Code Card */}

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: {
                                    xs: 2.5,
                                    md: 3,
                                },

                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 4,

                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily:
                                        '"Fira Code", monospace',
                                    color: "primary.main",
                                    fontSize: "0.85rem",
                                    mb: 2,
                                }}
                            >
                                ~/hariprasad
                            </Typography>

                            <Typography
                                component="div"
                                sx={{
                                    fontFamily:
                                        '"Fira Code", "monospace"',

                                    fontSize: {
                                        xs: "0.72rem",
                                        sm: "0.8rem",
                                        md: "0.86rem",
                                    },

                                    lineHeight: 2,

                                    color: "text.secondary",

                                    overflowX: "auto",

                                    whiteSpace: "normal",
                                }}
                            >
                                const engineer = {"{"}
                                <br />
                                &nbsp;&nbsp;focus:
                                ["backend", "full-stack"],
                                <br />
                                &nbsp;&nbsp;api:
                                ["REST", "JWT", "RBAC"],
                                <br />
                                &nbsp;&nbsp;database:
                                ["PostgreSQL"],
                                <br />
                                &nbsp;&nbsp;frameworks:
                                ["FastAPI", "Spring Boot"],
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