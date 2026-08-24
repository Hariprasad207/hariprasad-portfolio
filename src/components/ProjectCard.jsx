import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Chip,
    Stack,
    Grid,
    Paper,
    Box,
    Button,
} from "@mui/material";

import {
    Code,
    OpenInNew,
} from "@mui/icons-material";

export default function ProjectCard({
    project,
}) {
    return (
        <Card
            sx={{
                height: "100%",
                width: "100%",
                minWidth: 0,

                display: "flex",
                flexDirection: "column",

                overflow: "hidden",
            }}
        >
            <CardContent
                sx={{
                    p: {
                        xs: 2.5,
                        md: 3.25,
                    },

                    flexGrow: 1,

                    minWidth: 0,
                }}
            >
                <Typography
                    variant="overline"
                    color="primary"
                    sx={{
                        fontWeight: 800,
                    }}
                >
                    PROJECT
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        mt: 0.5,
                        fontWeight: 750,
                        lineHeight: 1.25,
                        overflowWrap: "break-word",
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mt: 0.8,
                        mb: 2.5,
                        lineHeight: 1.6,
                    }}
                >
                    {project.subtitle}
                </Typography>

                {/* Technology Chips */}

                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "100%",
                        minWidth: 0,
                        mb: 2.5,
                        overflow: "hidden",
                    }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            flexWrap: "wrap",
                            gap: 0.75,
                            width: "100%",
                            maxWidth: "100%",
                        }}
                    >
                        {project.technologies.map(
                            (technology) => (
                                <Chip
                                    key={technology}
                                    label={technology}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                    sx={{
                                        maxWidth: "100%",

                                        "& .MuiChip-label": {
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        },
                                    }}
                                />
                            )
                        )}
                    </Stack>
                </Box>

                {/* Description */}

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 2.5,
                        lineHeight: 1.7,
                    }}
                >
                    {project.description}
                </Typography>

                {/* Metrics */}

                <Grid
                    container
                    spacing={1}
                    sx={{
                        width: "100%",
                    }}
                >
                    {project.metrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                            <Grid
                                size={{ xs: 4 }}
                                key={metric.label}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: {
                                            xs: 1,
                                            sm: 1.25,
                                        },

                                        height: "100%",

                                        borderRadius: 2,

                                        bgcolor: "action.hover",

                                        minWidth: 0,
                                    }}
                                >
                                    <Icon
                                        sx={{
                                            fontSize: 18,
                                            color: "primary.main",
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            mt: 0.5,
                                            fontWeight: 800,
                                            fontSize: {
                                                xs: "0.78rem",
                                                sm: "0.92rem",
                                            },
                                        }}
                                    >
                                        {metric.value}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{
                                            display: "block",
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        {metric.label}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>

                {/* Highlights */}

                <Box sx={{ mt: 2.5 }}>
                    {project.highlights.map(
                        (highlight) => (
                            <Box
                                key={highlight}
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                    mb: 1.2,
                                    minWidth: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 5,
                                        height: 5,
                                        mt: "9px",
                                        flexShrink: 0,
                                        borderRadius: "50%",
                                        bgcolor: "primary.main",
                                    }}
                                />

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    {highlight}
                                </Typography>
                            </Box>
                        )
                    )}
                </Box>
            </CardContent>

            {/* Actions */}

            <CardActions
                sx={{
                    px: {
                        xs: 2.5,
                        md: 3.25,
                    },

                    pb: {
                        xs: 2.5,
                        md: 3,
                    },
                }}
            >
                <Button
                    size="small"
                    startIcon={<Code />}
                    component="a"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Code
                </Button>
            </CardActions>
        </Card>
    );
}