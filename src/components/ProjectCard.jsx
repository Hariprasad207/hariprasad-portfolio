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

export default function ProjectCard({ project }) {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardContent
                sx={{
                    p: 3.25,
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 800 }}
                >
                    PROJECT
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        mt: 0.5,
                        fontWeight: 750,
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{ mt: 0.8, mb: 2.5 }}
                >
                    {project.subtitle}
                </Typography>

                <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={0.75}
                    sx={{ mb: 2.5 }}
                >
                    {project.technologies.map(
                        (technology) => (
                            <Chip
                                key={technology}
                                label={technology}
                                size="small"
                                color="primary"
                                variant="outlined"
                            />
                        )
                    )}
                </Stack>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2.5 }}
                >
                    {project.description}
                </Typography>

                <Grid container spacing={1}>
                    {project.metrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                            <Grid
                                item
                                xs={4}
                                key={metric.label}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 1.25,
                                        height: "100%",
                                        borderRadius: 2,
                                        bgcolor:
                                            "action.hover",
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
                                            fontSize: "0.92rem",
                                        }}
                                    >
                                        {metric.value}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {metric.label}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>

                <Box sx={{ mt: 2.5 }}>
                    {project.highlights.map(
                        (highlight) => (
                            <Box
                                key={highlight}
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                    mb: 1.2,
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
                                >
                                    {highlight}
                                </Typography>
                            </Box>
                        )
                    )}
                </Box>
            </CardContent>

            <CardActions sx={{ px: 3.25, pb: 3 }}>
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