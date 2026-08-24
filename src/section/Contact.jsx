import {
    useState,
} from "react";

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
            sx={{ py: 11 }}
        >
            <Container maxWidth="md">
                <SectionHeading
                    eyebrow="CONTACT"
                    title="Let's build something useful."
                    description="I'm open to software engineering opportunities involving backend development, full-stack systems, APIs, databases, and application engineering."
                />

                <Card>
                    <CardContent
                        sx={{
                            p: {
                                xs: 3,
                                md: 5,
                            },
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
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
                                        alignItems="center"
                                    >
                                        <Email color="primary" />

                                        <Box
                                            sx={{ minWidth: 0 }}
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
                                                    wordBreak:
                                                        "break-word",
                                                }}
                                            >
                                                {profile.email}
                                            </Typography>
                                        </Box>

                                        <Tooltip title="Copy email">
                                            <IconButton
                                                onClick={copyEmail}
                                                sx={{
                                                    ml: "auto",
                                                }}
                                                aria-label="Copy email"
                                            >
                                                <ContentCopy fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
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
                                        alignItems="center"
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

                            <Grid item xs={12}>
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
                                        alignItems="center"
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
                                startIcon={<Email />}
                                component="a"
                                href={`mailto:${profile.email}`}
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