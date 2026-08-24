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
            sx={{ py: 11 }}
        >
            <Container maxWidth="lg">
                <SectionHeading
                    eyebrow="TECHNICAL SKILLS"
                    title="Tools I build with."
                    description="A practical stack spanning backend systems, databases, frontend applications, and engineering tooling."
                />

                <Grid container spacing={2.5}>
                    {Object.entries(skills).map(
                        ([category, items]) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
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