import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/project";

export default function Projects() {
    return (
        <Box
            component="section"
            id="projects"
            sx={{
                py: {
                    xs: 6,
                    md: 11,
                },

                bgcolor: "action.hover",
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
                    eyebrow="FEATURED PROJECTS"
                    title="Systems I've built."
                    description="Projects demonstrating backend architecture, database engineering, security, real-time systems, and full-stack integration."
                />

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {projects.map((project) => (
                        <Grid
                            size={{
                                xs: 12,
                                md: 4,
                            }}
                            key={project.title}
                            sx={{
                                minWidth: 0,
                            }}
                        >
                            <ProjectCard
                                project={project}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}