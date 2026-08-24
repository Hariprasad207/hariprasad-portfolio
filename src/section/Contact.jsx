import { useState } from "react";

import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    Grid,
    Paper,
    Stack,
    IconButton,
    Tooltip,
    Button,
    Snackbar,
    Alert,
} from "@mui/material";

import {
    Email,
    Phone,
    LocationOn,
    ContentCopy,
    LinkedIn,
    GitHub,
} from "@mui/icons-material";

import SectionHeading from "../components/SectionHeading";

export default function Contact({
    profile,
}) {
    const [copied, setCopied] =
        useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(
                profile.email
            );

            setCopied(true);
        } catch {
            window.location.href =
                `mailto:${profile.email}`;
        }
    };

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: {
                    xs: 6,
                    md: 11,
                },
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                    },
                }}
            >
                <SectionHeading
                    eyebrow="CONTACT"
                    title="Let's build something useful."
                    description="I'm open to software engineering opportunities involving backend development, full-stack systems, APIs, databases, and application engineering."
                />

                <Card
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <CardContent
                        sx={{
                            p: {
                                xs: 2.5,
                                sm: 3,
                                md: 5,
                            },
                        }}
                    >
                        <Grid container spacing={2}>
                            {/* Email */}

                            <Grid size={{ xs: 12, md: 6 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        border: "1px solid",
                                        borderColor: "divider",
                                        minWidth: 0,
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        sx={{
                                            minWidth: 0,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Email color="primary" />

                                        <Box
                                            sx={{
                                                minWidth: 0,
                                                flex: 1,
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                Email
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontWeight: 650,
                                                    fontSize: {
                                                        xs: "0.88rem",
                                                        sm: "1rem",
                                                    },
                                                    overflowWrap:
                                                        "anywhere",
                                                }}
                                            >
                                                {profile.email}
                                            </Typography>
                                        </Box>

                                        <Tooltip title="Copy email">
                                            <IconButton
                                                onClick={copyEmail}
                                                aria-label="Copy email"
                                                sx={{
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <ContentCopy fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Phone */}

                            <Grid size={{ xs: 12, md: 6 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        border: "1px solid",
                                        borderColor: "divider",
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        sx={{
                                            alignItems: "center",
                                        }}
                                    >
                                        <Phone color="primary" />

                                        <Box>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                Phone
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontWeight: 650,
                                                }}
                                            >
                                                {profile.phone}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Grid>

                            {/* Location */}

                            <Grid size={{ xs: 12 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        border: "1px solid",
                                        borderColor: "divider",
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        sx={{
                                            alignItems: "center",
                                        }}
                                    >
                                        <LocationOn color="primary" />

                                        <Box>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                Location
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontWeight: 650,
                                                }}
                                            >
                                                {profile.location}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>

                        {/* Buttons */}

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={1.5}
                            sx={{
                                mt: 3.5,
                            }}
                        >
                            <Button
                                variant="contained"
                                startIcon={<Email />}
                                component="a"
                                href={`mailto:${profile.email}`}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                }}
                            >
                                Email Me
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<LinkedIn />}
                                component="a"
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                }}
                            >
                                LinkedIn
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<GitHub />}
                                component="a"
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "auto",
                                    },
                                }}
                            >
                                GitHub
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>

            <Snackbar
                open={copied}
                autoHideDuration={2500}
                onClose={() => setCopied(false)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <Alert
                    severity="success"
                    variant="filled"
                >
                    Email address copied.
                </Alert>
            </Snackbar>
        </Box>
    );
}