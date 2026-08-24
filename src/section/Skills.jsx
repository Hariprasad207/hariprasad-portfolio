import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeading from "../components/SectionHeading";
import SkillGroup from "../components/SkillGroup";

import { skills } from "../data/skill";

export default function Skills() {
    return (
        <Box
            component="section"
            id="skills"
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
                    eyebrow="TECHNICAL SKILLS"
                    title="Tools I build with."
                    description="A practical stack spanning backend systems, databases, frontend applications, and engineering tooling."
                />

                <Grid container spacing={{ xs: 2, md: 2.5 }}>
                    {Object.entries(skills).map(
                        ([category, items]) => (
                            <Grid
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                }}
                                key={category}
                            >
                                <SkillGroup
                                    title={category}
                                    skills={items}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </Box>
    );
}