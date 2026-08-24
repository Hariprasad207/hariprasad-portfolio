import {
    Box,
    Container,
    Stack,
    Chip,
    Typography,
} from "@mui/material";

import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimeLineItem";

import {
    timeline,
    certifications,
} from "../data/experience";

export default function Experience() {
    return (
        <Box
            component="section"
            id="experience"
            sx={{ py: 11 }}
        >
            <Container maxWidth="lg">
                <SectionHeading
                    eyebrow="EXPERIENCE & EDUCATION"
                    title="My engineering journey."
                    description="Academic foundation, professional internship experience, and focused full-stack development training."
                />

                <Box
                    sx={{
                        maxWidth: 900,
                        ml: { xs: 0, md: 2 },
                    }}
                >
                    {timeline.map((item, index) => (
                        <TimelineItem
                            key={item.title}
                            item={item}
                            isLast={
                                index ===
                                timeline.length - 1
                            }
                        />
                    ))}
                </Box>

                <Box sx={{ mt: 6 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 750,
                            mb: 2,
                        }}
                    >
                        Certifications
                    </Typography>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={1}
                    >
                        {certifications.map(
                            (certification) => (
                                <Chip
                                    key={certification}
                                    label={certification}
                                />
                            )
                        )}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}