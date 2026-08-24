import {
    Paper,
    Typography,
    Stack,
    Chip,
} from "@mui/material";

export default function SkillGroup({
    title,
    skills,
}) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: {
                    xs: 2.5,
                    md: 3,
                },

                height: "100%",

                border: "1px solid",
                borderColor: "divider",

                borderRadius: 3,

                width: "100%",
                minWidth: 0,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 750,
                    mb: 2.5,
                }}
            >
                {title}
            </Typography>

            <Stack
                direction="row"
                sx={{
                    flexWrap: "wrap",
                    gap: 1,
                    width: "100%",
                    minWidth: 0,
                }}
            >
                {skills.map((skill) => (
                    <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                        size="small"
                        sx={{
                            maxWidth: "100%",
                        }}
                    />
                ))}
            </Stack>
        </Paper>
    );
}