import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

import {
    Api,
    Storage,
    Security,
} from "@mui/icons-material";

import SectionHeading from "../components/SectionHeading";

const items = [
    {
        icon: Api,
        title: "API Engineering",
        text: "RESTful services with authentication, authorization, service-layer architecture, and structured CRUD workflows.",
    },
    {
        icon: Storage,
        title: "Data & Performance",
        text: "Normalized PostgreSQL schemas, indexing, JOIN optimization, and query tuning with measurable response-time targets.",
    },
    {
        icon: Security,
        title: "Application Security",
        text: "JWT authentication and role-based access control designed around clearly separated user responsibilities.",
    },
];

export default function About() {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: {
                    xs: 6,
                    md: 11,
                },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                    },
                }}
            >
                <SectionHeading
                    eyebrow="ABOUT"
                    title="Engineering with a systems mindset."
                    description="I focus on building maintainable applications where API design, database performance, authentication, and user experience work together."
                />

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Grid
                                size={{ xs: 12, md: 4 }}
                                key={item.title}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            p: {
                                                xs: 2.5,
                                                md: 3.5,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 46,
                                                height: 46,
                                                borderRadius: 2,
                                                display: "grid",
                                                placeItems: "center",
                                                bgcolor: "primary.main",
                                                color:
                                                    "primary.contrastText",
                                                mb: 2.5,
                                            }}
                                        >
                                            <Icon />
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 1,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography color="text.secondary">
                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}