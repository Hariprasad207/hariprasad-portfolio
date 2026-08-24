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
                py: 11,
                bgcolor: "action.hover",
            }}
        >
            <Container maxWidth="lg">
                <SectionHeading
                    eyebrow="FEATURED PROJECTS"
                    title="Systems I've built."
                    description="Projects demonstrating backend architecture, database engineering, security, real-time systems, and full-stack integration."
                />

                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={project.title}
                        >
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}